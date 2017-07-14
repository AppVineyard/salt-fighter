<?php

    require 'dbconfig.php';
    
    session_start();
    if($_SESSION["loggedIn"] != true) {
        echo("Access denied!");
        echo "<br>";
        echo  "redirecting to login page....";
        
        header('Refresh: 3; URL=index.php');
        exit();
    }

//    $message="";
//if(count($_POST)>0) {
//	$conn = mysqli_connect("us-cdbr-iron-east-03.cleardb.net","bee6bfe3a31317","789e80c3","heroku_2154a2bf255ffd7");
$result = mysqli_query($conn,"SELECT * FROM users");
$count  = mysqli_num_rows($result);
//$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    
    
//if($count==0) {
//		$message = "Invalid Username or Password!";
//	} else {
//		$message = 'Welcome '.$row["displayName"].', '.'You are successfully authenticated!'."</br>".$row["qotd"];
//	}
//}
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Salt-Fighter : Create Match</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,200" rel="stylesheet">
    <link href="index.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<div id="shade"><div id="sideBar"><h2 id="topBanner">Create Match</h2>


        <div id="match">
            <form name="regUser" method="post" action="create_match.php">
<?php echo "<select name='win' required>";
      echo "<option value='' selected disabled>Winner</option>";
    $rows = array();
    while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
        $rows[] = $row;
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?>
<br>
<?php echo "<select name='loss' required>";
    echo "<option value='' selected disabled>Loser</option>";
    foreach ($rows as $row) {
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?><br>
<?php echo "<select name='p1_id' required>";
    echo "<option value='' selected disabled>Player 1</option>";
    foreach ($rows as $row) {
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?><br>
<?php echo "<select name='p2_id' required>";
    echo "<option value='' selected disabled>Player 2</option>";
    foreach ($rows as $row) {
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?><br>
                <input type="text" required="required" name="p1_char" placeholder="Player 1 Character" class="register-input"><br>
                <input type="text" required="required" name="p2_char" placeholder="Player 2 Character" class="register-input"><br>
                <button type="submit" name="submit" value=""> Submit</button>
            </form>
        </div>
    </div><!--
    -->
    <div id="whatUp">
        <img class="zabSucksImg" src="images/zabSucks.png"/>

        <h2>Ledger Rules</h2>
        <p><br>1. "Ledger" Matches will only count in the "2 out of 3" match format.<br>2. Iniating a "ledger match" must be decided before match play and both players must agree on said terms.<br>3. Winner and Loser must give up the controller and cannot play consecutive matches if other ledger contestants are present.
        </p>
    </div>
</div>


<script>
    var loginBtn = document.getElementById('loginBtn');
    var regBtn = document.getElementById('registerBtn');
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var topB = document.getElementById('topBanner');

    regBtn.addEventListener('click', function () {
        login.style.display = 'none';
        register.style.display = 'block';
        topB.innerHTML = 'Create Match';

        console.log(topB);
    });
    loginBtn.addEventListener('click', function () {
        register.style.display = 'none';
        login.style.display = 'block';
        topB.innerHTML = 'Login';

    });


</script>
</body>
</html>

