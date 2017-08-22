<?php
    
    require 'dbconfig.php';
   
    $sql = "SELECT match_date, match_id, win, loss, p1_id, p2_id, p1_char, p2_char FROM match_stats INNER JOIN users ON match_stats.win = users.player_id ORDER BY match_date desc";
    $result2 = mysqli_query($conn, $sql);
    
    $row = mysqli_fetch_array($result2);
    echo json_encode($row);

?>
