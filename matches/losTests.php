<?php

require 'dbconfig.php';

session_start();
if ($_SESSION["loggedIn"] != true) {
    echo("Access denied!");
    echo "<br>";
    echo "redirecting to login page....";

    header('Refresh: 3; URL=index.php');
    exit();
}

//    $message="";
//if(count($_POST)>0) {
//	$conn = mysqli_connect("us-cdbr-iron-east-03.cleardb.net","bee6bfe3a31317","789e80c3","heroku_2154a2bf255ffd7");
$result = mysqli_query($conn, "SELECT * FROM users");
$count = mysqli_num_rows($result);
//$row = mysqli_fetch_array($result, MYSQLI_ASSOC);


//if($count==0) {
//		$message = "Invalid Username or Password!";
//	} else {
//		$message = 'Welcome '.$row["displayName"].', '.'You are successfully authenticated!'."</br>".$row["qotd"];
//	}
//}


//matches stuff

$post_at = "";
$post_at_to_date = "";

$queryCondition = "";
if (!empty($_POST["search"]["match_date"])) {
    $post_at = $_POST["search"]["match_date"];
    $post_at_time = $post_at . "00:00:00";
    $postUnix = strtotime($post_at_time);

    $post_at_todate = date('Y-m-d');
    if (!empty($_POST["search"]["post_at_to_date"])) {
        $post_at_to_date = $_POST["search"]["post_at_to_date"];
        $post_at_to_dateTime = $post_at_to_date . "23:59:59";
        $post_at_todate = strtotime($post_at_to_dateTime);
    }

    $queryCondition .= "WHERE match_date >= '$postUnix' AND match_date <= '$post_at_todate'";
}

$sql = "SELECT * FROM match_stats INNER JOIN users ON match_stats.win = users.player_id " . $queryCondition . " ORDER BY match_date desc";
$result = mysqli_query($conn, $sql);

?>
<!DOCTYPE html>
<html lang="en">
<title>Salt-Figher : Match History</title>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,600" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="matchesTest.css">

</head>
<body>
<div id="shade">
    <div id="sideBar">
        <h2 id="topBanner">Register Match</h2>

        <div id="match">
            <form name="regUser" method="post" action="create_match.php">
                <?php echo "<select name='win' required>";
                echo "<option value='' selected disabled>Winner</option>";
                $rows = array();
                while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                    $rows[] = $row;
                    echo "<option value='" . $row['player_id'] . "' label='" . $row['userName'] . "'>" . $row['userName'] . "</option>";
                }
                echo "</select>"; ?>
                <br>
                <?php echo "<select name='loss' required>";
                echo "<option value='' selected disabled>Loser</option>";
                foreach ($rows as $row) {
                    echo "<option value='" . $row['player_id'] . "' label='" . $row['userName'] . "'>" . $row['userName'] . "</option>";
                }
                echo "</select>"; ?><br>
                <?php echo "<select name='p1_id' required>";
                echo "<option value='' selected disabled>Player 1</option>";
                foreach ($rows as $row) {
                    echo "<option value='" . $row['player_id'] . "' label='" . $row['userName'] . "'>" . $row['userName'] . "</option>";
                }
                echo "</select>"; ?><br>
                <?php echo "<select name='p2_id' required>";
                echo "<option value='' selected disabled>Player 2</option>";
                foreach ($rows as $row) {
                    echo "<option value='" . $row['player_id'] . "' label='" . $row['userName'] . "'>" . $row['userName'] . "</option>";
                }
                echo "</select>"; ?><br>
                <input type="text" required="required" name="p1_char" placeholder="Player 1 Character"
                       class="register-input"><br>
                <input type="text" required="required" name="p2_char" placeholder="Player 2 Character"
                       class="register-input"><br>
                <button type="submit" name="submit" value=""> Submit</button>
            </form>
        </div>


        <h2>Ledger Rules</h2>
        <p><br>1. "Ledger" Matches will only count in the "2 out of 3" match format.<br>2. Iniating a "ledger match"
            must be decided before match play and both players must agree on said terms.<br>3. Winner and Loser must
            give up the controller and cannot play consecutive matches if other ledger contestants are present.
        </p>


    </div><!--
    -->
    <div id="whatUp">
        <img class="zabSucksImg" src="images/saltFighter.png"/>

        <?php if (!empty($result)) { ?>
            <div id="matches" class="table-content">
                <div class="topLabelHolder row hidden-sm hidden-xs">
                    <div class="topLabel col-lg-4 col-md-4 col-sm-4 col-xs-4"><h1>Winner</h1></div>
                    <div class="topLabel col-lg-4 col-md-4 col-sm-4 col-xs-4"><h1>Vs</h1></div>
                    <div class="topLabel col-lg-4 col-md-4 col-sm-4 col-xs-4"><h1>Loser</h1></div>
                </div>
                <div class="row">
                    <?php
                    while ($row = mysqli_fetch_array($result)) {
                        $sql2 = "SELECT users.userName, users.player_id FROM users WHERE player_id = '$row[loss]'";
                        $result2 = mysqli_query($conn, $sql2);
                        $row2 = mysqli_fetch_array($result2);
                        ?>

                        <div class="row matchRow ">
                            <div class="matchAnnounce hidden-lg hidden-md col-sm-12 col-xs-12">
                                <h1>Match</h1>
                                <div class="date"><?php echo date("F j, Y", $row["match_date"]); ?></div>
                            </div>
                            <div class="matchData userName <?php echo $row["userName"]; ?> col-lg-4 col-md-4 col-sm-12 col-xs-12 <?php if($row["player_id"] == $row["p1_id"]){ echo strtolower($row["p1_char"]);} else { echo strtolower($row["p2_char"]);} ?>">
                                <?php echo $row["userName"]; ?>
                                <br> <?php if($row["player_id"] == $row["p1_id"]){ echo $row["p1_char"];} else { echo $row["p2_char"];} ?>
                                <div class="indicator hidden-lg hidden-md">
                                    Winner
                                </div>
                            </div>
                            <div class="matchData vs col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div id="vs"><h1 style="display: inline">VS</h1></div>
                                <div class="date hidden-sm hidden-xs"><?php echo date("F j, Y", $row["match_date"]); ?></div>
                            </div>
                            <div class="matchData userName <?php echo $row2["userName"]; ?> col-lg-4 col-md-4 col-sm-12 col-xs-12 <?php if($row2["player_id"] == $row["p1_id"]){ echo strtolower($row["p1_char"]);} else { echo strtolower($row["p2_char"]);} ?>">
                                <?php echo $row2["userName"]; ?>
                                <br> <?php if($row2["player_id"] == $row["p1_id"]){ echo $row["p1_char"];} else { echo $row["p2_char"];} ?>
                                <div class="indicator hidden-lg hidden-md">
                                    Loser
                                </div>
                            </div>

                        </div>

                        <?php
                    }
                    ?>
                </div>
            </div>
        <?php } ?>

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

