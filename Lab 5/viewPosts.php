<?php
  $filename = "posts.txt";
  $postString = file_get_contents($filename);
  $postObj = json_decode($postString);

  echo "<table border=\"1\" style=\"width:680px\">";

  for($i = 0; $i < sizeof($postObj); $i++){
    $singleObj = json_decode($postObj[$i], true);
    $username = $singleObj['userID'];
    $postID = $singleObj['postID'];
    $postTitle = $singleObj['postTitle'];
    $postTime = $singleObj['postTime'];
    $postDesc = $singleObj['postDescription'];

    /*
    $postHeader = "<tr><th>" . $postTitle . ":</th></tr>";
    echo $postHeader;
    $postInfo = "<tr><td> Posted By: ". $username. " At: ". $postTime. "</td></tr>";
    echo $postInfo;
    $postDesc = "<tr><td>". $postDesc. "</td></tr>";
    echo $postDesc;
    */
    $postHeader = "<tr><th>" . $postTitle . ":</th>";
    echo $postHeader;
    $postDesc = "<td>". $postDesc. "</td>";
    echo $postDesc;
    $postInfo = "<td> Posted By: ". $username. " At: ". $postTime. "</td>";
    echo $postInfo;
    $buttonId = "button". $postID;
    $updateButton = "<td><input type=\"button\" id=\"". $buttonId. "\" value=\"Update\"></td></tr>";
    echo $updateButton;

  }

  echo "</table>";

  #echo "<p> This is a test </p>";



?>
