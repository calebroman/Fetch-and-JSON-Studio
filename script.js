window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const div = document.getElementById("container")
            let astronautInfo = ''
            for (astronauts of json) {
                astronautInfo += `
        <div class="astronaut">
            <div class="bio">
           <h3> ${astronauts.firstName} ${astronauts.lastName} </h3>
           <ul>
                <li> Hours in space: ${astronauts.hoursInSpace} </li>
                <li> Active: ${astronauts.active} </li>
                <li> Skills: ${astronauts.skills} </li>
            </ul>
        </div>
        <img class="avatar" src=${astronauts.picture} </img>
        </div>        `
            }
            container.innerHTML = astronautInfo
        })
    })
})