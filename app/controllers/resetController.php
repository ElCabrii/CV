<?php
$template = './views/pages/reset.php';
$title = 'Reset Password';
$styles = ['form'];

if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['passwordConfirmation'] ?? '';

    if ($password === $confirm_password) {
        require './models/userModel.php';
        if (resetPassword($password)) {
            header('Location: /index.php?page=profile');
        } else {
            $error = 'Password reset failed.';
        }
    } else {
        $error = 'Passwords do not match.';
    }   
}