<?php

  session_start();

  $to = $_POST['to'];
  $from = $_POST['from'];
  $message = $_POST['message'];

  $filename = "users.txt";
  $file = fopen($filename, "r");

  if($file == false ) {
    echo ( "Error in opening file" );
    exit();
  }

  $fileString = fread($file, filesize($filename));
  $lines = explode('$$$', $fileString);
  unset($lines[sizeof($lines)-1]);
  #var_dump($lines);
  #var_dump($_SESSION);

  $path = 'phpseclib';
	set_include_path(get_include_path() . PATH_SEPARATOR . $path);
	include_once('Crypt/RSA.php');
  #$publicKey =  $_SESSION['publicKey'];
  #$privateKey =  $_SESSION['privatekey'];
  $receiverPublicKey;

  for($i = 0; $i < sizeof($lines); $i++){
    $userObj = json_decode($lines[$i]);
    if($to == $userObj -> username){
      $receiverPublicKey = $userObj -> publickey;
    }
  }
  fclose($file);

  function rsa_encrypt($string, $public_key){
      //Create an instance of the RSA cypher and load the key into it
      $cipher = new Crypt_RSA();
      $cipher->loadKey($public_key);
      //Set the encryption mode
      $cipher->setEncryptionMode(CRYPT_RSA_ENCRYPTION_PKCS1);
      //Return the encrypted version
      return $cipher->encrypt($string);
  }


  //encrypt with receiver public key
  $encryptedText = rsa_encrypt($message, $receiverPublicKey);
  $cyphertext = base64_encode($encryptedText);
  #echo $encryptedText;
  $array = array('sender' => $from, 'receiver' => $to, 'encryptedMessage' => $cyphertext);
  $jsonArray = json_encode($array);
  #file_put_contents("messages.txt",$jsonArray);

  $filename = "messages.txt";
  if(filesize($filename) == 0){
    $file = fopen($filename, "a");
    $writeData = array($jsonArray);
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
    $writeData = array($jsonArray);
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






?>
