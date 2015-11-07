
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contact form to email</title>
</head>

<body>

  <form method="post" action="">
        <label>Name:</label>
        <input name="sender">

        <label>Email address:</label>
        <input name="senderEmail">

        <label>Message:</label>
        <textarea rows="5" cols="20" name="message"></textarea>

        <input type="submit" name="submit">
    </form>

</body>

</html>


<?php

require_once("Mail.php");


if(isset($_POST['submit'])) {
  
$from = 'info@sameerthite.in';
$to = 'sameershivajimaratha@gmail.com';
$subject = 'Form to email message';
$body = $_POST["message"];

$headers = array(
    'From' => $from,
    'To' => $_POST["senderEmail"],
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'sameershivajimaratha@gmail.com',
        'password' => 'sameer4747' 
		));
    

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}
}

?>