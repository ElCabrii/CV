<?php
require './models/connections.php';


function login($email, $password) {
    $db = dbConnect();
    $query = $db->prepare('SELECT * FROM users WHERE email = :email');
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

    $query = $db->prepare('SELECT * FROM users WHERE email = :email');
    $query->execute(['email' => $email]);
    if ($query->fetch()) {
        return false;
    }
    
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    $query = $db->prepare('INSERT INTO users (email, password) VALUES (:email, :password)');
    $result = $query->execute([
        'email' => $email,
        'password' => $hashedPassword
    ]);
    
    return $result;
}

function updateProfile($first_name, $last_name) {
    $db = dbConnect();
    $query = $db->prepare('UPDATE users SET first_name = :first_name, last_name = :last_name WHERE email = :email');
    return $query->execute([
        'email' => $_SESSION['user']['email'],
        'first_name' => $first_name,
        'last_name' => $last_name
    ]);
    login($email, $password);
}