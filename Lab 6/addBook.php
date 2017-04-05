<?php
  session_start();

  class Library {
    function Library() {
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

      $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
      shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Art';";
      $result = $conn->query($sql);
      $this->artShelf = $result->num_rows;

      $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
      shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Science';";
      $result = $conn->query($sql);
      $this->scienceShelf = $result->num_rows;

      $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
      shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Sport';";
      $result = $conn->query($sql);
      $this->sportShelf = $result->num_rows;

      $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
      shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Literature';";
      $result = $conn->query($sql);
      $this->literatureShelf = $result->num_rows;

    }
  }

  class Book {
    function Book($bookid, $booktitle, $author, $availability) {
      $this->BookId = $bookid;
      $this->BookTitle = $booktitle;
      $this->Author = $author;
      $this->Availability = $availability;
    }
  }

  class Shelf {
    function Shelf($shelfname) {
      $this->ShelfName = $shelfname;
      if($shelfname == 'Art'){
        $this->ShelfId = 1;
      }else if($shelfname == 'Science'){
        $this->ShelfId = 2;
      }else if($shelfname == 'Sport'){
        $this->ShelfId = 3;
      }else{
        $this->ShelfId = 4;
      }
    }
  }

  $title = $_POST['BookTitle'];
  $id = $_POST['BookId'];
  $author = $_POST['Author'];
  $shelf = $_POST['Shelf'];

  $lib = new Library();
  $book = new Book($id, $title, $author, 1);
  $shelf = new Shelf($shelf);

  $canInsert = false;
  if($shelf->ShelfName == 'Art'){
    if($lib->artShelf < 20){
      $canInsert = true;
    }
  }else if($shelf->ShelfName == 'Science'){
    if($lib->scienceShelf < 20){
      $canInsert = true;
    }
  }else if($shelf->ShelfName == 'Sport'){
    if($lib->sportShelf < 20){
      $canInsert = true;
    }
  }else{
    if($lib->literatureShelf < 20){
      $canInsert = true;
    }
  }

  if($canInsert){
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

    $sql = "INSERT INTO books(BookId, BookTitle, Author, Availability) VALUES(".$book->BookId.", '".$book->BookTitle."', '".$book->Author."', ".$book->Availability.");";
    #echo $sql;
    if ($conn->query($sql) === TRUE) {
        echo "Book added to books";
    } else {
        echo "Error adding book: " . $conn->error;
    }

    $sql = "SELECT * FROM shelves WHERE ShelfName = '".$shelf->ShelfName."';";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $shelfid = $row['ShelfId'];

    $sql = "INSERT INTO bookLocation(BookId, ShelfId) VALUES(".$book->BookId.", ".$shelf->ShelfId.");";
    if ($conn->query($sql) === TRUE) {
        echo "Book added to bookLocation";
    } else {
        echo "Error adding book: " . $conn->error;
    }
  }
  else{
    echo "Not Enough Room on Shelf, Book Not Added";
  }



?>
