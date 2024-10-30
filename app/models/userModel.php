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