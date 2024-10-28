<div class="container">
    <h1>Profile</h1>
    <div>
        <p>Welcome to your profile page</p>
    </div>
    <div id="info">
        <form method="POST">
            Update your personal informations:
            <div class="form__group field">
                <input type="text" class="form__field" name="first_name" placeholder="First Name" required>
                <label for="first_name" class="form__label"><?php echo $first_name ?></label>
            </div>
            <div class="form__group field">
                <input type="text" class="form__field" name="last_name" placeholder="Last Name" required>
                <label for="last_name" class="form__label"><?php echo $last_name ?></label>
            </div>
            <button type="submit">Update</button>
        </form>
    </div>
    <div>
        <p>If you want to reset your password, click <a href="index.php?page=reset">here</a></p>
    </div>
    <div>
        <p>If you want to logout, click <a href="index.php?page=logout">here</a></p>
    </div>
</div>