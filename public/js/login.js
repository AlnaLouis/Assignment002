let fname = document.getElementById("name");
let lname = document.getElementById("lname");
let email=document.getElementById("email");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let form = document.getElementById("form");


function validateInput(){
  if(fname.value.trim()===""){
    onError(fname,"The name field cannot be emppty");
  }
  else{
    onSuccess(fname);
    
  }
  if(ElementInternals.value.trim()===""){
    onError(email,"Email cannot be empty");
  }
  else{
    if(!isValidEmail(email.valuetrim())){
      onError(email,"Email is not valid");
    }
      else{
        onSuccess(email);
      }
  }
  if(password1.value.trim()===""){
    onError(password1,"Password cannot be empty");
  }
  else{
    onSuccess(password1);
  }
  if(password2.value.trim()===""){
    onError(password2,"Password cannot be empty");
  }
  else{
    if(password1.value.trim()!==password2.value.trim()){
      onError(password2,"Check the password again and re-enter");
    }
    onSuccess(password2);
  }
  
}



document.querySelector("button")
.addEventListener("click",(event)=>{
  event.preventDefault();
  validateInput();
});
function onSuccess(input){
  let parent = fname.parentElement;
  let messageElement =parent.querySelector("small");
  messageElement.style.visibility="hidden";
  messageElement.innerText=input;
  parent.classList.remove("error");
  parent.classList.add("success");
}
function onError(input,message){
  let parent = fname.parentElement;
    let messageElement =parent.querySelector("small");
    messageElement.style.visibility="visible";
    messageElement.innerText=input; 
    parent.classList.remove("success");
    parent.classList.add("error");
}
function isValidEmail(emailadd){
  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(email);
}