//get the elements
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInput()
})

function checkInput(){
    //get the inputs from the user input fields

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    //checks
if(usernameValue == "") {
    //show error message
    //add error class
    setErrorFor(username,"Username cannot be blank")

}else{
    setSuccessFor(username, 'Successful')
}
//check for email
if(emailValue === "" ){
    //add error class and show error message
    setErrorFor(email, "Email cannot be blank")
}else if(!validEmail(emailValue)){
    setErrorFor(email, "email not valid")
}
else {
    setSuccessFor (email, "successful")
}

//password check
if(passwordValue === ""){
    setErrorFor(password, "Password cannot be blank")
}else{
    setSuccessFor(password, "password is ok")
}
   

if(password2Value === "" || password2Value.length < 5){
    setErrorFor(password2, "password cannot be blank or less than 5 character")
}else if(passwordValue !== password2Value){
    setErrorFor(password2, "password do not match")
}
else{
    setSuccessFor(password2, "passwords match, Welcome!")
}
}


function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    //add error message inside the small tags
    small.innerText =message;

    //add error class
    formControl.className = "form-control error"
}
function setSuccessFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = "form-control success"
}

//Use a regular expression to validate the email CharacterData
//Note that this validation should be replicated on the server side

function validEmail(email){
    // const re = /\S+@\S+\.\S+/; 
    //const re2= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,1}))$/;


    return re2.test(string(email).toLowerCase());
}