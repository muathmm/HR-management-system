 function employee(id,fullname,department,level,imgeurl){
    this.id=id;
    this.fullname=fullname;
    this.delprtment=department;
    this.level=level;
    this.imgurl=imgeurl;
    this.salary=0;
    this.netSalary=0;
 }

 employee.prototype.calculateSalary=function(){
    let emp_salary;
    switch(this.level){
        case 'Senior':emp_salary= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        break;
        case 'Mid-Senior':emp_salary= Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        break;
        case 'Junior': emp_salary=Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        break;
        default:emp_salary=1;
    }
    this.salary=emp_salary;
    this.netSalary=emp_salary*0.075;
 }

employee.prototype.render=function(){
    const  emp_container=document.getElementById('employee-info');
    const employeeCard=document.createElement('div');
    employeeCard.classList.add('employee-card');
    employeeCard.innerHTML=`<h2>${this.fullname}</h2>
    <p> Salary: ${this.salary}</p>
    <p>Net Salary: ${this.netSalary.toFixed(2)}
    

    `
    emp_container.appendChild(employeeCard);
}
 const employees=[
 {id:'1000',fullame:'ghazi Samer',Department:'Administration',level:'Senior'},
 {id:'1001',fullame:'Lana Ali',Department:'Finance',level:'Senior'},
 {id:'1002',fullame:'Tamara Ayoub',Department:'Markiting',level:'Senior'},
 {id:'1003',fullame:'Safi Walid',Department:'Administration',level:'Mid-Senior'},
 {id:'1004',fullame:'Omar Zaid',Development:'Administration',level:'Senior'},
 {id:'1005',fullame:'Hadi Ahmad',Department:'Finance',level:'Mid-Senior'},
 {id:'1006',fullame:'Rana Salih',Department:'Development',level:'Junior'}
 ];
 employees.forEach((element) => {
    let emp=new employee(element.id,element.fullame,element.Department,element.level,'empty') ;
 emp.calculateSalary();
 emp.render();
 
 }); 


