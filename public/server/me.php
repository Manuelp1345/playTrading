<?php

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

require './env.php';

$id = $_POST['id'];

$response = CallAPI("GET", apiUrl . "/api/usuario/$id/");

echo $response;