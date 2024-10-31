<?php
require './models/connections.php';

function getAllProjects() {
    $db = dbConnect();
    $query = $db->query('SELECT * FROM project');
    $projects = $query->fetchAll();
    return $projects;
}

function createProject($title, $description, $start_date, $end_date, $role_in_project = 'manager') {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            INSERT INTO project (title, description, start_date, end_date) 
            VALUES (:title, :description, :start_date, :end_date)
        ');
        $query->execute([
            'title' => $title,
            'description' => $description,
            'start_date' => $start_date,
            'end_date' => $end_date
        ]);
        
        $project_id = $db->lastInsertId();
        
        $query = $db->prepare('
            INSERT INTO project_user (user_id, project_id, role_in_project) 
            VALUES (:user_id, :project_id, :role_in_project)
        ');
        $query->execute([
            'user_id' => $_SESSION['user']['id'],
            'project_id' => $project_id,
            'role_in_project' => $role_in_project
        ]);
        $db->commit();
        
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}

function getProjectManager($project_id) {
    $db = dbConnect();
    $query = $db->prepare('
        SELECT user.id, user.email, user.first_name, user.last_name
        FROM user
        JOIN project_user ON user.id = project_user.user_id
        WHERE project_user.project_id = :project_id AND project_user.role_in_project = "manager"
    ');
    $query->execute(['project_id' => $project_id]);
    $manager = $query->fetch();
    return $manager;
}

function joinProject($project_id) {
    $db = dbConnect();
    try {
       $query = $db->prepare('
        INSERT INTO project_user (user_id, project_id, role_in_project) 
        VALUES (:user_id, :project_id, :role_in_project)
    ');
    $query->execute([
        'user_id' => $_SESSION['user']['id'],
        'project_id' => $project_id,
        'role_in_project' => 'contributor'
    ]);
    return true;
    } catch (Exception $e) {
        throw $e;
    }
}

function leaveProject($project_id) {
    $db = dbConnect();
    $manager = getProjectManager($project_id);
    $is_manager = $manager['id'] === $_SESSION['user']['id'];
    try{
        $query = $db->prepare('
        DELETE FROM project_user WHERE project_id = :project_id AND user_id = :user_id
    ');
    $query->execute([
        'project_id' => $project_id,
        'user_id' => $_SESSION['user']['id']
    ]);
    }
    catch (Exception $e) {
        throw $e;
    }
    if ($is_manager) {
        try{
          $query = $db->prepare('
            DELETE FROM project WHERE id = :project_id
        ');
        $query->execute([
            'project_id' => $project_id
        ]);
        }
        catch (Exception $e) {
            throw $e;
        }
    }
    return true;
}

function userInProject($project_id) {
    if (!isset($_SESSION['user'])) {
        return '<button onclick="window.location.href = \'/index.php?page=login\'">Login to join</button>';
    }
    $db = dbConnect();
    $query = $db->prepare('
        SELECT role_in_project
        FROM project_user
        WHERE project_id = :project_id AND user_id = :user_id
    ');
    $query->execute([
        'project_id' => $project_id,
        'user_id' => $_SESSION['user']['id']
    ]);
    $role = $query->fetch();
    if ($role) {
        return '<button onclick="leaveProject(' . $project_id . ')">Leave</button>';
    } else {
        return '<button onclick="joinProject(' . $project_id . ')">Join</button>';
    }

}