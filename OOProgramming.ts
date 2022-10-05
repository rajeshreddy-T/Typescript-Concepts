class Person {
    constructor(private firstName: string,private lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {
        super(firstName, lastName);
    }
}

let employee = new Employee('john', 'Doe', 'Web developer');
console.log(employee.getFullName);
console.log(employee.describe());
