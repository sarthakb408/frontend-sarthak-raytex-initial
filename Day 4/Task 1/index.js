

let fsubmit = document.getElementById("submit-btn").value;

function gsubmit(){
    let fname = document.getElementById("validationTooltip01").value;
    let lname = document.getElementById("validationTooltip02").value;
    let uname = document.getElementById("validationTooltipUsername").value;
    let city = document.getElementById("validationTooltip03").value;
    let state = document.getElementById("validationTooltip04").value;
    let zip = document.getElementById("validationTooltip05").value;

    document.getElementById("accordian-id").innerHTML = fname + lname + uname + city + state + zip;
}