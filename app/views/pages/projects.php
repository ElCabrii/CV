<div class="container">
    <h1 id="title">Projects</h1>
    <?php if (!empty($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
    <div class="card-container">
       <?php
    foreach ($projects as $project) {
        echo '<div class="card">';
        echo '<h3>' . $project['title'] . '</h3>';
        echo '<p class="card-description">' . $project['description'] . '</p>';
        echo '<p>Manager :' . getProjectManager($project['id'])['first_name'] . ' ' . getProjectManager($project['id'])['last_name'] . '</p>';
        echo '<p>' . $project['start_date'] . ' - ' . $project['end_date'] . '</p>';
        echo userInProject($project['id']);
        echo '</div>';
    }
    ?>  
    </div>
    <div class="element-creation" id="project-form">
        <button onclick=closeProjectForm() id="close-btn">X</button>
        <form method="POST">
            <div class="form__group field">
                <input type="text" class="form__field" name="title" placeholder="Title" required>
                <label for="title" class="form__label">Title</label>
            </div>
            <div id="form-description">
                <label for="description">Description</label>
                <textarea name="description" placeholder="Enter a description (max. 300 char)" maxlength="300" required></textarea>
            </div>
            <div id="form-date">
                <div class="form__group field">
                <input type="date" class="form__field" name="start_date" required>
                <label for="start_date" class="form__label">Start Date</label>
            </div>
            <div class="form__group field">
                <input type="date" class="form__field" name="end_date" required>
                <label for="end_date" class="form__label">End Date</label>
            </div>
            </div>
            <button type="submit">Create</button>  
    </div>
    <button onclick=openProjectForm() class="project-btn">Add a project</button>
</div>
