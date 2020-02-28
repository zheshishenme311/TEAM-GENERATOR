const Employee = require('./Employee');
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getRole(){
        return 'Engineer'
    }
    getGithub(){
        return this.github
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
    <li class="list-group-item">Github: ${this.github}</li>
  </ul>
  </div>
</div>
        `}
}

module.exports = Engineer