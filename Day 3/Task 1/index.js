function check(){
    var picknum = document.getElementById("readme").value;
    let temp = 0;
    console.log(picknum);
    
    if(picknum ==1 ){
        console.log("1 is neither prime nor composite");
    }
    else if(picknum>1){
        for(let i=2; i<= picknum/2 ; i++){
            if(picknum % i == 0){
                temp = temp + 1;
            }
        }
        if(temp==0){
            console.log("Prime");
        }else{
            console.log("Not prime");
        }
    }
}