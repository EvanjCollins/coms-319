<?php

  session_start();

  class Library {
    function Library() {
        $this->model = "VW";
    }
  }

  class Book {
    function Book($bookid, $booktitle, $author, $availability) {
        $this->Bookid = $bookid;
        $this->BookTitle = $booktitle;
        $this->Author = $author;
        $this->Availability = $availability;
    }
  }

  class Shelf {
    function Shelf($shelfid, $shelfname) {
        $this->ShelfId = $shelfid;
        $this->ShelfName = $shelfname;
    }
  }
# Class objects that need to be implemented: library, librarian,	student, book, shelf.

  function buildAddBook(){
    echo "<table border=\"1\" style=\"width:680px\">";
    echo "<th colspan=\"2\">Add New Book</th>";
    echo "<tr><td>BookTitle: </td>";
    echo "<td><input type=\"text\" id=\"title\" size=\"100\"></td></tr>";
    echo "<tr><td>BookId: </td>";
    echo "<td><input type=\"text\" id=\"id\" size=\"100\"></td></tr>";
    echo "<tr><td>Author: </td>";
    echo "<td><input type=\"text\" id=\"author\" size=\"100\"></td></tr>";
    echo "<tr><td>Shelf: </td>";
    echo "<td><input type=\"text\" id=\"shelf\" placeholder=\"Art, Science, Sport, or Literature\" size=\"100\"></td></tr>";
    echo "<tr><td colspan=\"2\"><input type=\"button\" id=\"submit\" value=\"Submit\"></td></tr>";
    echo "</table>";

    echo "<script type=\"text/javascript\">
      var submitButton = document.getElementById('submit');

      submitButton.onclick = function() {
        var title = document.getElementById('title').value;
        var id = document.getElementById('id').value;
        var author = document.getElementById('author').value;
        var shelf = document.getElementById('shelf').value;

        $(document).ready(
          $.ajax({
              url:\"addBook.php\", //the page containing php script
              type: \"post\", //request type,
              dataType: 'html',
              data: {BookTitle: title, BookId: id, Author: author, Shelf: shelf},
              success: function(data) {
                //location.reload();
              }
          })
        )
      }
      </script>";
  }

  function buildDeleteBook(){
    echo "<p>Delete Book: </p>";
    echo "<input type=\"text\" id=\"bookid\" placeholder=\"BookId\" size=\"50\">";
    echo "<input type=\"button\" id=\"submit3\" value=\"Submit\">";
    echo "<div id=\"response\"></div>";

    echo "<script type=\"text/javascript\">
      var submitButton3 = document.getElementById(\"submit3\");

      submitButton3.onclick = function() {
        var bookid = document.getElementById(\"bookid\").value;
        $(document).ready(
          $.ajax({
              url:\"checkoutBook.php\", //the page containing php script
              type: \"post\", //request type,
              dataType: 'html',
              data: {BookId: bookid, Checkout: 2},
              success: function(data) {
                location.reload();
              }
          })
        )
      }

      </script>";
  }


  function buildViewUsers(){
    echo "<p>Search User Borrow History: </p>";
    echo "<input type=\"text\" id=\"lookupUser\" placeholder=\"UserName\" size=\"50\">";
    echo "<input type=\"button\" id=\"submit2\" value=\"Submit\">";
    echo "<div id=\"userInfo\"></div>";

    echo "<script type=\"text/javascript\">
      var submitButton2 = document.getElementById(\"submit2\");

      submitButton2.onclick = function() {
        var name = document.getElementById(\"lookupUser\").value;
        $(document).ready(
          $.ajax({
              url:\"viewUserHistory.php\", //the page containing php script
              type: \"post\", //request type,
              dataType: 'html',
              data: {UserName: name},
              success: function(data) {
                $('#userInfo').append(data);
              }
          })
        )
      }
      </script>";
  }

  function buildViewAllShelves(){
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
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Art';";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Art: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td>".$row['Availability']."</td></tr>";
      }
    }

    //Science Shelf
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Science';";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Science: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td>".$row['Availability']."</td></tr>";
      }
    }

    //Sport Shelf
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Sport';";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Sport: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td>".$row['Availability']."</td></tr>";
      }
    }

    //Literature Shelf
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Literature';";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Literature: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td>".$row['Availability']."</td></tr>";
      }
    }
    echo "</table>";
  }

  function buildViewAllShelvesStudent(){
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
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Art' AND Availability = 1;";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Art: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td><input type=\"button\" onclick=\"checkout(".$row['BookId'].")\"value=\"Checkout\" id=\"".$row['BookId']."\"></td></tr>";
      }
    }

    //Science Shelf
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Science' AND Availability = 1;";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Science: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td><input type=\"button\" onclick=\"checkout(".$row['BookId'].")\"value=\"Checkout\" id=\"".$row['BookId']."\"></td></tr>";
      }
    }

    //Sport Shelf
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Sport' AND Availability = 1;";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Sport: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td><input type=\"button\" onclick=\"checkout(".$row['BookId'].")\"value=\"Checkout\" id=\"".$row['BookId']."\"></td></tr>";
      }
    }

    //Literature Shelf
    $sql = "SELECT * FROM books INNER JOIN bookLocation ON books.BookId = bookLocation.BookId INNER JOIN
    shelves ON bookLocation.ShelfId = shelves.ShelfId WHERE shelves.ShelfName = 'Literature' AND Availability = 1;";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Literature: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td><input type=\"button\" onclick=\"checkout(".$row['BookId'].")\"value=\"Checkout\" id=\"".$row['BookId']."\"></td></tr>";
      }
    }
    echo "</table>";

    echo "<script>
      function checkout(bookid){
        $(document).ready(
          $.ajax({
              url:\"checkoutBook.php\", //the page containing php script
              type: \"post\", //request type,
              dataType: 'html',
              data: {BookId: bookid, Checkout: 1},
              success: function(data) {
                location.reload();
              }
          })
        )
      }

    </script>";


  }

  function buildReturnShelfStudent(){
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
    echo "<th colspan=\"3\">Books In Your Possession: </th>";
    //Art Shelf
    $sql = "SELECT * FROM books INNER JOIN loanHistory ON books.BookId = loanHistory.BookId
    WHERE loanHistory.UserName = '".$_SESSION['UserName']."' AND loanHistory.ReturnedDate IS NULL;";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      echo "<tr><td colspan=\"3\">Art: </td></tr>";
      while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row['BookTitle']."</td> <td>".$row['Author']."</td> <td><input type=\"button\" onclick=\"returnBook(".$row['BookId'].")\" value=\"Return\" id=\"".$row['BookId']."\"></td></tr>";
      }
    }
    echo "</table>";

    echo "<script>
      function returnBook(bookid){
        $(document).ready(
          $.ajax({
              url:\"checkoutBook.php\", //the page containing php script
              type: \"post\", //request type,
              dataType: 'html',
              data: {BookId: bookid, Checkout: 0},
              success: function(data) {
                location.reload();
              }
          })
        )
      }

    </script>";
  }

  echo "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>";
  echo "<div align=\"right\">".$_SESSION['UserName']."</div>";
  if($_SESSION['Librarian'] == 1){
    buildAddBook();
    buildDeleteBook();
    buildViewUsers();
    echo "<br>";
    buildViewAllShelves();
  }
  else{
    buildViewAllShelvesStudent();
    buildReturnShelfStudent();
  }


?>
