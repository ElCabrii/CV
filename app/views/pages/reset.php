<div class="container">
    <h1>Reset your password</h1>
    <?php if (!empty($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
    <form method="POST">
        <div class="form__group field">
            <input type="password" class="form__field" name="password" placeholder="Password" required>
            <label for="password" class="form__label">Password</label>
        </div>
        <div class="form__group field">
            <input type="password" class="form__field" name="passwordConfirmation" placeholder="Confirm Password" required>
            <label for="passwordConfirmation" class="form__label">Confirm Password</label>
        </div>
        <button type="submit">Reset</button>
    </form>
</div>