<?php

  session_start();

  $notset = [];
  $incomplete = false;
  $validLogin = false;

  //check that each field is filled out
  if(strlen($_POST['username']) != 0){
    $username = $_POST['username'];
  }else{
    $validLogin = false;
    $incomplete = true;
  }
  if(strlen($_POST['password']) != 0){
    $password = $_POST['password'];
  }else{
    $validLogin = false;
    $incomplete = true;
  }

  if($incomplete){
    echo json_encode('Incomplete');
    exit();
  }

  //server variables
  $servername = 'mysql.cs.iastate.edu';
  $serverUsername = 'dbu319team104';
  $serverPassword = 'ODdlNzllYWU5';
  $serverDB = 'db319team104';

  //connect to server
  $conn = new mysqli($servername, $serverUsername, $serverPassword, $serverDB);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  #echo "Connected successfully";

  $sql = "SELECT Password, Librarian FROM users WHERE UserName = '". $username ."'";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();

  #var_dump($row);
  #echo $row['Password'] == md5($password);
  if (md5($password) == $row['Password']) {
      $validLogin = true;
      $_SESSION['UserName'] = $username;
      $_SESSION['Librarian'] = $row['Librarian'];
  } else {
      $validLogin = false;
  }

  $conn->close();

  $data1 = "True";
  $data2 = "False";
  $data3 = "Incomplete";
  header('Content-type: application/json');
  if ($validLogin) {
    echo json_encode($data1);
  }
  else {
    echo json_encode($data2);
  }





?>
