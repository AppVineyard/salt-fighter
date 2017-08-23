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

    

    // Send variables for the MySQL database class.
    
    $query = "SELECT * FROM `scoresEA` ORDER by `score` DESC LIMIT 5";
    $result = mysqli_query($conn,$query) or die('Query failed: ' . mysqli_error());
    
    $num_results = mysqli_num_rows($result);
    
    for($i = 0; $i < $num_results; $i++)
    {
        $row = mysqli_fetch_array($result);
        echo $i = $i+1 . ". " . $row['name'] . "\t" . $row['score'] . "\n";
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
