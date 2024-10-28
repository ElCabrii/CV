<?php
$template = './views/pages/login.php';
$title = 'Login';
$error = '';
$styles = ['login'];

require './models/userModel.php';



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (login($email, $password)) {
        header('Location: /index.php?page=profile');
        exit;
    } else {
        $error = 'Invalid email or password.';
    }
}