const form = document.getElementById('form')
const names = document.getElementById('name')

const email = document.getElementById('email')
const word = document.getElementById('sub2')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){

  const nameValue = names.value.trim();
  
  const emailValue = email.value.trim();
  const wordValue = word.value.trim();


  if(nameValue == ""){
      setErrorFor(names,'Names must be filled')
  }else{
      setSuccessFor(names ,'Successful')
  }

  

  if(emailValue==""){
      setErrorFor(email,'Please your email is needed')
  }else{
      setSuccessFor(email,'Successful')
  }

  if(wordValue==''){
      setErrorFor(word,'Please address is needed')
  }else{
  setSuccessFor(word,'Thanks for Abiding')
}
}






function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText= message;

    formControl.className="control error";
}
function setSuccessFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className="control success";
}

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(6.758056764368059, 3.25410427316781),
      zoom: 5
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);