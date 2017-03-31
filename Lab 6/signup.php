<?php

  session_start();
  # error array
  $notset = [];

  //check that each field is filled out
  if(strlen($_POST['username']) != 0){
    $username = $_POST['username'];
  }else{
    array_push($notset, 'Username');
  }
  if(strlen($_POST['password']) != 0){
    $password = $_POST['password'];
  }else{
    array_push($notset, 'Password');
  }
  if(strlen($_POST['passwordConfirm']) != 0){
    $passConfirm = $_POST['passwordConfirm'];
  }else{
    array_push($notset, 'Confirm Password');
  }
  if(strlen($_POST['email']) != 0){
    $email = $_POST['email'];
  }else{
    array_push($notset, 'Email');
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
    array_push($notset, 'Librarian Checkbox');
  }
  if(strlen($_POST['firstName']) != 0){
    $firstName = $_POST['firstName'];
  }else{
    array_push($notset, 'First Name');
  }
  if(strlen($_POST['lastName']) != 0){
    $lastName = $_POST['lastName'];
  }else{
    array_push($notset, 'Last Name');
  }
  # if there are variables that weren't filled out, return them in a json array
  if(sizeof($notset) > 0){
    echo(json_encode($notset));
    exit();
  }
  //check passwords match
  if($password != $passConfirm){
    array_push($notset, 'IncPasses');
    echo(json_encode($notset));
    exit();
  }

  array_push($notset, 'validateError');
  //validate input
  if(!ctype_alpha($username)){
    array_push($notset, 'Username should be only characters');
  }
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    array_push($notset, 'Email in incorrect format');
  }
  if(!preg_match("#^\d{3}-\d{3}-\d{4}$#", $phone) && !preg_match("#^\d{3}\d{3}\d{4}$#", $phone)) {
    array_push($notset, 'Phone number in incorrect format');
  }
  if(!ctype_alpha($firstName)){
    array_push($notset, 'First name should be only characters');
  }
  if(!ctype_alpha($lastName)){
    array_push($notset, 'Last Name should be only characters');
  }
  if(sizeof($notset) > 1){
    echo(json_encode($notset));
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
  echo "Connected successfully";

  $_SESSION['username'] = $username;

  #$email = $conn->real_escape_string($email);
  #$escapedEmail = '\'' . $email . '\'';
  $tinyInt;
  if($libBool == "false"){
    $tinyInt = 0;
  }
  else{
    $tinyInt = 1;
  }
  $password = md5($password);

  $sql = "INSERT INTO users(Username, Password, Email, Phone, Librarian, FirstName, LastName) VALUES('".$username."', '".$password."', '".$email."', '".$phone."', '".$tinyInt."', '".$firstName."', '".$lastName ."')";
  echo $sql;
  if ($conn->query($sql) === TRUE) {
      echo "User added";
  } else {
      echo "Error adding user: " . $conn->error;
  }

  $conn->close();
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

  session_destroy();

?>
