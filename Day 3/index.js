var name = "James";
var numberone = 1 ;
var verify = true;
var numbertwo = 2;

let student = {name:"Sarthak", Age:20}
 function displayobject(){
document.getElementById("displayobject").innerHTML = student.name + "" + student.Age;
 }
 document.getElementById("object").innerHTML = student.name + "" + student.Age;

function addition(){
    var sum = numberone + numbertwo
    var mul = numberone * numbertwo
    document.getElementById("newone").innerHTML = "Author"
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("mul").innerHTML = mul;

console.log(sum);
console.log(mul);

return sum;

}


function checkeven(){
    var picknum = document.getElementById("readme").value;
    console.log(picknum);
    if(picknum%2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}