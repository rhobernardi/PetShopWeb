$(document).ready(function(){
    $(function () {
        $('#datepicker').datepicker();
    });
    
    $("#schedule").click(function getInfo(){
        
        var petname = $('#petname').val();
        var service = $('#service').val();
        var cardnumber = $('#cardnumber').val();
        var securitycode = $('#securitycode').val();
        var date = $('#datepicker').val();
        
        if( petname != "" && service != "" && 
           cardnumber != "" && securitycode != "" && 
           date != ""){
            
            cardnumber = cardnumber.replace(" ","");
            cardnumber = cardnumber.replace(" ","");
            cardnumber = cardnumber.replace(" ","");
            
            //transform "9999 9999 9999 9999" in "9999999999999999"
            
            if(cardnumber.search("_") == -1)
            {
                if(securitycode.search("_") == -1)
                {
                    console.log("petname = " + petname);
                    console.log("service = " + service);
                    console.log("cardnumber = " + cardnumber);
                    console.log("securitycode = " + securitycode);
                    console.log("date = " + date);

                    alert("Schedule Successfull!\n\n" +
                        petname + " have a " + service + " commitment on day " + date + "!");
                }
                else alert("Invalid security code!!");
            }
            else alert("Invalid card number!!");
        }
        else alert("Fill all fields!!");
      });
});