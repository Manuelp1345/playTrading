<?php

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

require './env.php';

$username = $_POST['username'];
$password = $_POST['password'];

$response = CallAPI(
    "POST",
    apiUrl .
        "/api/usuario/auth",
    '{
        "username":"' . $username . '",
        "password":"' . $password . '"
    }'
);

echo $response;