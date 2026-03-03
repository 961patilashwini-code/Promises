class person1 {
    constructor(name,age){
        this.name = name
        this.age = age;
    }
    introduce(){
        console.log(`Hii, I am ${this.name} and i am ${this.age} year old.`)
    }
}

class Student extends person1 {
    constructor(name, age, course){
        super(name,age)
        this.course = course;
    }
    
    study(){
        console.log(`I am studying ${this.course}`);
    
 }

}

let s1 = new Student("Ashwini", 22, "Web Development");

s1.introduce();
s1.study();

// 2

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working.`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    work() { 
        console.log(`${this.name} is managing ${this.department} department.`);
    }

    details() {
        console.log(`Salary: ${this.salary}`);
    }
}

let m1 = new Manager("Ashwini", 50000, "IT");

m1.work();      
m1.details();