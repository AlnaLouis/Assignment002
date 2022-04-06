function validation(){
  var username = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  var conpass = document.getElementById("conpass").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;

  var reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;





  if(username==""){
    document.getElementById("usernameer").innerHTML = `<b>**Please fill the username field:(</b>`;
    return false;
  }
  if((username.length <=3)||(username.length>=20)){
    document.getElementById("usernameer").innerHTML = `**<b>The Username length sholud not be 3 or less and 20 or greater:(</b>`;
    return false;
  }


  if(pass==""){
    document.getElementById("password").innerHTML = `<b>**Please fill the password field;(</b>`;
    return false;
  }
  if((pass.length <=5)||(pass.length>=10)){
    document.getElementById("password").innerHTML = `**<b>The password length sholud not be 5 or less and 10 or greater:(</b>`;
    return false;
  }

  if(conpass==""){
    document.getElementById("confirmpassword").innerHTML = `<b>**Please fill to confirm the password field;(</b>`;
    return false;
  }
  if(pass!=conpass){
    document.getElementById("confirmpassword").innerHTML = `<b>**Please recheck the both password fields;(</b>`;
    return false;
  }

  if(mobile==""){
    document.getElementById("phonenumber").innerHTML = `<b>**Please fill the mobile number field:(</b>`;
    return false;
  }
  if(isNaN(mobile)){
    document.getElementById("phonenumber").innerHTML = `<b>**Oop's doubt if that is a number:(</b>`;
    return false;
  }
  if(mobile.length!=10){
    document.getElementById("phonenumber").innerHTML = `<b>**Please enter a valid phone number of 10 digits:(</b>`;
    return false;
  }


  if(email==""){
    document.getElementById("eid").innerHTML = `<b>**Please fill the email field:( </b>`;
    return false;
  }
 
   
    if(!(reg1.test(myInput.value))){
      document.getElementById("eid").innerHTML = `<b>**Please enter valid email id:( </b>`;
      return false;
    }
}




/*
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


var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
const username=document.getElementById("username");
const email=document.getElementById("email");
const submit=document.getElementById("form")
  

const password2=document.getElementById("password2");
const phone=document.getElementById("phone");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
 
}
// function match(username,phone,email,myInput,password2,userValidate,phoneValidate,validateEmail,validatePass,confirmPass)
// {   const uservalidate=userValidate(username);
//   const phonevalidate=phoneValidate(phone);    
//     const emailvalidate=validateEmail(email);   
//     const passvalidate=validatePass(myInput);   
//     const confirmvalidate=confirmPass(password2);   
  
//     if(uservalidate && phonevalidate && emailvalidate && passvalidate && confirmvalidate){
//       window.href="/login"
        

//           return false;
        
//     }
// }
function userValidate(){
 if(username.value.trim()==""){
  setErrorFor(username,'username cannot be empty');
}
else if(username.value.length<5)
{setErrorFor(username,'minimum 5 characters')}
else{ 
 setSuccessFor(username)

return true;

}}

function phoneValidate(){
  // const phoneValue= phone.value.trim();
  if(phone.value==""){
    setErrorFor(phone,"Phone number can't be empty"); 
    return false;
   
  }else if(! /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone.value.trim())){
    setErrorFor(phone,"Accepts only this format: xxxxxxxxxx,xxx-xxx-xxxx,xxx.xxx.xxxx");
    return false;
   
  }else{
    setSuccessFor(phone);
    return true;
    
  }
}
function validateEmail(){
  var reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if(reg.test(email.value)){
    setSuccessFor(email)
      return true;
  }
  else{
    setErrorFor(email,'Please enter valid email.');
  return false;
  }
  
}
function validatePass(){
  var reg1 =/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8,20}$/;
  if(reg1.test(myInput.value)){
    setSuccessFor(myInput)
      return true;
  }
  else{
    setErrorFor(myInput,'Password is invalid');
  return false;
  }
  
}
function confirmPass(){
  if(password2.value.trim()==""){
    setErrorFor(password2,'Please confirm'); 
    return false;
   
  }else if(myInput.value!== password2.value)
  {
    setErrorFor(password2,"Passwords doesn't match ");
    return false;
   
  }else{
    setSuccessFor(password2);
    return true;
  }  
}



function setErrorFor(input,message){
  const formGroup=input.parentElement;
  const small=formGroup.querySelector('small');
  small.innerText=message;
  formGroup.className='form-group error';
}
function setSuccessFor(input){
  const formGroup=input.parentElement;
  formGroup.className='form-group success';
}

// submit.onsubmit = function() {
//   return match(username.value,phone.value,email.value,myInput.value,password2.value,userValidate,phoneValidate,validateEmail,validatePass,confirmPass);
  
// }
*/
/*
email = document.getElementById('email');
password1= document.getElementById('password1');
password2= document.getElementById('password2');
error = document.getElementById('error');
error1 = document.getElementById('error1');
error2 = document.getElementById('error2');
error3 = document.getElementById('error3');

var re = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
var reg1 =/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8,20}$/;
function userValidate(){
  if(fname.value.trim()==""){
    error.innerHTML="Error:please fillout this field";
    fname.style.border="2px solid red";
    error.style.visibility="visible"
  fname.focus()
    return false;
} else{
error.innerHTML="";
fname.style.border="2px solid green";
return true;
}
}
function checkemail(){
     if(email.value.trim()==""){
        error1.innerHTML="Error:please fillout this field";
        email.style.border="2px solid red";
        error1.style.visibility="visible"
        email.focus()
        return false;
    }
   else if(!re.test(email.value.trim())) {
        error1.innerHTML="Error: email is invalid";
        email.style.border="2px solid red";
        error1.style.visibility="visible"
        email.focus();
        return false;
      }
    
      else
      error1.innerHTML="";
      email.style.border="2px solid green";
      return true;
}
function checkpassword(){
  if(password1.value.trim()==""){
     error2.innerHTML="Error:please fillout this field";
     password1.style.border="2px solid red";
     error2.style.visibility="visible"
     password1.focus()
     return false;
 }
else if(!reg1.test(password.value.trim())) {
     error2.innerHTML="Error: Password is invalid";
     password1.style.border="2px solid red";
     error2.style.visibility="visible"
     password1.focus();
     return false;
   }
 
   else
   error2.innerHTML="";
   password1.style.border="2px solid green";
   return true;
}
function checkpassword2(){
  if(password2.value.trim()==""){
     error3.innerHTML="Error:please fillout this field";
     password2.style.border="2px solid red";
     error3.style.visibility="visible"
     password2.focus()
     return false;
 }
else if(!reg1.test(password2.value.trim())) {
     error3.innerHTML="Error: Password is invalid";
     password2.style.border="2px solid red";
     error3.style.visibility="visible"
     password2.focus();
     return false;
   }
   else if(password2.value!=password1.value){
    error3.innerHTML="Error: Password is invalid";
    password2.style.border="2px solid red";
    error3.style.visibility="visible"
    password2.focus();
    return false;
   }
 
   else
   error3.innerHTML="";
   password2.style.border="2px solid green";
   return true;
}*/