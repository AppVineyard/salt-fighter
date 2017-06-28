<?php
	
    require 'dbconfig.php';
	
	$post_at = "";
	$post_at_to_date = "";
	
	$queryCondition = "";
	if(!empty($_POST["search"]["match_date"])) {
		$post_at = $_POST["search"]["match_date"];
		list($fid,$fim,$fiy) = explode("-",$post_at);
		
		$post_at_todate = date('Y-m-d');
		if(!empty($_POST["search"]["post_at_to_date"])) {
			$post_at_to_date = $_POST["search"]["post_at_to_date"];
			list($tid,$tim,$tiy) = explode("-",$_POST["search"]["post_at_to_date"]);
			$post_at_todate = "$tiy-$tim-$tid";
		}
		
		$queryCondition .= "WHERE match_date BETWEEN '$fiy-$fim-$fid' AND '" . $post_at_todate . "'";
	}

	$sql = "SELECT * from match_stats " . $queryCondition . " ORDER BY match_date desc";
	$result = mysqli_query($conn,$sql);
?>

<html>
	<head>
    <title>Recent Articles</title>		
	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

	<style>
	.table-content{border-top:#CCCCCC 4px solid; width:50%;}
	.table-content th {padding:5px 20px; background: #F0F0F0;vertical-align:top;} 
	.table-content td {padding:5px 20px; border-bottom: #F0F0F0 1px solid;vertical-align:top;} 
	</style>
	</head>
	
	<body>
    <div class="demo-content">
		<h2 class="title_with_link">Recent Articles</h2>
  <form name="frmSearch" method="post" action="">
	 <p class="search_input">
		<input type="text" placeholder="From Date" id="match_date" name="search[match_date]"  value="<?php echo $post_at; ?>" class="input-control" />
	    <input type="text" placeholder="To Date" id="post_at_to_date" name="search[post_at_to_date]" style="margin-left:10px"  value="<?php echo $post_at_to_date; ?>" class="input-control"  />			 
		<input type="submit" name="go" value="Search" >
	</p>
<?php if(!empty($result))	 { ?>
<table class="table-content">
          <thead>
        <tr>
                      
          <th width="30%"><span>Post Title</span></th>
          <th width="50%"><span>Description</span></th>          
          <th width="20%"><span>Post Date</span></th>	  
        </tr>
      </thead>
    <tbody>
	<?php
		while($row = mysqli_fetch_array($result)) {
	?>
        <tr>
			<td><?php echo $row["p1_char"]; ?></td>
			<td><?php echo $row["p2_char"]; ?></td>
			<td><?php echo $row["match_date"]; ?></td>

		</tr>
   <?php
		}
   ?>
   <tbody>
  </table>
<?php } ?>
  </form>
  </div>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script>
$.datepicker.setDefaults({
showOn: "button",
buttonImage: "datepicker.png",
buttonText: "Date Picker",
buttonImageOnly: true,
dateFormat: 'dd-mm-yy'  
});
$(function() {
$("#match_date").datepicker();
$("#post_at_to_date").datepicker();
});
</script>
</body></html>
