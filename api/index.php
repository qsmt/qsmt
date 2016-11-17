<?php
/**
 * Created by PhpStorm.
 * User: UC206612
 * Date: 2016/11/16
 * Time: 14:51
 */
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;
$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});
$app->run();

//C:\phpStudy\PHPb\php.exe composer.phar require slim/slim "^3.0"