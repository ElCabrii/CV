<header>
    <button onclick="window.location.href='/'">Home</button>
    <div class="menuBox">
        <button id="career-btn">My career</button>
        <div id="career-options" class="dropdown-content">
            <a href="index.php?page=cv">CV</a>
            <a href="index.php?page=projects">Projects</a>
        </div>
    </div>
    <button onclick="window.location.href='index.php?page=contact'">Contact</button>
    <div id="login">
        <button onclick="window.location.href='index.php?page=login'"><?php 
            if (isset($_SESSION['user'])) {
                echo 'Profile';
            } else {
                echo 'Login';
            }
        ?></button>
    </div>
</header>