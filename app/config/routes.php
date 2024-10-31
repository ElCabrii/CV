<?php
const AVAILABLE_ROUTES = [
    'home' => 'homeController.php',
    'contact' => 'contactController.php',
    'cv' => 'cvController.php',
    'projects' => 'projectsController.php',
    'profile' => 'profileController.php',
    'login' => 'loginController.php',
    'register' => 'registerController.php',
    'privacy' => 'privacypolicyController.php',
    'termsandconditions' => 'termsandconditionsController.php',
    '404' => '404Controller.php',
    'redirect' => 'redirectController.php',
    'admin' => 'adminController.php',
    'reset' => 'resetController.php'
];

const DEFAULT_ROUTE = AVAILABLE_ROUTES['404'];

?>