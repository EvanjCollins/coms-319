<?php
  session_start();
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


    //build table row
    $postHeader = "<tr><th>" . $postTitle . ":</th>";
    echo $postHeader;
    $postDesc = "<td>". $postDesc. "</td>";
    echo $postDesc;
    $postInfo = "<td> Posted By: ". $username. " At: ". $postTime. "</td>";
    echo $postInfo;
    $buttonID = "button". $postID;
    $updateButton = "<td><input type=\"button\" id=\"". $buttonID. "\" value=\"Update\"></td></tr>";
    echo $updateButton;

    //bind update function
    echo "<script type=\"text/javascript\">
      var updateButton = document.getElementById(\"". $buttonID. "\");
      updateButton.onclick = function() {
        var newMessage = prompt(\"Enter new post:\",\"\");
        if (newMessage != null) {
          $.ajax({
              url:\"updatePosts.php\", //the page containing php script
              type: \"post\", //request type,
              dataType: 'html',
              data: {action: \"updatePost\", description: newMessage, postID: \"". $postID."\"},
              success: function() {
                clearTable();
                buildTable();
             }
           });
        }
      }
      </script>";

  }

  echo "</table>";

?>
