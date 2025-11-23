<?php require_once('../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;

if ($_POST) {
    $mailer = new PHPMailer();
    $dotenv = Dotenv\Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
    $dotenv->load();
    $response = 'ok';

    try {
        $mailer->isSMTP();
        $mailer->CharSet = 'UTF-8';
        $mailer->SMTPAuth = true;
        // Настройки почты
        $mailer->Host = $_ENV['MAIL_HOST']; // Почтовый серсвис через который будет осуществляться отправка
        $mailer->Username = $_ENV['MAIL_USER']; // Логин от аккаунта через который будет происходить отправка почты
        $mailer->Password = $_ENV['MAIL_PASS'];// Пароль от аккаунта через который будет происходить отправка почты
        $mailer->SMTPSecure = 'ssl';
        $mailer->Port = 465;
        $mailer->setFrom($_ENV['MAIL_USER'], 'Psychologist');
        $mailer->addAddress($_ENV['MAIL_USER']); // Получатель письма
        $mailer->isHTML(true);
        $mailer->Subject = 'Новая заявка!';
        $mailer->Body = "<b>Имя:</b> {$_POST['name']} <br>
                <b>Тел:</b> {$_POST['phone']}<br>
                <b>E-mail:</b> {$_POST['email']}
                <b>Сообщение:</b> {$_POST['message']}";

        if ($mailer->send()) {
            $mailer->clearAllRecipients();
            $mailer->addAddress($_POST['email']);
            $mailer->Subject = 'Ваша заявка принята!';
            $mailer->Body = 'Ваша заявка на консультацию психолога принята. В ближайшее время с я свяжусь с Вами';
            $mailer->send();
        } else {
            $response = 'Mail setting error';
        }

    } catch (Exception $e) {
        $responce = "Error: {$mailer->ErrorInfo}";
    }

    echo json_encode($response);
}
