function getManagerCard(manager) {
    return `
    ${manager.getName()}
    
    `
}

function getEngineerCard(engineer) {
    return `
    ${engineer.getName()}
    
    `
}

function getInternCard(intern) {
    return `
    ${intern.getName()}
    
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
    <title>Document</title>
</head>
<body>
    ${generateTeam(team)}
</body>
</html>
    
    `
}