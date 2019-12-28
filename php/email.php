<?php
  if($_POST['to'] && $_POST['subject'] && $_POST['type'] && $_POST['text'] && $_POST['name']) {
    $to = "<".$_POST['to'].">";

    $subject = $_POST['subject'];

    if ($_POST['type'] == "feedback") {
      $message = '<p>
                       Спасибо, что оставили отзыв на сайте
                       <a href="http://rigeqy.fastfile.ru" type="_blank">"Front-end developer Nikita Runeev</a>
                  </p>
                  </br>
                  <p>Мы опубликуем ваш отзыв сразу, как только он пройдет модерацию. Обычно это занимает 1-2 дня.</p>
                  </br>
                  <p>Спасибо за Ваше терпение!</p>
                  </br>';
      $file = 'feedback.txt';
      $current = file_get_contents($file);
      $current .= "Name: ".$_POST['name'].' Text: '.$_POST['text'].' Email: '.$_POST['to']."\n";
      file_put_contents($file, $current);
    } else {
      $message = '<p>
                       Спасибо, что оставили сообщение на сайте
                       <a href="http://rigeqy.fastfile.ru" type="_blank">"Front-end developer Nikita Runeev</a>
                  </p>
                  </br>
                  <p>Мы Вам ответим, в течении 2 дней.</p>
                  </br>
                  <p>Спасибо за Ваше терпение!</p>
                  </br>';
      $file = 'message.txt';
      $current = file_get_contents($file);
      $current .= "Name: ".$_POST['name'].' Text: '.$_POST['text'].' Email: '.$_POST['to']."\n";
      file_put_contents($file, $current);
    }

    $headers = "Content-type: text/html; charset=windows-1251 \r\n";
    $headers .= "From: От кого письмо <nruneev@mail.ru>\r\n";
    $headers .= "Reply-To: nruneev@mail.ru\r\n";

    mail($to, $subject, $message, $headers);
  } else {
    $file = 'feedback.txt';
    $current = file_get_contents($file);
    $current .= "Name: ".$_POST['name'].' Text: '.$_POST['text']."\n";
    file_put_contents($file, $current);
  }
  $to = "<nruneev@mail.ru>";
  $subject = $_POST['subject'];
  $message = '<p>Вы получили новое уведомление с вашего сайта</p>';
  $headers = "Content-type: text/html; charset=windows-1251 \r\n";
  $headers .= "From: От кого письмо <nruneev@mail.ru>\r\n";
  $headers .= "Reply-To: nruneev@mail.ru\r\n";
  mail($to, $subject, $message, $headers);
?>
