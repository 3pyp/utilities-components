<?php
    if(count($_POST) > 0) {
        $email = $_POST["email"];
        $message = $_POST["message"];
        $header = "Content-Type: text/html\r\nReply-to: $email\r\nFrom: $email <$email>";

        $body = 
        @"Email sent from ".$_SERVER['REMOTE_ADDR']." at".date("d/m/y H:i", time())."<br/>
        <hr/>
        $message
        <hr/>
        End Email";

        if(mail("cristiandisenadorvisual@gmail.com", "Un usuario ha enviado un email", $body, $header)){
            die("true");
        }
        else {
            die("Hubo un error enviando el mensaje")
        }
    }

?>