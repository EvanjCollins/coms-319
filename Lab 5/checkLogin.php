<?php

  session_start();

  $username = $_POST['username'];
  $password = $_POST['password'];

  $filename = "users.txt";
  $file = fopen($filename, "r");

  if($file == false ) {
    echo ( "Error in opening file" );
    exit();
  }

  $fileString = fread($file, filesize($filename));
  $lines = explode('$$$', $fileString);
  unset($lines[sizeof($lines)-1]);

  $validLogin = false;
  for($i = 0; $i < sizeof($lines); $i++){
    $jsonObject = json_decode($lines[$i]);
    if($username == $jsonObject -> username){
      $currPass = $jsonObject -> password;
      if($currPass == $password){
        $validLogin = true;
      }
    }

  }

  $data1 = "True";
  $data2 = "False";
  header('Content-type: application/json');
  if ($validLogin) {
    echo json_encode($data1);
    $_SESSION['username'] = $username;
  }
  else {
    echo json_encode($data2);
  }


  #if($validLogin){
  #  header('x', true, 200);
  #}
  #else{
  #  header('x', false, 404);
  #}

  fclose($file);

  #session_destroy();



?>
