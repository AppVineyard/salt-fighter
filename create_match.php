<?php
session_start();
//
//$fb_uid = $_SESSION['fb_id'] ;           
//$fb_firstname = $_SESSION['firstname'];
//$fb_lastname = $_SESSION['lastname'];
//$fb_gender = $_SESSION['gender'];
//$fb_email = $_SESSION['email'];
//
//$birthday = $_POST['birthday'];
//$address = $_POST['address'];
//$match_date = $_POST['match_date'];
//$match_id = $_POST['match_id'];
$win = $_POST['win'];
$loss = $_POST['loss'];
$p1_id = $_POST['p1_id'];
$p2_id = $_POST['p2_id'];
$p1_char = $_POST['p1_char'];
$p2_char = $_POST['p2_char'];
    
    session_start();
    if($_SESSION["loggedIn"] != true) {
        echo("Access denied!");
        echo "<br>";
        echo  "redirecting to login page....";
        
        header('Refresh: 3; URL=index.php');
        exit();
    }

require 'dbconfig.php';



$query = "INSERT INTO match_stats (match_date,match_id,win,loss,p1_id,p2_id,p1_char,p2_char) VALUES (UNIX_TIMESTAMP(),UUID(),'$win','$loss','$p1_id','$p2_id','$p1_char','$p2_char')";
   mysqli_query($conn,$query);




//if (!mysql_query($query,$conn)){
//    die('Error: ' . mysql_error());
//}

echo "<h2>Match Created</h2>";
echo  "<br>";
echo  "redirecting...";

header('Refresh: 3; URL=register_match.php');
 
mysql_close($conn);
?>
