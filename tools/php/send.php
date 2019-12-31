<?php
  if ($_GET['type'] == "feedback") {
    if ($_GET['mail_to']) {
      $file = 'feedback.txt';
      $current = file_get_contents($file);
      $current .= "Name: " . $_GET['to'] . " Email: " . $_GET['mail_to'] . " Feedback: " . $_GET['message'] . "\n";
      file_put_contents($file, $current);
    } else {
      $file = 'feedback.txt';
      $current = file_get_contents($file);
      $current .= "Name: " . $_GET['to'] . " Email: - Feedback: " . $_GET['message'] . "\n";
      file_put_contents($file, $current);
    }
  } else {
    $file = 'message.txt';
    $current = file_get_contents($file);
    $current .= "Name: " . $_GET['to'] . " Email: " . $_GET['mail_to'] . " Message: " . $_GET['message'] . "\n";
    file_put_contents($file, $current);
  }
?>
