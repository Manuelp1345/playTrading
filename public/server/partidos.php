<?php

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

require './env.php';


$id = $_GET['q'];
$data = "/api/partidos/?q=$id";

if ($_GET['page']) {
    $page = $_GET['page'];
    $data = "/api/partidos/?q=$id&page=$page";
}

$response = CallAPI("GET", apiUrl . $data);

echo $response;