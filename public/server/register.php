<?php

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

require './env.php';

$username = $_POST['username'];
$lasName = $_POST['lasName'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$password = $_POST['password'];

$response = CallAPI(
    "POST",
    apiUrl . "/api/usuario/crear",
    '{
        "email":"' . $username . '",
        "apellido":"' . $lasName . '",
        "name":"' . $name . '",
        "telefono":"' . $tel . '",
        "is_premium":' . true . ',

        "password":"' . $password . '"
    }'
);

echo $response;