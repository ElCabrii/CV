<?php
$template = './views/pages/cv.php';
$title = 'CV';
$styles = ['form', 'projects-cv'];
$scripts = ['form'];

if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
}

require './models/cvModel.php';

$experiences = getAllExperiences($_SESSION['user']['id']);
$educations = getAllEducations($_SESSION['user']['id']);
$skills = getAllSkills($_SESSION['user']['id']);
$projects = getUserProjects($_SESSION['user']['id']);

if (!isset($_SESSION['user'])) {
    header('Location: /index.php?page=login');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['type'])) {
        if ($_POST['type'] === 'experience') {
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $start_date = $_POST['start_date'] ?? '';
            $end_date = $_POST['end_date'] ?? '';
            $user_id = $_SESSION['user']['id'];

            try {
                createExperience($title, $description, $start_date, $end_date, $user_id);
                $error = "Experience created successfully!";
                $experiences = getAllExperiences($_SESSION['user']['id']);
            } catch (PDOException $e) {
                if ($e->getCode() == 23000) {
                    $error = "Error: An experience with this title already exists.";
                } else {
                    $error = "Error: " . $e->getMessage();
                }
            }
        } else if ($_POST['type'] === 'education') {
            $title = $_POST['title'] ?? '';
            $description = $_POST['description'] ?? '';
            $start_date = $_POST['start_date'] ?? '';
            $end_date = $_POST['end_date'] ?? '';
            $user_id = $_SESSION['user']['id'];

            try {
                createEducation($title, $description, $start_date, $end_date, $user_id);
                $error = "Education created successfully!";
                $educations = getAllEducations($_SESSION['user']['id']);
            } catch (PDOException $e) {
                if ($e->getCode() == 23000) {
                    $error = "Error: An education with this title already exists.";
                } else {
                    $error = "Error: " . $e->getMessage();
                }
            }
        } else if ($_POST['type'] === 'skill') {
            $name = $_POST['name'] ?? '';
            $levelnum = $_POST['level'] ?? '';
            switch ($levelnum) {
                case '1':
                    $level = 'Beginner';
                    break;
                case '2':
                    $level = 'Intermediate';
                    break;
                case '3':
                    $level = 'Advanced';
                    break;
                default:
                    $level = 'Beginner';
                    break;
                }
            $user_id = $_SESSION['user']['id'];

            try {
                createSkill($name, $level, $user_id);
                $error = "Skill created successfully!";
                $skills = getAllSkills($_SESSION['user']['id']);
            } catch (PDOException $e) {
                if ($e->getCode() == 23000) {
                    $error = "Error: A skill with this name already exists.";
                } else {
                    $error = "Error: " . $e->getMessage();
                }
            }
        }
    }
}
