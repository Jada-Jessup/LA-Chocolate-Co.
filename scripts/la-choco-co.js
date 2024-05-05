
//Display an alert when the form gets submitted 

const form = document.getElementById("my-form");
const firstName = document.getElementById("first-name");
const emailAddress = document.getElementById("email");
const message = document.getElementById("message");


form.addEventListener("submit", (e) => {

    e.preventDefault();

    // checkValues();

    if((firstName.value !== "") && (emailAddress.value !== "") && (message.value !== "")) {
        form.submit();
        console.log("Thank you for completing our form");
        alert("Thank you for completing our form! We will reach out to you shortly.");
    } 
   
});

