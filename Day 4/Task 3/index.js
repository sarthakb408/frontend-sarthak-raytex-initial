function FillAddressInput()
    {
       
       let pAddressLine1 = document.getElementById("pAddressLine1").value;
       let pAddressLine2 = document.getElementById("pAddressLine2").value;
       let pLandmark = document.getElementById("pLandmark").value;
       let pZipcode = document.getElementById("pZipcode").value;
       let pCity = document.getElementById("pCity").value;
       let pState = document.getElementById("pState").value;
       let pCountry = document.getElementById("pCountry").value;
       let curAddressLine1 = document.getElementById("curAddressLine1").value;
       let curAddressLine2 = document.getElementById("curAddressLine2").value;
       let curLandmark = document.getElementById("curLandmark").value;
       let curZipcode = document.getElementById("curZipcode").value;
       let curCity = document.getElementById("curCity").value;
       let curState = document.getElementById("curState").value;
       let curCountry = document.getElementById("curCountry").value;

       let checkBox= document.getElementById('checkBox').checked;
        if (checkBox == true)
        {
        
       document.getElementById("curAddressLine1").value = pAddressLine1;
       document.getElementById("curAddressLine2").value = pAddressLine2;
       document.getElementById("curLandmark").value = pLandmark;
       document.getElementById("curZipcode").value = pZipcode;
       document.getElementById("curCity").value = pCity;
       document.getElementById("curState").value = pState;
       document.getElementById("curCountry").value = pCountry;
       }
    }
       
       function gsubmit(){
    
   
    document.getElementById("accordian-id").innerHTML = pAddressLine1 + pAddressLine2 + pLandmark + pZipcode + pCity + pState + pCountry;
}