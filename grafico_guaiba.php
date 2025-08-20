<?php
// Define o tipo de conteúdo como JSON
header("Content-Type: application/json");
 
// Dados de conexão com o banco
$host = "localhost";
$user = "root";
$password = "";
$database = "alerta_clima_rs";
 
// Cria a conexão
$conn = new mysqli($host, $user, $password, $database);
 
// Verifica se houve erro
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro na conexão com o banco de dados"]);
    exit();
}
 
// Consulta os dados da tabela
$sql = "SELECT ano, nivel_medio FROM media_anual_nivel_guaiba ORDER BY ano";
$result = $conn->query($sql);
 
// Prepara array de resposta
$dados = [];
 
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $dados[] = $row;
    }
}
 
// Retorna como JSON
echo json_encode($dados);
 
// Fecha conexão
$conn->close();
?>