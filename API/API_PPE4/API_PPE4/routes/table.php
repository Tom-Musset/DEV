<?php 
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->get('/{table}/{id}', function (Request $request, Response $response, array $args){
	$table = $args['table'];
	$id = $args['id'];

	$sql = "SELECT * FROM $table WHERE id = $id";

	try{
		$db = new DB();
		$conn = $db->connect();

		$stmt = $conn->query($sql);
		$table = $stmt->fetch(PDO::FETCH_OBJ);

		$db = null;
		$response->getBody()->write(json_encode($table));
		return $response
			->withHeader('content-type','application/json')
			->withStatus(200);
	} catch (PDOException $e) {
		$error = array(
			"message" => $e->getMessage()
		);

		$response->getBody()->write(json_encode($error));
		return $response 
			->withHeader('content-type','application/json')
			->withStatus(501);
	}
});
 ?>