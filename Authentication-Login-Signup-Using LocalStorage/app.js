function loginPage() {
    document.getElementById("card-print").innerHTML = `
    <img onclick="back()" src="image/left-arrow-18.gif" alt="" class="arrow">
<div class="input-item">
        <input type="name" placeholder="First Name" id="firstNmae">
        <input type="text"  placeholder="Last Name" id="lastName">
        <input type="email"  placeholder="Enter your Email" id="email">
        <input type="password"  placeholder="password" id="password" >
        </div>
        <button class="sing-uo-btn" onclick="loginPag()">Sign Up</button>
    </div>
`}
let user = 0;
function loginPag() {
    let firstNmae = document.getElementById("firstNmae");
    let lastNmae = document.getElementById("lastName");
    let email = document.getElementById("email");
    let passwod = document.getElementById("password");
    let emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (emailPattern.test(email.value) && firstNmae.value.trim() !== "" && lastNmae.value.trim() !== "" && passwod.value.trim() !== "") {
        user++
        localStorage.setItem(
            `user${user}`, JSON.stringify(obj = {
                firstName: `${firstNmae.value}`,
                lastName: `${lastNmae.value}`,
                email: `${email.value}`,
                passwod: `${passwod.value}`
            }
            ))
        swal("Sign Up!", "You clicked the button!", "success");
        firstNmae.value = "";
        lastNmae.value = "";
        email.value = "";
        passwod.value = "";
    } else {
        swal({
            title: "Plese fill out this feild",
            text: "Please enter a valid email address",
            icon: "error",
            button: "OK",
        });
    }
}
function log() {
    let logEmail = document.getElementById("ligEmail");
    let logPassword = document.getElementById("logPassword");
    for (var i = 1; i < localStorage.length + 1; i++) {
        let localget = JSON.parse((localStorage.getItem(`user${i}`)));
        if (logEmail.value == localget.email && logPassword.value == localget.passwod && logEmail.value.trim() !== "" && logPassword.value.trim() !== "") {
            swal("Log in!", "You clicked the button!", "success");

            logEmail.value = "";
            logPassword.value = "";
            break
        }
        else {
            swal({
                title: "Rong password user name",
                text: "Please enter a valid email & User name",
                icon: "error",
                button: "OK",
            });
        }
    }
}
function back() {
    document.getElementById("card-print").innerHTML = `
    <div class="login">
    <div class="input-item">
        <input type="email" placeholder="Email" id="ligEmail">
        <input  type="password" placeholder="password" id="logPassword">
    </div>
    <button class="log-btn" onclick="log()">Log in</button>
    <a href="#" class="forget">Forgotten password?</a>
    <hr />
    <button class="sing-uo-btn" onclick="loginPage() ">Create a new account</button>
</div>
    `
}