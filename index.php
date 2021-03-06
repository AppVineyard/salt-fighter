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
    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,600" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="index.css"/>
</head>
<body>
<div id="shade">
    <div class="row">
        <h2 id="topBanner">Login</h2>
        <div id="login">
            <div class="formHolder">
                <form name="frmUser" method="post" action="login.php">
                    <input type="text" name="userName" placeholder="User Name" class="login-input"><br>
                    <input type="password" name="password" placeholder="Password" class="login-input"><br>
                    <button type="submit" name="submit" value=""> Submit</button>
                </form>
            </div>
            <p>Not a member?</p>
            <a id="registerBtn" class="formChanger">Register</a>
        </div>

        <div id="register">
            <div class="formHolder">
                <form name="regUser" method="post" action="register.php">
                    <input type="text" required="required" name="firstname" placeholder="First Name"
                           class="register-input"><br>
                    <input type="text" required="required" name="lastname" placeholder="Last Name"
                           class="register-input"><br>
                    <input type="text" required="required" name="userName" placeholder="User Name"
                           class="register-input"><br>
                    <input type="password" required="required" required title="Please fill out all fields"
                           name="password"
                           placeholder="Password" class="register-input"><br>
                    <button type="submit" name="submit" value=""> Submit</button>
                </form>
            </div>
            <p>Already a member?</p>
            <a id="loginBtn" class="formChanger">Login</a>
        </div>

        <span id="whatIs">What's Salt Fighter?</span>
    </div>

    <div id="modalBg">
        <div id="modalWindow">

        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>
    var loginBtn = document.getElementById('loginBtn');
    var regBtn = document.getElementById('registerBtn');
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var topB = document.getElementById('topBanner');
    var whatIs = document.getElementById('whatIs');

    regBtn.addEventListener('click', function () {
        login.style.display = 'none';
        register.style.display = 'block';
        topB.innerHTML = 'Register';
    });
    loginBtn.addEventListener('click', function () {
        register.style.display = 'none';
        login.style.display = 'block';
        topB.innerHTML = 'Login';
    });
    whatIs.addEventListener('click', function(){handleModal(true);});
    $('#modalBg').click(function(){handleModal(false);});

    function handleModal(open){
        if(open){
            $('#modalBg, #modalWindow').css('display', 'block');
        }else {
            $('#modalBg, #modalWindow').css('display', 'none');
        }
    }
</script>

<script type="text/javascript">
    if (window.addEventListener) {
        var state = 0, konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        window.addEventListener("keydown", function (e) {
            if (e.keyCode == konami[state]) state++;
            else state = 0;
            if (state == 10)
                window.location = "https://salt-fighter.herokuapp.com/SaltyFighter/index.html";  //you can write your own code here
        }, true);
    }
</script>
</body>
</html>



