<?php
require_once './config/routes.php';

session_start();

$availableRouteNames = array_keys(AVAILABLE_ROUTES);

if (isset($_SESSION['user']) && isset($_GET['page']) && $_GET['page'] === 'login') {
    header('Location: /index.php?page=profile');
    exit;
}

if (isset($_GET['page']) && in_array($_GET['page'], $availableRouteNames, true)) {
    $controller = AVAILABLE_ROUTES[$_GET['page']];
} else {
    $controller = DEFAULT_ROUTE;
}

require './controllers/' . $controller;
