<?php
 $recepient = "";
 $siteName = "Pianino Belarus";
 $phone = trim($_POST["phone"]);
 $today = getdate();
 $month = $today ['month'];
 $mday = $today ['mday'];
 $year = $today ['year'];
 $hours = $today ['hours'];
 $minutes = $today ['minutes'];
 $date = "$month.$mday.$year \n$hours:$minutes (МСК)";
 $message = "Телефон: $phone \nЗаявка отправлена с сайта Pianino Belarus: $date";
 $pagetitle = "Заявка с сайта \"$siteName\"";
 
 if (mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n")){
 	echo "Сообщение успешно отправлено";
 } else {
 	echo "При отправке сообщения возникли ошибки";
 }
?>