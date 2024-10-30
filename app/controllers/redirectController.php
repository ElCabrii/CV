<?php



if (!isset($_GET['action'])) {
    header('Location: /index.php?page=404');
    exit;
}

if ($_GET['action'] === 'logout') {
    session_destroy();
    header('Location: /');
    exit;
}

if ($_GET['action'] === 'joinProject') {
    if (!isset($_SESSION['user'])) {
        header('Location: /index.php?page=login');
        exit;
    } else if (!isset($_GET['id'])) {
        header('Location: /');
        exit;
    } else {
        require './models/projectModel.php';
        if (joinProject($_GET['id'])) {
            header('Location: /index.php?page=projects');
            exit;
        } else {
            header('Location: /index.php?page=404');
        }
    }
}

if ($_GET['action'] === 'leaveProject'){
    if (!isset($_SESSION['user'])) {
        header('Location: /index.php?page=login');
        exit;
    } else if (!isset($_GET['id'])) {
        header('Location: /');
        exit;
    } else {
        require './models/projectModel.php';
        if (leaveProject($_GET['id'])) {
            header('Location: /index.php?page=projects');
            exit;
        } else {
            header('Location: /index.php?page=404');
        }
    }
}