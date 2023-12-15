<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// var_dump($data);
$stuid = $data['stid'];
$fname = $data['fname'];
$lname = $data['lname'];
$nic = $data['nic'];
$email = $data['email'];
$role = $data['role'];
$mobile = $data['mobile'];
$password = $data['password'];

$sql = "INSERT INTO login (role, nic, password, fname, lname, email, mobile, stuid) VALUES ('$role','$nic','$password','$fname','$lname','$email',$mobile,'$stuid')";

// echo $sql;
if ($mysqli->query($sql) == true) {
  echo "success !";
} else {
  echo "Oops!Error Occured ";
}

$mysqli->close();
