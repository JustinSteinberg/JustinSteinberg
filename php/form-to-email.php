<?php

	if (!empty($_POST) && isset($_POST['submit'])) {

  		$name = $_POST['name'];
   		$email_from = $_POST['email'];
		$phone = $_POST['phone'];
   		$message = $_POST['message'];
    

    $email_from = filter_var($email_from, FILTER_SANITIZE_EMAIL);

   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email_from)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }

   if (empty($message)) {
       $errors[] = 'Message is empty';
   }

   if (empty($errors)) {
       $toEmail = 'justin@justinsteinberg.com';
       $emailSubject = 'New email from your contact form.';
       $headers = ['From' => $email_from, 'Reply-To' => $email_from, 'Content-type' => 'text/html; charset=utf-8'];
       $bodyParagraphs = ["Name: {$name}", "Email: {$email_from}", "Message:", $message];
       $body = join(PHP_EOL, $bodyParagraphs);

           if (mail($toEmail, $emailSubject, $body, $headers)) {
               header('location: thank_you.html');
           } else {
               $errorMessage = 'Oops, something went wrong. Please try again later';
           }

   } else {

       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   }

}

?>