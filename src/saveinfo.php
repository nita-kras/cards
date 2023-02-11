<html>
<body>
    <h1>Annotate</h1>
<?php
$imgID = $_GET['fignum'];
$imgC= $_GET['imgC'];
$colUse = $_GET['colUse'];
$mapL = $_GET['mapL'];
$numC = $_GET['colN'];
$colMap = $_GET['colmap'];
$diff = $_GET['diff'];
$db_host = 'mysql.cs.nott.ac.uk';
$db_user = 'psynk8_COMP2002'; 
$db_pass = 'FPXKIA'; 
$db_name = 'psynk8_COMP2002'; 

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_errno)  die("failed to connect to database\n</body>\n</html>"); 
$add = "INSERT INTO ImageInfo (imgID, imgColour, colourUse, mappingLegend, numColours, colourmapType, difficultyLevel) VALUES ('$imgid', '$imgC', '$colUse', '$mapL', '$numC','$colMap','$diff')";
?>

</body>
</html>