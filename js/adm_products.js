$(document).ready(function () {

    $("#adm_register").click(function getInfo() {

        var name = $('#prod_name').val();
        var departament = $('#prod_departament').val();
        var brand = $('#prod_brand').val();
        var swq = $('#prod_size').val();
        var unit = $('#prod_unit').val();
        var price = $('#prod_price').val();
        var description = $('#prod_description').val();

        if (name != "" && departament != "" &&
            brand != "" && swq != "" &&
            unit != "" && price != "" &&
            description != "") {

            console.log("name = " + name);
            console.log("departament = " + departament);
            console.log("brand = " + brand);
            console.log("swq = " + swq);
            console.log("unit = " + unit);
            console.log("price = " + price);
            console.log("description = " + description);

            alert("Registration successfull!\n\n" +
                "Product Name: " + name + "\n" +
                "Departament: " + departament + "\n" +
                "Brand: " + brand + "\n" +
                "Quantity: " + swq + "\n" +
                "Unit: " + unit + "\n" +
                "Price: " + price + "\n" +
                "Description: " + description + "\n");
            
        } else alert("Fill all fields!!");
    });
});
