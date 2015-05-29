<?php

	$email      = $_POST["email"];
	$phone      = $_POST["phone"];
	$message    = "Originator's email : " . $email . "\r\n";
	$message   .= "Originator's phone : " . $phone . "\r\n\r\n";
	$message   .= $_POST["message"];
	$subject    = "Service email from www.cascaderisermanagement.com";
	$verSubject = "Communication recieved !";
	$to         = "E_tuchscherer@yahoo.com";
	$verMessage = "We have recieved your communication.  A customer service representitive will contact you shortly. \r\nWe appreciate your business ! \r\n\r\nSincerly,\r\n~The Cascade Riser Management team\r\n";
	$headers    = "From: no-reply@cascaderisermanagement.com\r\n";
	$headers   .= "Reply-To: " . $email . "\r\n";
	$verHeader  = "From: no-reply@cascaderisermanagement.com";
	
	if(isset($email) && strlen($email) != 0)
	{
		if(isset($phone) && strlen($phone) != 0)
		{
			if(isset($message) && strlen($message) != 0)
			{
				//send mail
				if(mail($to,$subject,$message,$headers))
				{
					#echo "Mail has been sent.";
				
					//send verification
					if(mail($email, $verSubject, $verMessage, $verHeader))
					{
						
						header("Location: ../thanks.html");
					}
					else
					{
						header("location: ../oops.html");
					}
				}
				else
				{
					die("An error occured, mail was not sent.");
				}
			}
			else
			{
				die("<h2>You tried to send a blank message</h2><br/><p>Please back up and try again</p>");
			}
		}
		else
		{
			die("<h2>Invalid phone number</h2><br /><p>Please back up and try again</p>");
		}
		
	}
	else
	{
		die("<h2>Invalid email address</h2><br /><p>Please back up and try again</p>");
	}

?>