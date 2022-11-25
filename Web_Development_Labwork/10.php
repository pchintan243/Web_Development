<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$connect = mysqli_connect("localhost", "root", "", "test");
$sql = "SELECT * FROM student";
$result = $connect->query($sql);
if($result->num_rows > 0){
$jeson_array = array();
while ($row = mysqli_fetch_assoc($result)) {
$jeson_array[] = $row;
}
http_response_code(200);
$json_response = json_encode($jeson_array);
echo $json_response;
}
else{
http_response_code(404);
echo json_encode(
array("message" => "No item found.")
);
}
?>