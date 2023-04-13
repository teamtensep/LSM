const btn = document.querySelector('button')
const inputs= document.querySelector('form')
btn.addEventListener('click',() => {
    Email.send({
        // Host:"smtp://smtp.mailtrap.io:2525",
        SecureToken:"d191537d-5c7e-4f58-bbaf-05948c6ed560",
        To:"xyz@gm.com",
        From: inputs.elements["email"].value,
        Subject: "Appointments",
        Body: inputs.elements["text"].value
    }).then(msg => alert("sent"))

})