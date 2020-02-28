const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
getHtml(){
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${this.name}</h3>
    <h4 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${this.id}</li>
    <li class="list-group-item">Email: ${this.email}</li>
    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
  </ul>
  </div>
</div>
`}
}

module.exports = Manager