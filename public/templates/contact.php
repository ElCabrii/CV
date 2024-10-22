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
    <h1>Contact</h1>
    <button><a onclick="window.location.href='mailto:debure.gabriel@gmail.com'">Send us an email</a></button>
    <button>Get an email with your CV</button>
    <div>
        <p>You can also see our Github public repository <a href="https://github.com/ElCabrii/CV" target="_blank">here</a></p>
    </div>
</div>
</body>
</html>