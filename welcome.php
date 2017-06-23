<?php
    session_start();
    
    $fb_access_token = $_SESSION['facebook_access_token'];
    
    include 'fbconfig.php';
    
    try {
        // Returns a `Facebook\FacebookResponse` object
        // [PENTING NIH..!!] Kalo mau ngambil user information harus disetting di fields
        
        $response = $fb->get('/me?fields=id,name,first_name,last_name,email,gender', $fb_access_token);
        
    } catch(Facebook\Exceptions\FacebookResponseException $e) {
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
    } catch(Facebook\Exceptions\FacebookSDKException $e) {
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
    }
    
    // Get the response typed as a GraphUser
    $user = $response->getGraphUser();
    
    // get user info berdasarkan fields yang sudah disetting
    $fb_id = $user->getId();
    $fullname = $user->getName();
    $firstname = $user->getFirstName();
    $lastname = $user->getLastName();
    $email = $user->getEmail();
    $gender = $user->getGender();
    
    // SET SESSION
    $_SESSION['fb_id'] = $fb_id;
    $_SESSION['firstname'] = $firstname;
    $_SESSION['lastname'] =  $lastname;
    $_SESSION['gender'] = $gender;
    $_SESSION['email'] = $email;
    
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


 <div id="login">
     <img src="zabSucks.png">
     <form name="frmUser" method="post" action="register.php">
         <input type="text" name="userName" placeholder="First Name" class="login-input" value="<?php echo $firstname ?>"><br>
         <input type="text" class="login-input" value="<?php echo $lastname ?>" disabled>
         <input type="email" class="login-input" value="<?php echo $email ?>">
         <input type="text" class="login-input" name="birthday" value="" placeholder="DD/MM/YYYY">
         <button type="submit" name="submit" value ="Register"> Submit</button>
     </form>
:
</div>

 </body>
 </html>

