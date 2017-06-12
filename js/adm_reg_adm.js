$(document).ready(function () {

    $("#adm_client_register").click(function getInfo() {

        var fname = $('#reg_client_firstname').val();
        var lname = $('#reg_client_lastname').val();
        var birth = $('#reg_client_birth').val();
        var email = $('#reg_client_email').val();
        var phone = $('#reg_client_phone').val();

        if (fname != "" && lname != "" &&
            birth != "" && email != "" &&
            phone != "") {

            if (phone.search("_") == -1) {
                console.log("fname = " + fname);
                console.log("lname = " + lname);
                console.log("birth = " + birth);
                console.log("email = " + email);
                console.log("phone = " + phone);

                alert("Registration successfull!\n\n" +
                    "First Name: " + fname + "\n" +
                    "Last Name: " + lname + "\n" +
                    "Birth: " + birth + "\n" +
                    "Email: " + email + "\n" +
                    "Phone: " + phone + "\n");

            } else alert("Invalid phone!!");
        } else alert("Fill all fields!!");
    });
});