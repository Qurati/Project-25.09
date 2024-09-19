

function sendEmail() {
    alert('start');
    Email.send({
        Host: "smtp.gmail.com",
        Username: "s110919858@gmail.com",
        Password: "Ghoul.1000-7",
        To: 'sasha.solev.legenda@gmail.com',
        From: "s110919858@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("Mail has been sent successfully");
        });
}