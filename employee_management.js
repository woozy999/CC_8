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

