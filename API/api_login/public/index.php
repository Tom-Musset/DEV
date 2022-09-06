<?php

use App\Models\DB;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Selective\BasePath\BasePathMiddleware;
use Slim\Factory\AppFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();
$app->addBodyParsingMiddleware();

$app->addRoutingMiddleware();
$app->add(new BasePathMiddleware($app));
$app->addErrorMiddleware(true, true, true);

$app->get('/', function (Request $request, Response $response) {
   $response->getBody()->write('Hello World!');
   return $response;
});

$app->get('/user/all', function (Request $request, Response $response) {
    $sql = "SELECT * FROM user";
   
    try {
      $db = new Db();
      $conn = $db->connect();
      $stmt = $conn->query($sql);
      $users = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
     
      $response->getBody()->write(json_encode($users));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
   });

$app->post('/user/add', function (Request $request, Response $response, array $args) {
 $data = $request->getParsedBody();
 $nom = $data["nom"];
 $pwd = $data["pwd"];
 $email = $data["email"];
 $prenom = $data["prenom"];

 $sql = "INSERT INTO user (nom,email,prenom,pwd) VALUES (:nom, :email, :prenom, :pwd)";

 try {
   $db = new Db();
   $conn = $db->connect();
  
   $stmt = $conn->prepare($sql);
   $stmt->bindParam(':nom', $nom);
   $stmt->bindParam(':email', $email);
   $stmt->bindParam(':prenom', $prenom);
   $stmt->bindParam(':pwd', $pwd);
   $result = $stmt->execute();

   $db = null;
   $response->getBody()->write(json_encode($result));
   return $response
     ->withHeader('content-type', 'application/json')
     ->withStatus(200);
 } catch (PDOException $e) {
   $error = array(
    "message" => $e->getMessage()
   );
   $response->getBody()->write(json_encode($error));
   return $response
     ->withHeader('content-type', 'application/json')
     ->withStatus(500);
 }
});

$app->put(
    '/user/update/{id}',
    function (Request $request, Response $response, array $args) 
{
 $id = $request->getAttribute('id');
 $data = $request->getParsedBody();
 $nom = $data["nom"];
 $pwd = $data["pwd"];
 $email = $data["email"];
 $prenom = $data["prenom"];

 $sql = "UPDATE user SET
           nom = :nom,
           email = :email,
           prenom = :prenom,
           pwd = :pwd
 WHERE id = $id";

 try {
   $db = new Db();
   $conn = $db->connect();
  
   $stmt = $conn->prepare($sql);
   $stmt->bindParam(':nom', $nom);
   $stmt->bindParam(':email', $email);
   $stmt->bindParam(':prenom', $prenom);
   $stmt->bindParam(':pwd', $pwd);

   $result = $stmt->execute();

   $db = null;
   echo "Update successful! ";
   $response->getBody()->write(json_encode($result));
   return $response
     ->withHeader('content-type', 'application/json')
     ->withStatus(200);
 } catch (PDOException $e) {
   $error = array(
     "message" => $e->getMessage()
   );

   $response->getBody()->write(json_encode($error));
   return $response
     ->withHeader('content-type', 'application/json')
     ->withStatus(500);
 }
});

$app->delete('/user/delete/{id}', function (Request $request, Response $response, array $args) {
    $id = $args["id"];
   
    $sql = "DELETE FROM user WHERE id = $id";
   
    try {
      $db = new Db();
      $conn = $db->connect();
     
      $stmt = $conn->prepare($sql);
      $result = $stmt->execute();
   
      $db = null;
      $response->getBody()->write(json_encode($result));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
   });


$app->run();