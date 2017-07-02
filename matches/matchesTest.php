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
<head>
    <title>Salt-Figher : Match History</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="match.css">

</head>

<body>
<div class="demo-content">
    <h2 class="title_with_link">Recent Matches</h2>
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
                <div class="row">

                    <div class="topLabel col-lg-12">Winner</div>
                    <div class="topLabel col-lg-12">Loser</div>
                    <div class="topLabel col-lg-12">P1 Character</div>
                    <div class="topLabel col-lg-12">P2 Characte</div>
                    <div class="topLabel col-lg-12">Match Date></div>
                </div>
                <div class="row">
                    <?php
                    while ($row = mysqli_fetch_array($result)) {
                        $sql2 = "SELECT users.userName FROM users WHERE player_id = '$row[loss]'";
                        $result2 = mysqli_query($conn, $sql2);
                        $row2 = mysqli_fetch_array($result2);
                        ?>
                        <div class="row">
                            <div class="col-lg-2"><?php echo $row["userName"]; ?></div>
                            <div class="col-lg-2"><?php echo $row2["userName"]; ?></div>
                            <div class="col-lg-2"><?php echo $row["p1_char"]; ?></div>
                            <div class="col-lg-2"><?php echo $row["p2_char"]; ?></div>
                            <div class="col-lg-2"><?php echo date("F j, Y", $row["match_date"]); ?></div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
                >
            </div>
        <?php } ?>


    </form>

</div>
<script src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>

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
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
</script>
</body>
</html>
