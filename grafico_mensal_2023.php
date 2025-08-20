<?php
header("Content-Type: application/json");
 
$host = "localhost";
$user = "root";
$password = "";
$database = "alerta_clima_rs";
 
$conn = new mysqli($host, $user, $password, $database);
 
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro na conexão"]);
    exit();
}
 
$sql = "SELECT mes, nivel_medio FROM media_mensal_2023 ORDER BY FIELD(mes,
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')";
$result = $conn->query($sql);
 
$dados = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $dados[] = $row;
    }
}
 
echo json_encode($dados);
$conn->close();
?>
 
 