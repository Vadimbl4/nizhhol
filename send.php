<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];
//$file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заявка с сайта";
$body = "
<h2>Новая заявка с сайта nizhhol.ru</h2>
<b>Имя:</b> $name<br>
<b>Номер телефона:</b> $phone<br><br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'no-reply'; // Логин на почте
    $mail->Password   = '
    Whvv9j2BgyCLbjUCGrcX'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 993;
    $mail->setFrom('no-reply@nizhhol.ru', 'Сайт'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('info@nizhhol.ru');  
    $mail->addAddress('vadimryabev@yandex.ru'); // Ещё один, если нужен

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);