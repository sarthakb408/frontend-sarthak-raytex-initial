fetch("https://jsonplaceholder.typicode.com/users").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);

                if(data.lenght > 0){
                    let temp = "";

                    data.forEach((user) => {

                        temp +="<tr>";
                        temp += "<td>" + user.id + "</td>";
                        temp += "<td>" + user.name + "</td>";
                        temp += "<td>" + user.username + "</td>";
                        temp += "<td>" + user.email + "</td>";
                        temp += "<td>" + user.street + "</td>";
                        temp += "<td>" + user.suite + "</td>";
                        temp += "<td>" + user.city + "</td>";
                        temp += "<td>" + user.zipcode + "</td>";
                        temp += "<td>" + user.phone + "</td>";
                        temp += "<td>" + user.website + "</td>";
                        temp += "<td>" + user.catchPhrase + "</td>";
                        temp += "<td>" + user.bs + "</td></tr>";
                        

                        
                    })

                    document.getElementById("tdata").innerHTML = temp;
                }
            }
        )
    }
)