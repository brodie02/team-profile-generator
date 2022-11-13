function createManagerCard (manager) {
    const managerCard = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${manager.name}</h5>
  <h5 class="card-text">Manager</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${manager.id}</li>
  <li class="list-group-item">Email: ${manager.email}</li>
  <li class="list-group-item">Office Number: ${manager.office}</li>
</ul>
</div>`
return managerCard
}

function createEngineerCards (engineers) {
    let engineerCards = ``
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <h5 class="card-text">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GitHub: ${engineer.github}</li>
        </ul>
        </div>`
    engineerCards += card
    }
    return engineerCards
}


function createInternCards (interns) {
    let internCards = ``
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <h5 class="card-text">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>`

    internCards += card
    }
    return internCards
}


module.exports = { createManagerCard, createEngineerCards, createInternCards }