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
        #echo gettype($currPosts[$i]);
        array_push($writeData, $currPosts[$i]);
      }
      #var_dump($writeData);
      $file = fopen($filename, 'w');
      #echo gettype($writeData);
      fwrite($file, json_encode($writeData));

    }

  }

  elseif ($_POST['action'] == "updatePost") {

    $filename = "posts.txt";
    $fileString = file_get_contents($filename);
    $jsonPosts = json_decode($fileString);
    #var_dump($jsonPosts);

    $writeData = array();

    for($i = 0; $i < sizeof($jsonPosts); $i++){
      $singleObj = $jsonPosts[$i];
      $singleObj = json_decode($singleObj);
      $writeData;

      $postUser = $singleObj -> userID;
      $postID = $singleObj -> postID;
      //modify if matches
      if($postID == $_POST['postID']){
        if($_SESSION['username'] == $postUser || $_SESSION['username'] == 'admin'){
          $singleObj -> postDescription = $_POST['description'];
        }
        #var_dump($singleObj);
      }
      //push onto new array
      #echo gettype($singleObj);
      if($_SESSION['username'] == 'admin' && $_POST['description'] == 'delete' && $postID == $_POST['postID']){
        //don't push message
      }else{
        array_push($writeData, json_encode($singleObj));
      }

    }
    #var_dump($writeData);
    //write back
    $newFile = fopen($filename, 'w');
    #echo gettype($writeData);
    fwrite($newFile, json_encode($writeData));
  }


  header("HTTP/1.1 200 OK");

?>
