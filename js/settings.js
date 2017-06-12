function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log(c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


$(document).ready(function () {

    $(".info").prop('disabled', true);

    $("#settings_firstname").val(getCookie("firstname"));
    $("#settings_lastname").val(getCookie("lastname"));
    $("#settings_email").val(getCookie("email"));
    $("#settings_password").val(getCookie("password"));


    $("#settings_edit").click(function () {
        $(".info").prop('disabled', false);

    });

    $("#settings_save").click(function () {
        $(".info").prop('disabled', true);
        
        document.cookie = "firstname=" + $("#settings_firstname").val();
        document.cookie = "lastname=" + $("#settings_lastname").val();
        document.cookie = "email=" + $("#settings_email").val();
        document.cookie = "password=" + $("#settings_password").val();

        alert("Your information has been changed!\n\n" +
            "Name: " + $("#settings_firstname").val() + " " + $("#settings_lastname").val() + "\n" +
            "Email: " + $("#settings_email").val() + "\n" +
            "Password: " + $("#settings_password").val() + "\n");
    });
});
