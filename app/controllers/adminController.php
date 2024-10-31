<?php
$template = './views/pages/admin.php';
$title = 'Admin';
$styles = ['admin'];


if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
} else if ($_SESSION['user']['role'] !== 'admin') {
    header('Location: /index.php?page=profile');
    exit();
}

require_once('./models/userModel.php');
$users = getAllUsers();

if (isset($_GET['action']) && $_GET['action'] === 'delete') {
    if (!isset($_GET['id'])) {
        $error = 'No user selected.';
        header('Location: /index.php?page=admin');
        exit;
    }    
    $id = $_GET['id'];
    deleteUser($id);
    header('Location: /index.php?page=admin');
    exit;
}

if (isset($_GET['action']) && $_GET['action'] === 'switch') {
    if (!isset($_GET['id'])) {
        $error = 'No user selected.';
        header('Location: /index.php?page=admin');
        exit;
    }    
    $id = $_GET['id'];
    switchRole($id);
    header('Location: /index.php?page=admin');
    exit;
}