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
 <script>
if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            alert("Zab, stop trying to steal our code."); //here you draw your own menu
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function() {
            alert("Zab, stop trying to steal our code.");
            window.event.returnValue = false;
        });
    }
</script>
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>ZabSucks : Login</title>
     <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">
     <link href="zabSucks.css" type="text/css" rel="stylesheet"/>
 </head>
 <body>
<script>
  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1374667435979752',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
</script>

 <div id="login">
     <img src="zabSucks.png">
     <form name="frmUser" method="post" action="">
         <input type="text" name="userName" placeholder="User Name" class="login-input"><br>
         <input type="password" name="password" placeholder="Password" class="login-input"><br>
         <button type="submit" name="submit"> Submit</button>
     </form>

     <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button>

<div id="status">
</div>
     <div class="message"><?php if($message!="") { echo $message; } ?></div>
     <div class="bioImg"><?php if($row["bio_url"] !="") { echo '<img src="'.$row["bio_url"].'">'; } ?>
 </div> 
</div>

 </body>
 </html>

