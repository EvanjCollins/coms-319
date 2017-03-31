<?php

  session_start();
  #var_dump($_POST);
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

  echo "<table border=\"1\" style=\"width:680px\">";
  echo "<th colspan=\"3\">Available Books: </th>";
  //Art Shelf
  $sql = "SELECT * FROM loanHistory WHERE Username = '".$_POST['UserName']."';";
  $result = $conn->query($sql);
  if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
      echo "<tr><td>".$row['UserName']."</td> <td>".$row['BookId']."</td> <td>".$row['DueDate']."</td> <td>".$row['ReturnedDate']."</td></tr>";
    }
  }



?>
