<header>
    <button onclick="window.location.href='/'">Home</button>
    <button onclick="window.location.href='index.php?page=cv'">CV</button>
    <button onclick="window.location.href='index.php?page=projects'">Projects</button>
    <button onclick="window.location.href='index.php?page=contact'">Contact</button>
    <div id="login">
        <button onclick="window.location.href='index.php?page=login'"><?php 
            if (isset($_SESSION['user'])) {
                if ($_SESSION['user']['first_name'] === null && $_SESSION['user']['last_name'] === null) {
                    echo 'Profile';
                } else {
                  echo $_SESSION['user']['first_name'] . ' ' . $_SESSION['user']['last_name'];  
                }
            } else {
                echo 'Login';
            }
        ?></button>
    </div>
</header>