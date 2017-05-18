
$(document).ready(function(){
	var user = "usuario@email";
	var pass = "12345";
	var input_email;
	var input_pass;



	$( "#Submit_Button" ).click(function() {
		$( "#Sign_in_Form" ).submit(function(){

			input_email = $("#inputEmail").val();
			input_pass = $("#inputPassword").val();

			if(input_email != "" && input_pass != ""){

				if(input_email === user)
				{
					if(input_pass === pass)
					{
						console.log("USER E PASS CORRETOS");
						$('#Sign_in_Form').attr('action', 'client_menu.html');
					}
					else
					{
						$( "#errorPass" ).addClass( "has-error" );
						$('#Sign_in_Form').attr('action', '#');
						$('#inputPassword').attr('placeholder', 'Wrong Password');
						$('#inputPassword').val("");
					}
				}
				else
				{
					$( "#errorEmail" ).addClass( "has-error" );
					$('#Sign_in_Form').attr('action', '#');
					$('#inputEmail').attr('placeholder', 'Invalid Email');
					$('#inputPassword').attr('placeholder', 'Password');
					$('#inputEmail').val("");
					$('#inputPassword').val("");
				}
			}
	  });

	});
});




