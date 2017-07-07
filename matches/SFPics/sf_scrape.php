#!/usr/bin/php
<?php
include("../simple_html_dom.php");

$html = file_get_html("http://streetfighter.com/characters/necalli");
$items = $html->find('div[class=featured-image] img');
echo $items[1];
$jobs = array();
$chars = array("akuma","alex","balrog","birdie","cammy","chun-li","dhalsim","ed","f-a-n-g","guile","ibuki","juri","karin","ken","kolin","laura","m-bison","nash","necalli","r-mika","rashid","ryu","urien","vega","zangief");
foreach($chars as $char){
$html = file_get_html("http://streetfighter.com/characters/$char");
foreach($html->find('div[class=featured-image] img') as $item){
shell_exec("wget '$item->src'");

}
}

?>
