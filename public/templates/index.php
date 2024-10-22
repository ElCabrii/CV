<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
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
    <h1>CV Generator</h1>
    <div>
        <p>Welcome to CV Generator where you can generate a CV,
        register your personal and professional projects</p>
    </div>
    <div>
        <button onclick="window.location.href='/templates/cv.php'">Generate my CV</button>
    <button onclick="window.location.href='/templates/projects.php'">Register my projects</button>
    </div>
    <div>
        <p>If you need to contact us, click <a href="/templates/contact.php">here</a></p>
    </div>
</div>
</body>
</html>