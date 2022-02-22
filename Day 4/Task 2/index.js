let fname = document.getElementById("validationServer01").value;
let lname = document.getElementById("validationServer02").value;
let uname = document.getElementById("validationServerUsername").value;
let contactnum = document.getElementById("validationServer05").value;
let emailid = document.getElementById("exampleInputEmail1").value;
let password = document.getElementById("exampleInputPassword1").value;
let cbox = document.getElementById("invalidCheck3").value;

if(uname.length>=5 && uname.length<=15){
    document.getElementById("validationServerUsername").className = "form-control is-valid";
}

function ValidateEmail() 
{
    let mail = document.getElementById("exampleInputEmail1").value;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    document.getElementById("exampleInputEmail1").className = "form-control is-valid";
  }
    else{
        document.getElementById("exampleInputEmail1").className = "form-control is-valid";
    }
    
}

function validatefname(){  
     
      
    if (fname==null || fname==""){  
        document.getElementById("validationServer01").className = "form-control is-notvalid";  
      
}else {

document.getElementById("validationServer01").className = "form-control is-valid";
}
      }  
    
      function validatelname(){  
     
      
        if (lname==null || lname==""){  
            document.getElementById("validationServer02").className = "form-control is-notvalid";  
          
    }else {
    
    document.getElementById("validationServer02").className = "form-control is-valid";
    }
          }  

          function validateuname(){
              var unameregex = /^[A-Za-z][A-Za-z0-9_]{5,15}$/;
              if(unameregex.test(uname)){
                document.getElementById("validationServerUsername").className = "form-control is-valid";
              }else{
                document.getElementById("validationServerUsername").className = "form-control is-notvalid";
              }
          }

          function phonenumber()
{
  var phoneno = /^\d{10}$/;
  if((contactnum.match(phoneno))){
            document.getElementById("validationServer05").className = "form-control is-valid";
        }
      else
        {
            document.getElementById("validationServer05").className = "form-control is-notvalid";
        }
}

function CheckPassword() 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(password.match(passw)) 
{ 
    document.getElementById("exampleInputPassword1").className = "form-control is-valid";
}
else
{ 
    document.getElementById("exampleInputPassword1").className = "form-control is-notvalid";
}
}

function gsubmit(){
    let fname = document.getElementById("validationServer01").value;
let lname = document.getElementById("validationServer02").value;
let uname = document.getElementById("validationServerUsername").value;
let contactnum = document.getElementById("validationServer05").value;
let emailid = document.getElementById("exampleInputEmail1").value;
let password = document.getElementById("exampleInputPassword1").value;
let cbox = document.getElementById("invalidCheck3").value;

    document.getElementById("accordian-id").innerHTML = fname + lname + uname + contactnum + emailid + password;
}