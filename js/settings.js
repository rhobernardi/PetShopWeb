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

    $("#settings_name").val(getCookie("username"));
    $("#settings_email").val(getCookie("email"));
    $("#settings_password").val(getCookie("password"));
    $("#settings_pet").val(getCookie("pet"));


    $("#settings_edit").click(function () {
        $(".info").prop('disabled', false);

    });

    $("#settings_save").click(function () {
        $(".info").prop('disabled', true);

        alert("new: " + $("#settings_name").val() + "\n" +
            "new: " + $("#settings_email").val() + "\n" +
            "new: " + $("#settings_password").val() + "\n" +
            "new: " + $("#settings_pet").val());
    });
});
