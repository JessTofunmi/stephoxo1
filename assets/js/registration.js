const form = document.getElementById('form')
const names = document.getElementById('name')
const sur = document.getElementById('lastname')
const phone = document.getElementById('phone')
const email = document.getElementById('email')



var sub_btn=document.querySelector("#sinupbtn")

sub_btn.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    if(nameValue=="" || lastnameValue=="" || phoneValue=="" || emailValue==""){
        setErrorFor();
            }else{
                sendmail(nameValue,lastnameValue,phoneValue,emailValue);
                window.open("register.html","_self")
                
            }
            checkInputs();

    })

    
var forms=document.querySelector("#button")
forms.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameValue="Great"){
            window.open("register.html","_self")
            console.log("correct");
        }else{
            console.log("incorrect");
        }

    checkInputs();
        
})

function checkInputs(){

  const nameValue = names.value.trim();
  const lastnameValue = sur.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  


  if(nameValue == ""){
      setErrorFor(names,'This field is required')
  }else{
      setSuccessFor(names ,'Successful')
  }

  if(lastnameValue == ""){
    setErrorFor(sur,'This field is required')
}else{
    setSuccessFor(sur ,'Successful')
}

  if(phoneValue == ""){
      setErrorFor(phone,'This field is required')
  }else if(phoneValue === ''){
      setErrorFor(phone,'Your Phone number must be digits please')
  }
  else{
      setSuccessFor(phone,'Successful')
  }

  if(emailValue==""){
      setErrorFor(email,'This field is required')
  }else{
      setSuccessFor(email,'Successful')
  }
}

function sendmail(nameValue,lastnameValue,phoneValue,emailValue){
    emailjs.send("service_k77f0xk","template_cqse9vq",{
        from_name: "nameValue",
        to_name: "tofunmi",
        message: "",
        });
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

function validEmail(email){
    // const re = /\S+@\S+\.\S+/; 
    //const re2= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,1}))$/;


    return re2.test(string(email).toLowerCase());
}

// var sub_btn=document.querySelector("#sinupbtn")
// sub_btn.addEventListener("click",(e)=>{
//         if(nameValue="Great"){
//             window.open("register.html","_self")
//             console.log("correct");
//         }else if(nameValue=="Great1"){
//             console.log("incorrect");
//         }
//     })
    
