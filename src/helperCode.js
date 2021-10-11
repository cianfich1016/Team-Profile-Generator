const generateIndex = (team) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
</head>

<body>
    <header class="header">
        <h1 class="headerTitle">My Team</h1>
    </header>

    <section class="employeeInfo">
        <div class="card bg-primary mb-3 cardMain" style="max-width: 18rem;">
            <div class="card-header">
                <h3>${team[0].name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body bg-light">
                <div class="card cardInner" style="width: 16rem;">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${team[0].id}</li>
                      <li class="list-group-item">Email: ${team[0].email}</li>
                      <li class="list-group-item">Office Number: ${team[0].officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>  
  </body>`
  }

  module.exports = generateIndex;