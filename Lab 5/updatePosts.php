<?php
  session_start();
  date_default_timezone_set("America/Chicago");

  if($_POST['action'] == "createPost"){
    var_dump($_SESSION);
    echo $_SESSION['username'];
    echo date("h:i:s");
  }

  function editPost(){

  }

  function createPost(){

  }

  header("HTTP/1.1 200 OK");

?>
