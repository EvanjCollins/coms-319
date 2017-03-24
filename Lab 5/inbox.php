<?php

  session_start();
  $path = 'phpseclib';
	set_include_path(get_include_path() . PATH_SEPARATOR . $path);
	include_once('Crypt/RSA.php');

  $username = $_SESSION['username'];
  $filename = "messages.txt";
  $postString = file_get_contents($filename);
  $postObj = json_decode($postString);

  #var_dump($postObj);

  echo "<table border=\"1\" style=\"width:680px\">";

  for($i = 0; $i < sizeof($postObj); $i++){
    $singleObj = json_decode($postObj[$i], true);
    $from = $singleObj['sender'];
    $to = $singleObj['receiver'];
    if($to != $_SESSION['username']){
      continue;
    }
    $encryptedMessage = $singleObj['encryptedMessage'];


    //build table row
    $postHeader = "<tr><th>To: " . $to . " From: ". $from . "</th>";
    echo $postHeader;

    //decrypt message

    #var_dump($singleObj);

    $encodedMsg = $singleObj['encryptedMessage'];
    $jsonDecodedmsg = base64_decode($encodedMsg);
    $decipheredText = rsa_decrypt($jsonDecodedmsg, $_SESSION['privatekey']);
    #echo $decipheredText


    $postDesc = "<td>". $decipheredText. "</td></tr>";
    echo $postDesc;


  }

  echo "</table>";

  echo "<input type=\"button\" id=\"posts\" value=\"Return to Posts\">";
  //bind return function
  echo "<script type=\"text/javascript\">
    var returnButton = document.getElementById(\"posts\");
    returnButton.onclick = function() {
      window.location = 'viewposts.html';
    }
    </script>";


    function rsa_decrypt($string, $private_key){
        //Create an instance of the RSA cypher and load the key into it
        $cipher = new Crypt_RSA();
        $cipher->loadKey($private_key);
        //Set the encryption mode
        $cipher->setEncryptionMode(CRYPT_RSA_ENCRYPTION_PKCS1);
        //Return the decrypted version
        return $cipher->decrypt($string);
    }

?>
