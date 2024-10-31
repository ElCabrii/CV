<?php
require './models/connections.php';


function login($email, $password) {
    $db = dbConnect();
    $query = $db->prepare('SELECT * FROM user WHERE email = :email');
    $query->execute(['email' => $email]);
    $user = $query->fetch();
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user;
        return true;
    } else {
        return false;
    }
}

function register($email, $password) {
    $db = dbConnect();
    
    if (empty($email) || empty($password)) {
        return false;
    }

    $query = $db->prepare('SELECT * FROM user WHERE email = :email');
    $query->execute(['email' => $email]);
    if ($query->fetch()) {
        return false;
    }
    
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $query = $db->prepare('INSERT INTO user (email, password, role) VALUES (:email, :password, :role)');
    $result = $query->execute([
        'email' => $email,
        'password' => $hashedPassword,
        'role' => 'user'
    ]);
    
    return $result;
}

function updateProfile($first_name, $last_name) {
    $db = dbConnect();
    $query = $db->prepare('UPDATE user SET first_name = :first_name, last_name = :last_name WHERE email = :email');
    $query->execute([
        'email' => $_SESSION['user']['email'],
        'first_name' => $first_name,
        'last_name' => $last_name
    ]);
    $query = $db->prepare('SELECT * FROM user WHERE email = :email');
    $query->execute(['email' => $_SESSION['user']['email']]);
    $user = $query->fetch();
    $_SESSION['user'] = $user;
    return true;
}

function getUser($id) {
    $db = dbConnect();
    $query = $db->prepare('SELECT * FROM user WHERE id = :id');
    $query->execute(['id' => $id]);
    $user = $query->fetch();
    return $user;
}

function getAllUsers() {
    $db = dbConnect();
    $query = $db->query('SELECT * FROM user');
    $users = $query->fetchAll();
    return $users;
}

function deleteUser($id) {
    $db = dbConnect();
    $query = $db->prepare('DELETE FROM user WHERE id = :id');
    $query->execute(['id' => $id]);
    return true;
}

function getRoleBtn($id) {
    $user = getUser($id);
    if ($user['role'] === 'user') {
        return '<button onclick="window.location.href=\'index.php?page=admin&action=switch&id=' . $id . '\'">Switch to admin</button>';
    } else {
        return '<button onclick="window.location.href=\'index.php?page=admin&action=switch&id=' . $id . '\'">Switch to user</button>';
    }
}

function switchRole($id) {
    $db = dbConnect();
    $user = getUser($id);
    if ($user['role'] === 'user') {
        $role = 'admin';
    } else {
        $role = 'user';
    }
    try {
        $query = $db->prepare('UPDATE user SET role = :role WHERE id = :id');
        $query->execute([
            'role' => $role,
            'id' => $id
        ]);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    $user = getUser($id);
    $_SESSION['user'] = $user;
    return true;
}

function resetPassword($password) {
    $db = dbConnect();
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $query = $db->prepare('UPDATE user SET password = :password WHERE id = :id');
    $query->execute([
        'password' => $hashedPassword,
        'id' => $_SESSION['user']['id']
    ]);
    return true;
}