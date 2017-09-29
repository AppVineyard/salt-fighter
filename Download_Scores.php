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
    
   
    
    


$csv_filename = 'Scores'.'_'.date('Y-m-d').'.csv';
				
// create empty variable to be filled with export data
$csv_export = '';
// query to get data from database

$query = "SELECT * FROM `scoresEA` ORDER by `score` DESC";
$result = mysqli_query($conn,$query) or die('Query failed: ' . mysqli_error());
$field = mysqli_num_fields($result);
// create line with field names
for($i = 0; $i < $field; $i++) {
  $csv_export.= mysqli_fetch_assoc($result,$i).';';
}
// newline (seems to work both on Linux & Windows servers)
$csv_export.= '
';
// loop through database query and fill export variable
while($row = mysqli_fetch_array($result)) {
  // create line with field values
  for($i = 0; $i < $field; $i++) {
    $csv_export.= '"'.$row[mysqli_field_name($result,$i)].'";';
  }	
  $csv_export.= '
';	
}
// Export the data and prompt a csv file for download
header("Content-type: text/x-csv");
header("Content-Disposition: attachment; filename=".$csv_filename."");
echo($csv_export);




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
