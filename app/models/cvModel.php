<?php

require './models/connections.php';

function getAllExperiences($id){
    $db = dbConnect();
    try {
        $query = $db->prepare('
            SELECT id, title, description, start_date, end_date
            FROM experience
            WHERE user_id = :id
        ');
        $query->execute(['id' => $id]);
        $experiences = $query->fetchAll();
        return $experiences;
    } catch (Exception $e) {
        throw $e;
    }
}

function getAllEducations($id){
    $db = dbConnect();
    try {
        $query = $db->prepare('
            SELECT id, title, description, start_date, end_date
            FROM education
            WHERE user_id = :id
        ');
        $query->execute(['id' => $id]);
        $educations = $query->fetchAll();
        return $educations;
    } catch (Exception $e) {
        throw $e;
    }
}

function getAllSkills($id){
    $db = dbConnect();
    try {
        $query = $db->prepare('
            SELECT id, name, level
            FROM skill
            WHERE user_id = :id
        ');
        $query->execute(['id' => $id]);
        $skills = $query->fetchAll();
        return $skills;
    } catch (Exception $e) {
        throw $e;
    }
}

function getUserProjects($id){
    $db = dbConnect();
    try {
        $query = $db->prepare('
            SELECT project.id, project.title, project.description, project.start_date, project.end_date, project_user.role_in_project
            FROM project
            JOIN project_user ON project.id = project_user.project_id
            WHERE project_user.user_id = :id
        ');
        $query->execute(['id' => $id]);
        $projects = $query->fetchAll();
        return $projects;
    } catch (Exception $e) {
        throw $e;
    }
}

function createExperience($title, $description, $start_date, $end_date, $id) {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            INSERT INTO experience (title, description, start_date, end_date, user_id) 
            VALUES (:title, :description, :start_date, :end_date, :id)
        ');
        $query->execute([
            'title' => $title,
            'description' => $description,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'id' => $id
        ]);
        $db->commit();
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}

function createEducation($title, $description, $start_date, $end_date, $id) {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            INSERT INTO education (title, description, start_date, end_date, user_id) 
            VALUES (:title, :description, :start_date, :end_date, :id)
        ');
        $query->execute([
            'title' => $title,
            'description' => $description,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'id' => $id
        ]);
        $db->commit();
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}

function createSkill($name, $level, $id) {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            INSERT INTO skill (name, level, user_id) 
            VALUES (:name, :level, :id)
        ');
        $query->execute([
            'name' => $name,
            'level' => $level,
            'id' => $id
        ]);
        $db->commit();
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}

function deleteExperience($id) {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            DELETE FROM experience
            WHERE id = :id
        ');
        $query->execute(['id' => $id]);
        $db->commit();
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}

function deleteEducation($id) {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            DELETE FROM education
            WHERE id = :id
        ');
        $query->execute(['id' => $id]);
        $db->commit();
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}

function deleteSkill($id) {
    $db = dbConnect();
    $db->beginTransaction();
    try {
        $query = $db->prepare('
            DELETE FROM skill
            WHERE id = :id
        ');
        $query->execute(['id' => $id]);
        $db->commit();
        return true;
    } catch (Exception $e) {
        $db->rollBack();
        throw $e;
    }
}