<?php
//session_start();
//
//$fb_uid = $_SESSION['fb_id'] ;           
//$fb_firstname = $_SESSION['firstname'];
//$fb_lastname = $_SESSION['lastname'];
//$fb_gender = $_SESSION['gender'];
//$fb_email = $_SESSION['email'];
//
//$birthday = $_POST['birthday'];
//$address = $_POST['address'];
//$userName = $_POST['userName'];
//$firstname = $_POST['firstname'];
//$lastname = $_POST['lastname'];
//$password = $_POST['password'];

require 'dbconfig.php';

        
        // Strings must be escaped to prevent SQL injection attack.
        $name = mysqli_real_escape_string($conn,$_GET['name']);
        $score = mysqli_real_escape_string($conn,$_GET['score']);
		$firm = mysqli_real_escape_string($conn,$_GET['firm']);
        $hash = $_GET['hash'];
        
        $secretKey="salty"; # Change this value to match the value stored in the client javascript below
        
        $real_hash = md5($name . $firm . $score . $secretKey);
        if($real_hash == $hash) {

            $query = "insert into scoresEA values (NULL, '$name', '$firm', '$score');";
            $result = mysqli_query($conn,$query) or die('Query failed: ' . mysqli_error());
        }

    
    




//if (!mysql_query($query,$conn)){
//    die('Error: ' . mysql_error());
//}

//echo "<h2>Congratulation, you have been registered</h2>";
//echo  "<br>";
//echo  "redirecting...";
//
//header('Refresh: 3; URL=home.html');
 
//mysql_close($conn);
?>
