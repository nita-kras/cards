<?php
$imgID = $_GET['currentFigureIndex'];
$imgC= $_GET['actID'];
$colUse = $_GET['price'];
$mapL = $_GET['year'];
$numC = $_GET['genre'];
$colMap = $_GET['genre'];
$diff = $_GET['genre'];
$db_host = 'mysql.cs.nott.ac.uk';
$db_user = 'psynk8_COMP2002'; 
$db_pass = 'FPXKIA'; 
$db_name = 'psynk8_COMP2002'; 

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_errno)  die("failed to connect to database\n</body>\n</html>"); 
$add = "INSERT INTO ImageInfo (imgID, imgColour, colourUse, mappingLegend, numColours, colourmapType, difficultyLevel) VALUES ('$imgid', '$imgC', '$colUse', '$mapL', '$numC','$colMap','$diff')";

?>
