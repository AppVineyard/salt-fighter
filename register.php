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
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$password = $_POST['password'];

$_SESSION["loggedIn"] = true;
$_SESSION["username"] = $userName;


    require 'dbconfig.php';


$check = mysqli_query($conn,"select * from users where userName='$userName'");

$check = mysqli_num_rows($check);

if (empty($check)) { // if new user . Insert a new record

   $query = "INSERT INTO users (userName,firstname,lastname,password,player_id) VALUES ('$userName','$firstname','$lastname','$password',UUID())";
   mysqli_query($conn,$query);

} else {   // If Returned user . update the user record	

   $query = "UPDATE users SET firstname= '$firstname', lastname = '$lastname', password = '$password' where userName='$userName'";
   mysqli_query($conn,$query);
    
}



//if (!mysql_query($query,$conn)){
//    die('Error: ' . mysql_error());
//}

echo "<h2>Congratulation, you have been registered</h2>";
echo  "<br>";
echo  "redirecting...";

header('Refresh: 3; URL=register_match.php');
 
mysql_close($conn);
?>
