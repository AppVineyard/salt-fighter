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
$userName = $_POST['userName'];
//$firstname = $_POST['firstname'];
//$lastname = $_POST['lastname'];
$password = $_POST['password'];

require 'dbconfig.php';

    $check = mysqli_query($conn,"select * from users where userName='$userName' and password='$password'");
    
    $check = mysqli_num_rows($check);
    
    if($check==1) {
        $_SESSION["loggedIn"] = true;
        $_SESSION["username"] = $userName;
        header('Location: matches/index.php'); //Redirects to the supplied url from the DB
    } else {
        header("Location: error.htm");
    }




//if (!mysql_query($query,$conn)){
//    die('Error: ' . mysql_error());
//}

//echo "<h2>Congratulation, you have been registered</h2>";
//echo  "<br>";
//echo  "redirecting...";
//
//header('Refresh: 3; URL=home.html');
 
mysql_close($conn);
?>
