<?php
  session_start();

  $data = array('username' => $_POST['username'], 'password' => $_POST['password']);
  $data = json_encode($data, JSON_FORCE_OBJECT);

  var_dump($data);

  header('x', false, 404);

  session_destroy();

?>
