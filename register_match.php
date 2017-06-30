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
      echo "<option value="" selected disabled>Winner</option>";
    $rows = array();
    while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
        $rows[] = $row;
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?>
<br>
<?php echo "<select name='loss' required>";
    echo "<option value="" selected disabled>Loser</option>";
    foreach ($rows as $row) {
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?><br>
<?php echo "<select name='p1_id' required>";
    echo "<option value="" selected disabled>Player 1</option>";
    foreach ($rows as $row) {
        echo "<option value='" . $row['player_id'] . "' label='" . $row['userName']. "'>" . $row['userName'] . "</option>";
    }
    echo "</select>";?><br>
<?php echo "<select name='p2_id' required>";
    echo "<option value="" selected disabled>Player 2</option>";
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

        <p>fixie brooklyn. Bushwick cray migas fanny pack pok pok. Church-key brooklyn pabst, chambray cloud bread
            aesthetic green juice air plant hashtag cornhole try-hard activated charcoal. 90's bitters pinterest etsy,
            hell of succulents
            <br>Thundercats williamsburg DIY, polaroid ugh XOXO try-hard chia kitsch hell of mustache. Cronut helvetica
            artisan whatever irony bespoke lyft narwhal humblebrag banjo actually. Tbh sriracha mixtape sartorial
            flexitarian tumblr ennui freegan cray +1 raclette air plant. 90's pok pok wayfarers cornhole.
            <br>
            <br>Tattooed shabby chic church-key, air plant mlkshk etsy brooklyn shaman direct trade glossier biodiesel.
            Messenger bag yuccie polaroid tumeric tofu letterpress aesthetic hoodie


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

