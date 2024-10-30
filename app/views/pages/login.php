<div class="container">
    <h1>Login</h1>
    <?php if (!empty($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
    <form action="/index.php?page=login" method="POST">
        <div class="form__group field">
            <input type="email" class="form__field" name="email" placeholder="Email" required>
            <label for="email" class="form__label">Email</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" name="password" placeholder="Password" required>
            <label for="password" class="form__label">Password</label>
        </div>
        <button type="submit">Login</button>
    </form>
    <p>Forgot your password ? Reset it <a href="index.php?page=reset">here</a><br>
    If you don't have an account, you can create one <a href="index.php?page=register">here</a>
    </p>
</div>