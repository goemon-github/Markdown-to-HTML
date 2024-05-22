<?php
require_once  'vendor/autoload.php';



if($_SERVER["REQUEST_METHOD"] == "POST"){
    $input = file_get_contents('php://input');

    $json_data = json_decode($input, true);


    $parsedown = new Parsedown();
    $parsedown->setSafeMode(True);
    $text = $parsedown->text($json_data['key']);
    header('Content-Type: text/html; charset=utf-8');

    echo $text;
}