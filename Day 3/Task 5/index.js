function calculateage(){
    let dateofuser = document.getElementById("ubirthdate").value;
    let today = new Date();
    let birthdate = new Date(dateofuser);
    let age = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();
    if(month<0 || (month == 0 && today.getDate() < birthdate.getDate()))
    {
        age--;
    }
    console.log(age);
}