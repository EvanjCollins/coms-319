<?php
  session_start();
  date_default_timezone_set("America/Chicago");

  if($_POST['action'] == "createPost"){
    $username = $_SESSION['username'];
    $postID = $username . date("h:i:s");
    $postTitle = $_POST['title'];
    $postTime = date("h:i:s");
    $postDesc = $_POST['description'];

    $data = array('userID' => $username, 'postID' => $postID,
                  'postTitle' => $postTitle, 'postTime' => $postTime,
                  'postDescription' => $postDesc);
    $data = json_encode($data);
    #var_dump($data);

    $filename = "posts.txt";
    if(filesize($filename) == 0){
      $file = fopen($filename, "a");
      $writeData = array($data);
      fwrite($file, json_encode($writeData));
      fclose($file);
    }
    else{
      $file = fopen($filename, "r+");
      $fileString = fread($file, filesize($filename));

      if($file == false ) {
        echo ( "Error in opening file" );
        exit();
      }
      fclose($file);
      #echo $fileString;
      $writeData = array($data);
      $currPosts = json_decode($fileString);

      for($i = 0; $i < sizeof($currPosts); $i++){
        array_push($writeData, $currPosts[$i]);
      }
      #var_dump($writeData);
      $file = fopen($filename, 'w');
      fwrite($file, json_encode($writeData));

    }

  }

  elseif ($_POST['action'] == "editPost") {
    
  }


  header("HTTP/1.1 200 OK");

?>
