fetch("https://jsonplaceholder.typicode.com/users").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);

                if(data.lenght > 0){
                    var temp = "";

                    data.forEach((u) => {

                        temp +="<tr>";
                        temp += "<td>" + u.id + "</td>";
                        temp += "<td>" + u.name + "</td>";
                        temp += "<td>" + u.username + "</td>";
                        temp += "<td>" + u.email + "</td>";
                        temp += "<td>" + u.street + "</td>";
                        temp += "<td>" + u.suite + "</td>";
                        temp += "<td>" + u.city + "</td>";
                        temp += "<td>" + u.zipcode + "</td>";
                        temp += "<td>" + u.phone + "</td>";
                        temp += "<td>" + u.website + "</td>";
                        temp += "<td>" + u.catchPhrase + "</td>";
                        temp += "<td>" + u.bs + "</td></tr>";
                        

                        
                    })

                    document.getElementById("tdata").innerHTML = temp;
                }
            }
        )
    }
)