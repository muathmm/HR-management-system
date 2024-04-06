
const employees = JSON.parse(localStorage.getItem('employees')) || [];


const departmentInfo = employees.reduce((acc, { department, salary }) => {
  if (!acc[department]) {
    acc[department] = { count: 0, totalSalary: 0 };
  }
  acc[department].count++;
  acc[department].totalSalary += salary;
  return acc;
}, {});

let totalEmployees = 0, totalSalary = 0;
Object.values(departmentInfo).forEach(dept => {
  totalEmployees += dept.count;
  totalSalary += dept.totalSalary;
});
const averageSalaryAll = totalSalary / totalEmployees;


function createTable() {
  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Department</th>
      <th># of employees</th>
      <th>Total Salary</th>
      <th>Average Salary</th>
    </tr>
  `;

  Object.entries(departmentInfo).forEach(([department, { count, totalSalary }]) => {
    const averageSalary = totalSalary / count;
    const row = table.insertRow();
    row.innerHTML = `
      <td>${department}</td>
      <td>${count}</td>
      <td>${totalSalary.toFixed(2)}</td>
      <td>${averageSalary.toFixed(2)}</td>
    `;
  });

  const footer = table.createTFoot();
  const row = footer.insertRow();
  row.innerHTML = `
    <td>Total</td>
    <td>${totalEmployees}</td>
    <td>${totalSalary.toFixed(2)}</td>
    <td>${averageSalaryAll.toFixed(2)}</td>
  `;

  
  document.querySelector('.employee').appendChild(table);
}

document.addEventListener('DOMContentLoaded', createTable);
