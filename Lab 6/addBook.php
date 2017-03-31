<?php
  session_start();

  $title = $_POST['BookTitle'];
  $id = $_POST['BookId'];
  $author = $_POST['Author'];
  $shelf = $_POST['Shelf'];

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
  #echo $sql;
  if ($conn->query($sql) === TRUE) {
      echo "Book added to books";
  } else {
      echo "Error adding book: " . $conn->error;
  }

  $sql = "SELECT * FROM shelves WHERE ShelfName = '".$shelf."';";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $shelfid = $row['ShelfId'];

  $sql = "INSERT INTO bookLocation(BookId, ShelfId) VALUES(".$id.", ".$shelfid.");";
  if ($conn->query($sql) === TRUE) {
      echo "Book added to bookLocation";
  } else {
      echo "Error adding book: " . $conn->error;
  }


?>
