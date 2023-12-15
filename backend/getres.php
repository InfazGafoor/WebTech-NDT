<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$stuid = $data['stuid'];
$nic = $data['nic'];

 include("conn.php");
 $sql = "SELECT * FROM result WHERE  stuid = '$stuid' ";
 $result = $mysqli->query($sql);

 if (mysqli_num_rows($result)) {
     $x = $result->fetch_all();
     echo json_encode($x);
 } else {
     echo "Invalid username or password entered";
 }

$mysqli -> close();
