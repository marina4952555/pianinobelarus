<!DOCTYPE html>
<html lang="ru">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="utf-8">
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['phone']) and !isset($_POST['phone'])){
 ?> <form action="forma.php" method="post">
<input type="text" name="phone" placeholder="Укажите tel" required>
<input type="submit" value="Отправить">
</form> <?php
} else {
 //показываем форму
 $recepient = "frontend@dominantamusic.ru";
 $siteName = "Pianino Belarus";
 $phone = trim($_POST["phone"]);
 $today = getdate(); //получение даты
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
}
?>
		<script src="script/jquery.min.js" type="text/javascript"></script>
		<script src="script/jquery.maskedinput.min.js" type="text/javascript"></script>
</body>
</html>