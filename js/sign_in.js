$(document).ready(function () {

    var input_email;
    var input_pass;

    var i;
    var j;


    $("#Submit_Button").click(function () {
        $("#Sign_in_Form").submit(function submit() {

            input_email = $("#inputEmail").val();
            input_pass = $("#inputPassword").val();

            $.getJSON('js/server/register.json', function (data) {

                for (i in data) {
                    for (j in data[i]) {

                        if (input_email == data[i][j].email) {
                            if (input_pass == data[i][j].password) {

                                if (i == "users") {

                                    console.log("got an user");
                                    console.log("CLIENT-USER E PASS CORRETOS");

                                    document.cookie = "firstname=" + data[i][j].firstname;
                                    document.cookie = "lastname=" + data[i][j].lastname;
                                    document.cookie = "email=" + data[i][j].email;
                                    document.cookie = "password=" + data[i][j].password;
                                    document.cookie = "birth=" + data[i][j].birth;
                                    
                                    document.cookie = "petname=" + data[i][j].petname;
                                    document.cookie = "pettype=" + data[i][j].pettype;
                                    document.cookie = "petage=" + data[i][j].petage;
                                    document.cookie = "petsize=" + data[i][j].petsize;
                                    document.cookie = "petgender=" + data[i][j].petgender;

                                    window.location.href = "client_menu.html";
                                    console.log("client logged");
                                }

                                if (i == "admins") {

                                    console.log("got an adm");
                                    console.log("ADM-USER E PASS CORRETOS");
                                    
                                    document.cookie = "firstname=" + data[i][j].firstname;
                                    document.cookie = "lastname=" + data[i][j].lastname;
                                    document.cookie = "email=" + data[i][j].email;
                                    document.cookie = "password=" + data[i][j].password;
                                    document.cookie = "birth=" + data[i][j].birth;

                                    window.location.href = "adm_menu.html";
                                    console.log("adm logged");
                                }

                            } else {
                                $("#errorPass").addClass("has-error");
                                $('#Sign_in_Form').attr('action', '#');
                                $('#inputPassword').attr('placeholder', 'Wrong Password');
                                $('#inputPassword').val("");
                            }

                        } else {
                            $("#errorEmail").addClass("has-error");
                            $('#Sign_in_Form').attr('action', '#');
                            $('#inputEmail').attr('placeholder', 'Invalid Email');
                            $('#inputPassword').attr('placeholder', 'Password');
                            $('#inputEmail').val("");
                            $('#inputPassword').val("");
                        }
                    }
                }
            });
        });
    });
});
