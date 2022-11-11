function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}

const firebaseConfig = {
    apiKey: "AIzaSyDF-5hAA4Q8h34Si0fNmzTbOADzj_0KMYg",
    authDomain: "daxoppgave-a104d.firebaseapp.com",
    projectId: "daxoppgave-a104d",
    storageBucket: "daxoppgave-a104d.appspot.com",
    messagingSenderId: "1032597739602",
    appId: "1:1032597739602:web:5663d2cb32f5dcb340678b",
    measurementId: "G-DTF0XLM0MF"
  };
  
}