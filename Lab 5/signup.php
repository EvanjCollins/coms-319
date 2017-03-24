<?php
  session_start();
  $username = $_POST['username'];
  $password = $_POST['password'];

  $path = 'phpseclib';
	set_include_path(get_include_path() . PATH_SEPARATOR . $path);
	include_once('Crypt/RSA.php');

  //Function for encrypting with RSA
  function rsa_encrypt($string, $public_key)
  {
      //Create an instance of the RSA cypher and load the key into it
      $cipher = new Crypt_RSA();
      $cipher->loadKey($public_key);
      //Set the encryption mode
      $cipher->setEncryptionMode(CRYPT_RSA_ENCRYPTION_PKCS1);
      //Return the encrypted version
      return $cipher->encrypt($string);
  }

  $rsa = new Crypt_RSA();
	$rsa->setPrivateKeyFormat(CRYPT_RSA_PRIVATE_FORMAT_PKCS1);
	$rsa->setPublicKeyFormat(CRYPT_RSA_PUBLIC_FORMAT_PKCS1);
	extract($rsa->createKey(1024)); /// makes $publickey and $privatekey available
	#echo $privatekey;
	#echo $publickey;

  $filename = "users.txt";
  $file = fopen($filename, "a");

  if( $file == false ) {
    echo ( "Error in opening file" );
    exit();
  }

  $jsonEntry = array('username' => $_POST['username'], 'password' => $_POST['password'],
                      'publickey' => $publickey, 'privatekey' => $privatekey);
  $jsonEntry = json_encode($jsonEntry);

  #$writeString = $username . ":" . $password . ":" . $publickey . ":" . $privatekey;
  fwrite($file, $jsonEntry);
  fwrite($file, '$$$');

  fclose($file);
  session_destroy();
?>
