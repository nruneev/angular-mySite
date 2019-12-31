<?php
  $to = "nruneev@gmail.com";
  $subject = "tghyju";
  $message = '<p>Вы получили новое уведомление с вашего сайта</p>';
  $headers = "Content-type: text/html; charset=windows-1251 \r\n";
  $headers .= "From: От кого письмо <nruneev@mail.ru>\r\n";
  $headers .= "Reply-To: nruneev@mail.ru\r\n";
  mail($to, $subject, $message, $headers);
?>
