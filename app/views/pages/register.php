<div class="container">
    <h1>Register</h1>
    <?php if (!empty($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
    <form action="/index.php?page=register" method="POST">
        <div class="form__group field">
            <input type="email" class="form__field" name="email" placeholder="Email" required>
            <label for="email" class="form__label">Email</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" name="password" placeholder="Password" required>
            <label for="password" class="form__label">Password</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" name="passwordConfirmation" placeholder="Confirm Password" required>
            <label for="passwordConfirmation" class="form__label">Confirm Password</label>
        </div>
        <button type="submit">Register</button>
    </form>
    <p>Already have an account? Login <a href="index.php?page=login">here</a></p>
</div>