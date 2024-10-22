<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
    <button onclick="window.location.href='/cv'">Home</button>
    <div class="menuBox">
        <button id="career-btn">My career</button>
        <div id="career-options" class="dropdown-content">
            <a href="/cv/cv.php">CV</a>
            <a href="/cv/projects.php">Projects</a>
        </div>
    </div>

    <button onclick="window.location.href='/cv/contact.php'">Contact</button>
    <div class="menuBox">
        <button id="profile-btn" onclick="window.location.href='/cv/profile.php'">Profile</button>
        <div id="profile-options" class="dropdown-content">
            <a href="/cv/login.php">Login</a>
        </div>
    </div>
</header>
</body>
</html>