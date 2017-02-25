<?php
require_once "vendor/autoload.php";
require_once "vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php";

//собираем данные для отправки
$name		= $_POST['name'];
$email 		= $_POST['email'];
$message 		= $_POST['message'];
$dataBack 	= array();
$captcha 	= $_POST['g-recaptcha-response'];
$ip 		= $_SERVER['REMOTE_ADDR'];
$secret_key = '6LeKqhATAAAAANtethQ2tFl8_m-HR8C4F4Gnk5LM';


if (send_message_to_email(array('name' => $name, 'email' => $email,  'message' => $message )) ){
    $dataBack['status'] = 'OK';
    $dataBack['text'] = 'Ваше письмо успешно отправлено!';
} else {
    $dataBack['status'] = 'error';
    $dataBack['text'] = 'Что-то пошло не так, письмо не отправлено! Возможно проблемы с сервером.';
}


function send_message_to_email($dataMail)
{
    $mail = new PHPMailer;
    $mail->IsSMTP();
    $mail->SMTPAuth 	= true;
    $mail->SMTPSecure	= "tls";
    $mail->Host 		= "smtp.gmail.com";
    $mail->Port 		= 587;
    $mail->Username = "podarkip@gmail.com";
    $mail->Password = "123podarki";



    $mail->CharSet 		= 'UTF-8';
    $mail->From = 'podarkip@gmail.com';
    $mail->FromName = 'Записаться на тренировку';
    $mail->addCC('serger777@gmail.com');
    $mail->isHTML(true);

    $mail->Subject = "Письмо с сайта Записаться на тренировку";



    $mail->isHTML(false);

    // Устанавливаем текст сообщения
    $mail->msgHTML(" Телефон : ". $dataMail['email' ] .' '.  ' Имя:' . $dataMail['name'] .''.'Город:'.$dataMail['message']  );
    return $mail->send();
};







header("Content-Type: application/json");
echo json_encode($dataBack);
exit;
?>