<?php
$message="";
if(count($_POST)>0) {
	$conn = mysqli_connect("us-cdbr-iron-east-03.cleardb.net","bee6bfe3a31317","789e80c3","heroku_2154a2bf255ffd7");
	$result = mysqli_query($conn,"SELECT * FROM users WHERE userName='" . $_POST["userName"] . "' and password = '". $_POST["password"]."'");
	$count  = mysqli_num_rows($result);
	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
	if($count==0) {
		$message = "Invalid Username or Password!";
	} else {
		$message = 'Welcome '.$row["displayName"].', '.'You are successfully authenticated!'."</br>".$row["qotd"];
	}
}
?>
<html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <title>ZabSucks : Login</title>
     <link href="zabSucks.css" type="text/css" rel="stylesheet"/>
 </head>
 <body>


 <div id="login">
     <img src="zabSucks.png">
     <form name="frmUser" method="post" action="">
         <input type="text" name="userName" placeholder="User Name" class="login-input"><br>
         <input type="password" name="password" placeholder="Password" class="login-input"><br>
         <button type="submit" name="submit"> Submit</button>
     </form>

     <div class="message"><?php if($message!="") { echo $message; } ?></div>
     <div><<?php if($row["bio_url"] !="") { echo '<img src="'.$row["bio_url"].'">'; } ?>
 </div> 
</div>

 </body>
 </html>

