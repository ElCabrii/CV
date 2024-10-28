<?php
$template = './views/pages/cv.php';
$title = 'CV';

if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
}