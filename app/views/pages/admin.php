<div class="container">
    <h1>Admin</h1>
    <div>
        <p>Welcome to the admin page</p>
    </div>
    <?php if (!empty($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
    <div id="users-list">
        <h2>Users list</h2>
        <table id="user-table">
            <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            <?php foreach ($users as $user): ?>
                <tr>
                    <td><?php echo $user['email']; ?></td>
                    <td><?php echo $user['role']; ?></td>
                    <td>
                        <?php echo getRoleBtn($user['id']) ?>
                        <button onclick="window.location.href='index.php?page=admin&action=delete&id=<?php echo $user['id']; ?>'">Delete</button>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
</div>