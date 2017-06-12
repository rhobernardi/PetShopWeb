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

    $("#pet_name").val(getCookie("petname"));
    $("#pet_type").val(getCookie("pettype"));
    $("#pet_age").val(getCookie("petage"));
    $("#pet_size").val(getCookie("petsize"));
    $("#pet_gender").val(getCookie("petgender"));


    $("#pet_edit").click(function () {
        $(".info").prop('disabled', false);

    });

    $("#pet_save").click(function () {
        $(".info").prop('disabled', true);
        
        document.cookie = "petname=" + $("#pet_name").val();
        document.cookie = "pettype=" + $("#pet_type").val();
        document.cookie = "petage=" + $("#pet_age").val();
        document.cookie = "petsize=" + $("#pet_size").val();
        document.cookie = "petgender=" + $("#pet_gender").val();

        alert("Your Pet information has been changed!\n\n" +
            "Pet Name: " + $("#pet_name").val() + "\n" +
            "Pet Type: " + $("#pet_type").val() + "\n" +
            "Age: " + $("#pet_age").val() + "\n" +
            "Size: " + $("#pet_size").val() + "\n" +
            "Gender: " + $("#pet_gender").val() + "\n");
    });
});
