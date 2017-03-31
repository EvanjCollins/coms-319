<?php

  session_start();
  # contains input variables that were not filled out in the form
  $notset = [];

  if(strlen($_POST['username']) != 0){
    $username = $_POST['username'];
  }else{
    array_push($notset, 'username');
  }
  if(strlen($_POST['password']) != 0){
    $password = $_POST['password'];
  }else{
    array_push($notset, 'password');
  }
  if(strlen($_POST['passwordConfirm']) != 0){
    $passConfirm = $_POST['passwordConfirm'];
  }else{
    array_push($notset, 'passwordConfirm');
  }
  if(strlen($_POST['email']) != 0){
    $email = $_POST['email'];
  }else{
    array_push($notset, 'email');
  }
  if(strlen($_POST['phone']) != 0){
    $phone = $_POST['phone'];
  }else{
    //not required
    //array_push($notset, 'phone');
  }
  if(strlen($_POST['librarianBool']) != 0){
    $libBool = $_POST['librarianBool'];
  }else{
    array_push($notset, 'librarianBool');
  }
  if(strlen($_POST['firstName']) != 0){
    $firstName = $_POST['firstName'];
  }else{
    array_push($notset, 'firstName');
  }
  if(strlen($_POST['lastName']) != 0){
    $lastName = $_POST['lastName'];
  }else{
    array_push($notset, 'lastName');
  }
  # if there are variables that weren't filled out, return them in a json array
  if(sizeof($notset) > 0){
    echo(json_encode($notset));
    exit();
  }
  if($password != $passConfirm){
    array_push($notset, 'IncPasses');
    echo(json_encode($notset));
    exit();
  }

  //server variables
  $servername = 'mysql.cs.iastate.edu';
  $serverUsername = 'dbu319team104';
  $serverPassword = 'ODdlNzllYWU5';
  $serverDB = 'db319team104';

  $conn = new mysqli($servername, $serverUsername, $serverPassword);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";



/*
  echo $username;
  echo $password;
  echo $passConfirm;
  echo $email;
  echo $phone;
  echo $libBool;
  echo $firstName
  echo $lastName;
*/


?>
