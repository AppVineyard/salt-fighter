<?php

    require 'dbconfig.php';
    
    
//    $message="";
//if(count($_POST)>0) {
//	$conn = mysqli_connect("us-cdbr-iron-east-03.cleardb.net","bee6bfe3a31317","789e80c3","heroku_2154a2bf255ffd7");
//	$result = mysqli_query($conn,"SELECT * FROM users WHERE userName='" . $_POST["userName"] . "' and password = '". $_POST["password"]."'");
//	$count  = mysqli_num_rows($result);
//	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
//	if($count==0) {
//		$message = "Invalid Username or Password!";
//	} else {
//		$message = 'Welcome '.$row["displayName"].', '.'You are successfully authenticated!'."</br>".$row["qotd"];
//	}
//}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Salt-Fighter</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,200" rel="stylesheet">
    <link href="index.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<div id="shade"><div id="sideBar"><h2 id="topBanner">Login</h2>

        <div id="login">
            <form name="frmUser" method="post" action="login.php">
                <input type="text" name="userName" placeholder="User Name" class="login-input"><br>
                <input type="password" name="password" placeholder="Password" class="login-input"><br>
                <button type="submit" name="submit" value=""> Submit</button>
            </form>
            <p>Not a member?</p>
            <a id="registerBtn">Register</a>
        </div>


        <div id="register">
            <form name="regUser" method="post" action="register.php">
                <input type="text" required="required" required title="Please fill out all fields" name="firstname" placeholder="First Name" class="register-input"><br>
                <input type="text" required="required" required title="Please fill out all fields"name="lastname" placeholder="Last Name" class="register-input"><br>
                <input type="text" required="required" required title="Please fill out all fields"name="userName" placeholder="User Name" class="register-input"><br>
                <input type="password" required="required" required title="Please fill out all fields"name="password" placeholder="Password" class="register-input"><br>
                <button type="submit" name="submit" value=""> Submit</button>
            </form>
            <p>Already a member?</p>
            <a id="loginBtn">Login</a>
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
        topB.innerHTML = 'Register';

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

