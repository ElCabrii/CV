
<head>
    <link rel="stylesheet" href="assets/style/login.css">
</head>
<div class="container">
    <h1>Login</h1>
    <form action="authenticate.php" method="post">
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Username" required>
            <label for="Username" class="form__label">Name</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" placeholder="Password" required>
            <label for="Password" class="form__label">Password</label>
        </div>
        <button type="submit">Login</button>
    </form>
    <p>Forgot your password ? Reset it <a href="index.php?page=reset">here</a><br>
    If you don't have an account, you can create one <a href="index.php?page=register">here</a>
    </p>
</div>