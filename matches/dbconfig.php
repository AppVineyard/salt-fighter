<?php
    define('DB_SERVER', 'us-cdbr-iron-east-03.cleardb.net');       // DB server
    define('DB_USERNAME', 'bee6bfe3a31317');   // DB username
    define('DB_PASSWORD', '789e80c3');   // DB password
    define('DB_DATABASE', 'heroku_2154a2bf255ffd7');       // DB name

    $conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die( "Unable to connect");
    $database = mysqli_select_db($conn, DB_DATABASE) or die( "Unable to select database");
?>
