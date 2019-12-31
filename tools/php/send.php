<?php
  include('email.php');
  if($_GET['to'] && $_GET['mail_to'] && $_GET['subject'] && $_GET['message']) {
    smtpmail($_GET['to'], $_GET['mail_to'], $_GET['subject'], $_GET['message']);
    $file = 'feedback.txt';
    $current = file_get_contents($file);
    $current .= "Name: ".$_GET['to']." Email: ".$_GET['mail_to']." Feedback: ".$_GET['message']."\n";
    file_put_contents($file, $current);
  } else {
    echo "Error!";
  }
?>
