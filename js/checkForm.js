// JavaScript Document

$(function(){
		   
		
	
	$('#email').blur(function(){
		$("input.submit").disabled = true;
		var emailValue = $("#email").val();
		
		validate("contactForm", "email");
		
	});
});

		function validate(form_id,email) {
		   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		   var address = document.forms[form_id].elements[email].value;
		   if(reg.test(address) == false)
			{
			  alert('Invalid Email Address');
			  $("input.submit").attr('disabled', true);
			  return false;
		    }
			else
			{
				alert('valed email');
				$("input.submit").attr('disabled','enabled');
			}
		}