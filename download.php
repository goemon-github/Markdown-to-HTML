<?php
require_once  'vendor/autoload.php';



if($_SERVER["REQUEST_METHOD"] == "POST"){
    //$input = file_get_contents('php://input');
    $input = $_POST['htmlContent'];
    $filename = 'output.html';



    header('Content-Type: text/html; charset=utf-8');
    header('Content-Disposition: attachment; filename="'. $filename .'" ' );

    echo $input;
    exit;
}