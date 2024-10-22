<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | CV</title>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>
<header>
    <button onclick="window.location.href='/templates/'">Home</button>
    <div class="menuBox">
        <button id="career-btn">My career</button>
        <div id="career-options" class="dropdown-content">
            <a href="/templates/cv.php">CV</a>
            <a href="/templates/projects.php">Projects</a>
        </div>
    </div>
    <button onclick="window.location.href='/templates/contact.php'">Contact</button>
    <div class="menuBox">
        <button id="profile-btn" >Profile</button>
        <div id="profile-options" class="dropdown-content">
            <a href="/templates/login.php">Login</a>
            <a href="/templates/register.php">Register</a>
        </div>
    </div>
</header>
<div class="container">
    <h1>Login or <a href="/templates/register.php">Register</a></h1>
    <input type="text" placeholder="Username" id="username">
    <input type="password" placeholder="Password" id="password">
</div>
</body>
</html>