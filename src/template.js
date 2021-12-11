function getManagerCard(manager) {
    return `
    <div class="col-3 mt-3">
    <div class="card h-50 mt-2">
        <div class="card-header">
            <h3>${manager.getName()}</h3>
            <h4 class="card-subtitle"><span class="material-icons">workspace_premium</span> Manager</h4>
        </div>
        <div class="card-body">
            <p class="id list-group-item">ID: ${manager.getId()}</p>
            <p class="email list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.email}</a></p>
            <p class="office list-group-item">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
    `
}

function getEngineerCard(engineer) {
    return `
    <div class="col-3 mt-3">
    <div class="card h-50 mt-2">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4 class="card-subtitle"><span class="material-icons">computer</span> Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id list-group-item">ID: ${engineer.id}</p>
            <p class="email list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
    </div>
    `
}

function getInternCard(intern) {
    return `
    <div class="col-3 mt-3">
    <div class="card h-50 mt-2">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4 class="card-subtitle"><span class="material-icons">science</span> Intern</h4>
        </div>
        <div class="card-body">
            <p class="id list-group-item">ID: ${intern.id}</p>
            <p class="email list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school list-group-item">School: ${intern.school}</p>
        </div>
    </div>
    </div>
    `
}

function generateTeam(team) {
    const htmlArr = [];
    htmlArr.push(team.filter(employee => employee.getRole() === "Manager").map(manager => getManagerCard(manager)))

    htmlArr.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => getEngineerCard(engineer)).join(""))

    htmlArr.push(team.filter(employee => employee.getRole() === "Intern").map(intern => getInternCard(intern)).join(""))

    return htmlArr.join("")
}

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="row">
            <div class="row justify-content-center" id="team-cards">
                <!--Team Cards-->
                ${generateTeam(team)}
            </div>
        </div>
    </main>
</body>
</html>
    
    `
}