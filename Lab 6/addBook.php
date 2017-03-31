<?php

  $title = $_POST['BookTitle'];
  $id = $_POST['BookId'];
  $author = $_POST['Author'];
  $shelf = $_POST['Shelf'];
  var_dump($_POST);

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

  $sql = "INSERT INTO books(BookId, BookTitle, Author, Availability) VALUES(".$id.", '".$title."', '".$author."', 1);";
  echo $sql;
  if ($conn->query($sql) === TRUE) {
      echo "Book added";
  } else {
      echo "Error adding book: " . $conn->error;
  }

?>
