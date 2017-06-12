$(document).ready(function () {

    $("#service_register").click(function getInfo() {

        var name = $('#service_name').val();
        var departament = $('#service_departament').val();
        var duration = $('#service_duration').val();
        var unit = $('#service_unit').val();
        var price = $('#service_price').val();
        var description = $('#service_description').val();

        if (name != "" && departament != "" &&
            duration != "" && unit != "" && 
            price != "" && description != "") {

            console.log("name = " + name);
            console.log("departament = " + departament);
            console.log("duration = " + duration);
            console.log("unit = " + unit);
            console.log("price = " + price);
            console.log("description = " + description);

            alert("Service registration successfull!\n\n" +
                "Service Name: " + name + "\n" +
                "Departament: " + departament + "\n" +
                "Duration: " + duration + "\n" +
                "Unit: " + unit + "\n" +
                "Price: " + price + "\n" +
                "Description: " + description + "\n");
            
        } else alert("Fill all fields!!");
    });
});
