class Employee {
    constructor(a, b, c){
        this.name = a;
        this.id = b;
        this.email = c;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
    
}

let bowen = new Employee('bowen', 2, 'bowen@bowen.com')
let chad = new Employee('Chad', 1 , "something@gmail.com")
console.log(bowen.getName());
console.log(chad.getName())

module.exports = Employee;