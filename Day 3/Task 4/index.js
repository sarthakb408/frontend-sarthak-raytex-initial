username1 = "sarthak";
password1 = "sarthak@1234"

function login(){
document.getElementById("username").value;
document.getElementById("password").value;
if(username == username1 && password == password1){
    document.getElementById("display").innerHTML = "Log In Successful!";
}else{
    document.getElementById("display").innerHTML = "Please Enter Correct Username and Password";

}
}