<?php

require 'dbconfig.php';


session_start();
if ($_SESSION["loggedIn"] != true) {
    echo("Access denied!");
    echo "<br>";
    echo "redirecting to login page....";

    header('Refresh: 3; URL=../index.php');

    exit();
}

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

<html>
<title>Salt-Figher : Match History</title>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,600" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="matchesTest.css">
<link rel="stylesheet" type="text/css" href="/styling/sideBar.css"/>
<link rel="stylesheet" type="text/css" href="/styling/mainArea.css"/>
</head>

<body>
<div class="header">
    <h1>Recent Matches</h1>
</div>
<div id="mainHolder">
    <form name="frmSearch" method="post" action="">
        <p class="search_input">
            <input type="text" placeholder="From Date" id="match_date" name="search[match_date]"
                   value="<?php echo $post_at; ?>" class="input-control"/>
            <input type="text" placeholder="To Date" id="post_at_to_date" name="search[post_at_to_date]"
                   style="margin-left:10px" value="<?php echo $post_at_to_date; ?>" class="input-control"/>
            <input type="submit" name="go" value="Search">
        </p>
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Filter by Winner Name..">


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
                            <div class="matchData userName <?php echo $row["userName"]; ?> col-lg-4 col-md-4 col-sm-12 col-xs-12 <?php if ($row["player_id"] == $row["p1_id"]) {
                                echo strtolower($row["p1_char"]);
                            } else {
                                echo strtolower($row["p2_char"]);
                            } ?>">
                                <?php echo $row["userName"]; ?>
                                <br> <?php if ($row["player_id"] == $row["p1_id"]) {
                                    echo $row["p1_char"];
                                } else {
                                    echo $row["p2_char"];
                                } ?>
                                <div class="indicator hidden-lg hidden-md">
                                    Winner
                                </div>
                            </div>
                            <div class="matchData vs col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div id="vs"><h1 style="display: inline">VS</h1></div>
                                <div class="date hidden-sm hidden-xs"><?php echo date("F j, Y", $row["match_date"]); ?></div>
                            </div>
                            <div class="matchData userName <?php echo $row2["userName"]; ?> col-lg-4 col-md-4 col-sm-12 col-xs-12 <?php if ($row2["player_id"] == $row["p1_id"]) {
                                echo strtolower($row["p1_char"]);
                            } else {
                                echo strtolower($row["p2_char"]);
                            } ?>">
                                <?php echo $row2["userName"]; ?>
                                <br> <?php if ($row2["player_id"] == $row["p1_id"]) {
                                    echo $row["p1_char"];
                                } else {
                                    echo $row["p2_char"];
                                } ?>
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


    </form>
</div>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

<script>
    $.datepicker.setDefaults({
        showOn: "button",
        buttonImage: "datepicker.png",
        buttonText: "Date Picker",
        buttonImageOnly: true,
        dateFormat: 'dd-mm-yy'
    });
    $(function () {
        $("#match_date").datepicker();
        $("#post_at_to_date").datepicker();
    });

    function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("matches");
        tr = table.getElementsByTagName(".row matchRow ");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("div")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    //finna chill on this for a min, might come back to it though.
    //    var currentPlayer;
    //    var currentRow;
    //    var currentPlayerClicked;
    //    $('.userName').hover(function () {
    //        var classes = $(this).attr('class').split(' ');
    //        currentPlayer = classes[2];
    //        $("." + currentPlayer).addClass('currP1');
    //
    //    }, function () {
    //        $("." + currentPlayer).removeClass('currP1');
    //    });
    //    $('.userName').click(function () {
    //        currentPlayerClicked ? currentPlayerClicked.removeClass('currentPlayerClicked') : null;
    //        var classes = $(this).attr('class').split(' ');
    //        currentPlayer = classes[2];
    //        currentPlayerClicked = $("." + currentPlayer);
    //        currentPlayerClicked.removeClass('currP1').addClass('currentPlayerClicked');
    //    });
    //
    //
    //    $('.matchRow').hover(function () {
    //            $(this).addClass('currentRowHover');
    //        },
    //        function () {
    //            $(this).removeClass('currentRowHover');
    //        });
    //    $('.matchRow').click(function () {
    //        currentRow ? currentRow.removeClass('currentRowClick') : null;
    //        currentRow = $(this);
    //        currentRow.addClass('currentRowClick');
    //    });

</script>


<script>


</script>
</body>
</html>
