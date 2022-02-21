function fib(){
    let number= document.getElementById("readme").value;
    let a=0, b=1, c;

    for(let i=1; i<=number; i++){
        console.log(a);
        c=a+b;
        a=b;
        b=c;
    }
}