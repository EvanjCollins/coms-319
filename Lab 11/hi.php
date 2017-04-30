<?php

$offset = $argv[0]; // beware, no input validation!
$offset = mysql_real_escape_string($offset);
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 OFFSET $offset;";
$result = pg_query($conn, $query);

?>
