<?php



if (!isset($_GET['action']) || in_array($_GET['action'], ['logout', 'joinProject', 'leaveProject', 'delete'], true) === false) {
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

if ($_GET['action'] === 'delete'){
    if (!isset($_SESSION['user'])) {
        header('Location: /index.php?page=login');
        exit;
    } else if (!isset($_GET['type']) || !isset($_GET['id'])) {
        header('Location: /');
        exit;
    } else {
        require './models/cvModel.php';
        if ($_GET['type'] === 'experience') {
            if (deleteExperience($_GET['id'])) {
                header('Location: /index.php?page=cv');
                exit;
            } else {
                header('Location: /index.php?page=404');
            }
        } else if ($_GET['type'] === 'education') {
            if (deleteEducation($_GET['id'])) {
                header('Location: /index.php?page=cv');
                exit;
            } else {
                header('Location: /index.php?page=404');
            }
        } else if ($_GET['type'] === 'skill') {
            if (deleteSkill($_GET['id'])) {
                header('Location: /index.php?page=cv');
                exit;
            } else {
                header('Location: /index.php?page=404');
            }
        } else {
            header('Location: /index.php?page=404');
        }
    }
}