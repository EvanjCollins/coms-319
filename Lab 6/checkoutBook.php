<?php

  #1 is checkout, 0 is return, 2 is delete

  session_start();

  function checkoutBook(){
    //make unavailable
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

    $sql = "UPDATE books SET Availability = 0 WHERE BookId = ".$_POST['BookId'].";";
    if ($conn->query($sql) === TRUE) {
        echo "Updated Availability";
    } else {
        echo "Error updating availability: " . $conn->error;
    }
    //check if in loanHistory
    $sql = "SELECT * FROM loanHistory WHERE BookId = ".$_POST['BookId'].";";
    $result = $conn->query($sql);
    //update dueDate
    if($result->num_rows == 0){
      $date = date("Y-m-d");
      $sqlDate = date('Y-m-d', strtotime($date));
      $sql = "INSERT INTO loanHistory(UserName, BookId, DueDate)
       VALUES('".$_SESSION['UserName']."', ".$_POST['BookId'].", '".$sqlDate."');";
      if ($conn->query($sql) === TRUE) {
          echo "Inserted DueDate";
      } else {
          echo "Error inserting DueDate: " . $conn->error;
      }
    }
    else{
      $date = date("Y-m-d");
      $sqlDate = date('Y-m-d', strtotime($date));
      $sql = "UPDATE loanHistory SET DueDate = '".$sqlDate."' WHERE BookId = ".$_POST['BookId'].";";
      if ($conn->query($sql) === TRUE) {
          echo "Updated Availability";
      } else {
          echo "Error updating availability: " . $conn->error;
      }
    }






  }

  function returnBook(){
    //make Available
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

    $sql = "UPDATE books SET Availability = 1 WHERE BookId = ".$_POST['BookId'].";";
    if ($conn->query($sql) === TRUE) {
        echo "Updated Availability";
    } else {
        echo "Error updating availability: " . $conn->error;
    }
    //update returnedDate
    $date = date("Y-m-d");
    $sqlDate = date('Y-m-d', strtotime($date));
    $sql = "UPDATE loanHistory SET returnedDate = '".$sqlDate."' WHERE BookId = ".$_POST['BookId'].";";
    if ($conn->query($sql) === TRUE) {
        echo "Updated Availability";
    } else {
        echo "Error updating availability: " . $conn->error;
    }
  }

  function deleteBook(){
    #delete from books
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

    $sql = "DELETE FROM books WHERE BookId = ".$_POST['BookId'].";";
    if ($conn->query($sql) === TRUE) {
        echo "Book deleted from books";
    } else {
        echo "Error removing book: " . $conn->error;
    }

    #delete from book location
    $sql = "DELETE FROM bookLocation WHERE BookId = ".$_POST['BookId'].";";
    if ($conn->query($sql) === TRUE) {
        echo "Book deleted from books";
    } else {
        echo "Error removing book: " . $conn->error;
    }


  }

  if($_POST['Checkout'] == 1){
    checkoutBook();
  }
  else if($_POST['Checkout'] == 0){
    returnBook();
  }else{
    deleteBook();
  }


?>
