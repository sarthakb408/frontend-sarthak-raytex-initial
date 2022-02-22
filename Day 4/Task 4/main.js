function edittable(){
    let fname = document.getElementById("validationCustom01").value;
    let lname = document.getElementById("validationCustom02").value;
    let uname = document.getElementById("validationCustomUsername").value;
    let city = document.getElementById("validationCustom03").value;
    let state = document.getElementById("validationCustom04").value;
    let zip = document.getElementById("validationCustom05").value;

    
    let table = document.getElementById("tablebody");

    table.innerHTML = table.innerHTML + "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + uname +"</td><td>" + city + "</td><td>" + state + "</td><td>" + zip + "</td></tr>"
    
}