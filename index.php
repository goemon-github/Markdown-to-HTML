<?php
require_once  'vendor/autoload.php';


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="public/css/style.css" >
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/loader.min.js"></script>
    <title>Markdown To HTML</title>
</head>
<body>


    <h1 class="title">Markdown To HTML</h1>
    <div class='btn-container'>
        <button id="actionBtn" data-action='preview' class='btn'>preview</button>
        <button id="actionBtn" data-action='html'  class='btn'>HTML</button>
        <button id="actionBtn" data-action='download' class='btn'>download</button>
    </div>

    <div class="display__container">
        <div id="editor-container" class="editor__box"></div>
        <div id="preview-container" class="editor__box preview-area"></div>
    </div>
    
    <script  src="public/js/script.js"></script>
</body>
</html>
