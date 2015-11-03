<?php
//application/msword ,application/pdf
//include 'contact.html';
if (isset($_REQUEST['email']))
{
	$name = $_POST["name"];
	//$lname = $_POST["lname"];
	$email = $_POST["email"];
	$mob = $_POST["phone"];
	//$qual = $_POST["qua"];
	//$attachment = $_FILES["attachment"];
	$comment = $_POST["comments"];
	/*$fileLocation = "C:/xampp/htdocs/Tel-India/files/" . $_FILES["attachment"]["name"];
	$subject = $fname." ".$lname." Resume";

	///////////file attachment
	  if (file_exists("C:/xampp/htdocs/Tel-India/files/" . $_FILES["attachment"]["name"]))
      {
      echo $_FILES["attachment"]["name"] . " already exists. ";
      }
	  else
      {
      move_uploaded_file($_FILES["attachment"]["tmp_name"],
      "C:/xampp/htdocs/Tel-India/files/" . $_FILES["attachment"]["name"]);
	  echo $_FILES["attachment"]["type"];
      }
	
	/////////////////////////////////////*/
	
	$MessageMail="Name : " .$name;
      $MessageMail.="<br/>Email Id : " .$email;
      $MessageMail.="<br/>Contact No: ".$mob;
	  //$MessageMail.="<br/>Qualification: ".$qual;
      $MessageMail.="<br/>Messsage: ".$comment;
      $MessageMail.="<br/>";
	  
	  	require_once('phpmailer/PHPMailerAutoload.php');
	
    $mail = new PHPMailer();
    $mail->SMTPDebug = 1;
    $mail->From = "visitor@telindia";
    $mail->FromName = "Visitor";
    $mail->AddAddress("sameershivajimaratha@gmail.com");    
    $mail->WordWrap = 50;   
    $mail->IsHTML(true);
    
    $mail->Subject = "New Student";
    //$body = $message;
    $mail->Body = $MessageMail;
    if (!$mail->Send()) {
	return false;
    }
    else{
      return true;
    }
}
else
		{
			
			echo "<script type='text/javascript'>alert('Mail not Sent, Please try again later.');</script>"; 

		}

?>

