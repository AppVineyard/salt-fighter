<?php

require_once __DIR__ . '/src/Facebook/autoload.php';


$appID      = "1374667435979752";        // APP ID
$appSecret  = "5cff19ea5fdfe543d8170bc8cc7a7134";    // APP SECRET
$my_url     = "http://www.zabsucks.club/";    // APP DOMAIN --> It has to be match with app domain on your facebook app
 

 $fb = new Facebook\Facebook([
  'app_id' => $appID,
  'app_secret' => $appSecret,
  'default_graph_version' => 'v2.4', // API GRAPH VERSION
  ]);


?>
