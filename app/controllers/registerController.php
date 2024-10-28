<?php
$template = './views/pages/register.php';
$title = 'Register';
$styles = ['login'];

require './models/userModel.php';



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $passwordConfirmation = $_POST['passwordConfirmation'] ?? '';

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($password) && !empty($passwordConfirmation) && $password === $passwordConfirmation) {
        if (register($email, $password)) {
            $error = "Registration successful!";
            header("Location: /index.php?page=login");
            exit;
        } else {
            $error = "Email already exists or registration failed.";
        }
    } else {
        $error = "Invalid email or password.";
    }
}
