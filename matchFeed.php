<?php
    
    require 'dbconfig.php';
   
    $sql = "SELECT match_date, match_date, win, loss, p1_id, p2_id, p1_char, p2_char, users.userName FROM match_stats INNER JOIN users ON match_stats.win = users.player_id ORDER BY match_date desc";
    $result2 = mysqli_query($conn, $sql);

    $data = array();
    
    while ($row = mysqli_fetch_array($result2)) {
        $data = array(
        $row['userName'],
        $row['match_date'],
        $row['match_date'],
        $row['win'],
        $row['loss'],
        $row['p1_id'],
        $row['p2_id'],
        $row['p1_char'],
        $row['p2_char']);
    }

    echo json_encode($data);

?>
