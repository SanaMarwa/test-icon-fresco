<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
error_reporting(E_ALL);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';

require './PHPMailer/src/SMTP.php';
require './config.php';


if (isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['phoneNo'])) {


    $fullName = htmlspecialchars(trim($_POST['fullName']), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phoneNo = htmlspecialchars(trim($_POST['phoneNo']), ENT_QUOTES, 'UTF-8');
    $location = isset($_POST['location']) ? htmlspecialchars(trim($_POST['location']), ENT_QUOTES, 'UTF-8') : null;

    // Check if message field is required (based on form type)
    $formType = isset($_POST['formType']) ? htmlspecialchars(trim($_POST['formType']), ENT_QUOTES, 'UTF-8') : null;
    $MessagenotRequired = ($formType === 'contact-form'); // Adjust based on which form requires message

    // Extract message only if provided and required
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8') : '';
    if (!$MessagenotRequired && empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Message is required for this form.']);
        exit;
    }

    // Profession checkboxes validation
    $professions = isset($_POST['profession']) ? $_POST['profession'] : [];
    $professionList = !empty($professions) ? implode(', ', $professions) : 'None';
    if ($formType === 'contact-form' && empty($professions)) {
        echo json_encode(['status' => 'error', 'message' => 'Please select at least one profession.']);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email format.']);
        exit;
    }

    // Validate phone number format
    if (!preg_match('/^[0-9]{10}$/', $phoneNo)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid phone number format.']);
        exit;
    }

    // Your PHPMailer code here
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);



    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output

        $mail->isSMTP();                                            //Send using SMTP
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication

        $mail->Host = SMTP_HOST;                     //Set the SMTP server to send through

        $mail->Username = SMTP_USERNAME;
        $mail->Password = SMTP_PASSWORD;

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom(SMTP_FROM, $fullName);
        $mail->addAddress(SMTP_TO, SMTP_COMPANY_NAME);     //Add a recipient
        // $mail->addAddress('ellen@example.com');               //Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'You got a new enquiry!';
        $mailBody = '<h2> Enquiry From Website</h2>
        <p><b>Form Type:</b> ' . $formType . '</p>
        <p><b>Full Name:</b> ' . $fullName . '</p>
        <p><b>Email:</b> ' . $email . '</p>
        <p><b>Phone Number:</b> ' . $phoneNo . '</p>';

        // Include location if it's provided
        if ($location) {
            $mailBody .= '<p><b>Location:</b> ' . $location . '</p>';
        }

        if (isset($_POST['profession']) && is_array($_POST['profession']) && count($_POST['profession']) > 0) {
            $professions = implode(', ', $_POST['profession']);
            $mailBody .= '<p><b>Profession:</b> ' . $professions . '</p>';
        }

        if (!empty($message)) {
            $mailBody .= '<p><b>Message:</b> ' . $message . '</p>';
        }

        $mail->Body = $mailBody;

        if ($mail->send()) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
        }

    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

    }
} else {

    echo json_encode(['status' => 'error', 'message' => 'Invalid form submission.']);
    exit;
}
