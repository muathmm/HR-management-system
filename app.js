function Employee(fullName, department, level, imgUrl, id, salary) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imgUrl = imgUrl; 
  this.salary = salary;
  
}

let currentIds = new Set();

function generateUniqueId() {
  let uniqueId;
  do {
      uniqueId = Math.floor(1000 + Math.random() * 9000);
  } while (currentIds.has(uniqueId));
  currentIds.add(uniqueId);
  return uniqueId;
}

function calculateSalary(level) {
  let empSalary;
  switch(level) {
      case 'Senior':
          empSalary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
          break;
      case 'Mid-Senior':
          empSalary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
          break;
      case 'Junior':
          empSalary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500
          break;
      default:

          empSalary = 0; 
  }
  console.log(empSalary)
  return empSalary;
}

Employee.prototype.render = function() {
  let departmentContainer = document.getElementById(`department-${this.department}`);
   if (!departmentContainer) {
     departmentContainer = document.createElement('section');
     departmentContainer.id = `department-${this.department}`;
     departmentContainer.innerHTML = `<h2>${this.department}</h2><div class="employees"></div>`;
     document.getElementById('employeesContainer').appendChild(departmentContainer);
   }
 
  
   const card = document.createElement('div');
   card.className = 'employee-card';
   card.innerHTML = `
     <img src="${this.imgUrl}" alt="${this.fullName}" class="employee-image">
     <div class="employee-info">
       <h3>${this.fullName} (ID: ${this.id})</h3>
       <p>Department: ${this.department}</p>
       <p>Level: ${this.level}</p>
       <p>Salary: ${this.salary}</p>
     </div>
   `;
 

   departmentContainer.querySelector('.employees').appendChild(card);
  

};


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('hrForm');
  form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const department = document.getElementById('department').value;
  const level = document.getElementById('level').value;
  const imageUrl = document.getElementById('imageUrl').value;
  const employeeId = generateUniqueId();
  const salary = calculateSalary(level);

  let emp = new Employee(fullName, department, level, imageUrl, employeeId, salary);
  emp.render();
}

   