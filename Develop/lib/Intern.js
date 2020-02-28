const Employee = require('./Employee');
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
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
    <li class="list-group-item">School: ${this.school}</li>
  </ul>
  </div>
</div>
        `}
}

module.exports = Intern;
