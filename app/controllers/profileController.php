<?php
$template = './views/pages/profile.php';
$title = 'Profile';
$styles = ['login'];


if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
} 


if ($_SESSION['user']['first_name'] === ''){
    $first_name = 'First Name';
} else {
    $first_name = $_SESSION['user']['first_name'];
}

if ($_SESSION['user']['last_name'] === ''){
    $last_name = 'Last Name';
} else {
    $last_name = $_SESSION['user']['last_name'];
}

require './models/userModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = $_POST['first_name'] ?? '';
    $last_name = $_POST['last_name'] ?? '';

    if (updateProfile($first_name, $last_name)) {
        $error = 'Profile updated successfully!';
    } else {
        $error = 'Profile update failed.';
    }
}

