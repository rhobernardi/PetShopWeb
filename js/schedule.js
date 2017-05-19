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

        console.log("petname = " + petname);
        console.log("service = " + service);
        console.log("cardnumber = " + cardnumber);
        console.log("securitycode = " + securitycode);
        console.log("date = " + date);
        
        alert(
            "Schedule Successfull!\n\n" +
            petname + " have a " + service + " commitment on day " + date + "!"
        )
//    set
//    $('#txt_name').val(bla);
      });
});