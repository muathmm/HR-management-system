//  function employee(id,fullname,department,level,imgeurl){
//     this.id=id;
//     this.fullname=fullname;
//     this.delprtment=department;
//     this.level=level;
//     this.imgurl=imgeurl;
//     this.salary=0;
//     this.netSalary=0;
//  }

//  employee.prototype.calculateSalary=function(){
//     let emp_salary;
//     switch(this.level){
//         case 'Senior':emp_salary= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
//         break;
//         case 'Mid-Senior':emp_salary= Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
//         break;
//         case 'Junior': emp_salary=Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
//         break;
//         default:emp_salary=1;
//     }
//     this.salary=emp_salary;
//     this.netSalary=emp_salary*0.075;
//  }

// employee.prototype.render=function(){
//     const  emp_container=document.getElementById('employee-info');
//     const employeeCard=document.createElement('div');
//     employeeCard.classList.add('employee_card');
//     employeeCard.innerHTML=`<h2>${this.fullname}</h2>
//     <p> Salary: ${this.salary}</p>
//     <p>Net Salary: ${this.netSalary.toFixed(2)}
    

//     `
//     emp_container.appendChild(employeeCard);
// }
//  const employees=[
//  {id:'1000',fullame:'ghazi Samer',Department:'Administration',level:'Senior'},
//  {id:'1001',fullame:'Lana Ali',Department:'Finance',level:'Senior'},
//  {id:'1002',fullame:'Tamara Ayoub',Department:'Markiting',level:'Senior'},
//  {id:'1003',fullame:'Safi Walid',Department:'Administration',level:'Mid-Senior'},
//  {id:'1004',fullame:'Omar Zaid',Development:'Administration',level:'Senior'},
//  {id:'1005',fullame:'Hadi Ahmad',Department:'Finance',level:'Mid-Senior'},
//  {id:'1006',fullame:'Rana Salih',Department:'Development',level:'Junior'}
//  ];
//  employees.forEach((element) => {
//     let emp=new employee(element.id,element.fullame,element.Department,element.level,'empty') ;
//  emp.calculateSalary();
//  emp.render();
 
//  }); 
//lab-8


 function callSallary( level){
   let emp_salary;
   switch(level){
       case 'Senior':emp_salary= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
       break;
       case 'Mid-Senior':emp_salary= Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
       break;
       case 'Junior': emp_salary=Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
       break;
       default:emp_salary=1;
   }
   
   return emp_salary
}
let currentIds = new Set(); // Holds generated IDs

function generateUniqueId() {
  let uniqueId;
  do {
    uniqueId = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
  } while (currentIds.has(uniqueId));
  currentIds.add(uniqueId);
  return uniqueId;
}

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
   const sall=callSallary(level);
 
   renderEmployeeCard({ fullName, department, level, imageUrl, employeeId,sall });
 }

 function renderEmployeeCard(employee) {
   const { fullName, department, level, imageUrl, employeeId ,sall} = employee;
 

   let departmentContainer = document.getElementById(`department-${department}`);
   if (!departmentContainer) {
     departmentContainer = document.createElement('section');
     departmentContainer.id = `department-${department}`;
     departmentContainer.innerHTML = `<h2>${department}</h2><div class="employees"></div>`;
     document.getElementById('employeesContainer').appendChild(departmentContainer);
   }
 
  
   const card = document.createElement('div');
   card.className = 'employee-card';
   card.innerHTML = `
     <img src="${imageUrl}" alt="${fullName}" class="employee-image">
     <div class="employee-info">
       <h3>${fullName} (ID: ${employeeId})</h3>
       <p>Department: ${department}</p>
       <p>Level: ${level}</p>
       <p>Salary: ${sall}</p>
     </div>
   `;
 
   // Append the card to the correct department section
   departmentContainer.querySelector('.employees').appendChild(card);
 }
 