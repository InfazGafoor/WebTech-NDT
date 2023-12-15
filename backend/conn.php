<?php
// server,UN , Pwd , dB name
$mysqli = new mysqli("localhost","root","","20it0484");

// Check connection
// connect-error  --returns the type of error
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>