//cc 8

//task 1

//create employee class & info
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        return `Name: ${this.name}, position: ${this.position}, salary: $${this.salary}`;
    }
}

//task 2

//make department class & add employee

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

//task 4 (updated code to handle bonuses)

    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            let totalSalary = total + employee.salary;
            if (employee instanceof Manager) {
                totalSalary += employee.bonus;
            }
            return totalSalary;
        }, 0);
    }
}


//task 3

//create manager class & details
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }

    getDetails() {
        return `Name: ${this.name}, position: ${this.position}, salary: $${this.salary}, bonus: $${this.bonus}`;
    }
}

//task 5

//add employee info

const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

engineering.addEmployee(alice);
engineering.addEmployee(charlie);

marketing.addEmployee(bob);
marketing.addEmployee(diana);

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
