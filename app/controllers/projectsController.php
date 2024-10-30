<?php
$template = './views/pages/projects.php';
$title = 'Projects';
$styles = ['form', 'projects'];
$scripts = ['projects'];

require './models/projectModel.php';

$projects = getAllProjects();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? '';
    $description = $_POST['description'] ?? '';
    $start_date = $_POST['start_date'] ?? '';
    $end_date = $_POST['end_date'] ?? '';

    try {
        createProject($title, $description, $start_date, $end_date);
        $error = "Project created successfully!";
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            $error = "Error: A project with this title already exists.";
        } else {
            $error = "Error: " . $e->getMessage();
        }
    }
}