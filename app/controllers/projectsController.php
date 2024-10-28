<?php
$template = './views/pages/projects.php';
$title = 'Projects';

if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
}