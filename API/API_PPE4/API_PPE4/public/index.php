<?php 
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;


require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../config/db.php';
$app = AppFactory::create();

$app->addErrorMiddleware(true,true,true);

$app->get('/', function (Request $request, Response $response) {
	$response->getBody()->write('hello, world!');
	return $response ;
});

require __DIR__ . '/../routes/table.php';

$app->run();