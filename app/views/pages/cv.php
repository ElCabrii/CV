<div class="container">
    <?php if (!empty($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
    <div class="colorpicker">
            <input type="color" id="backgroundpicker" name="picker" value="#373737" />
            <label for="picker">Choose the background color</label>
            <input type="color" id="textpicker" name="picker" value="#ffffff" />
            <label for="picker">Choose the titles color</label>
            <button id='reset-btn'>Reset</button>
        </div>
    <div id="cv">
        <h1><?php echo $_SESSION['user']['first_name'] . ' ' . $_SESSION['user']['last_name'];   ?></h1>
        <section class="experience">
            <h2>Experiences</h2>
            <?php
            foreach ($experiences as $experience) {
                echo '<div class="cv-element">';
                echo '<h3>' . $experience['title'] . '</h3>';
                echo '<p class="card-description">' . $experience['description'] . '</p>';
                echo '<p>' . $experience['start_date'] . ' - ' . $experience['end_date'] . '</p>';
                echo '<button onclick="window.location.href=\'index.php?page=redirect&action=delete&type=experience&id=' . $experience['id'] . '\'">Delete</button>';
                echo '</div>';
            }
            ?>
            <div id='experience-form' class="element-creation">
                <button onclick="closeExperienceForm()" class="close-btn">X</button>
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
                    <input type="hidden" name="type" value="experience">
                    <button type="submit">Create</button>
                </form>
            </div>
            <button onclick="openExperienceForm()">Add an experience</button>
        </section>
        <section class="education">
            <h2>Educations</h2>
            <?php
            foreach ($educations as $education) {
                echo '<div class="cv-element">';
                echo '<h3>' . $education['title'] . '</h3>';
                echo '<p class="card-description">' . $education['description'] . '</p>';
                echo '<p>' . $education['start_date'] . ' - ' . $education['end_date'] . '</p>';
                echo '<button onclick="window.location.href=\'index.php?page=redirect&action=delete&type=experience&id=' . $experience['id'] . '\'">Delete</button>';
                echo '</div>';
            }
            ?>
            <div id='education-form' class="element-creation">
                <button onclick="closeEducationForm()" class="close-btn">X</button>
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
                    <input type="hidden" name="type" value="education">
                    <button type="submit">Create</button>
                </form>
            </div>
            <button onclick="openEducationForm()">Add an education</button>
        </section>
        <section class="skills">
            <h2>Skills</h2>
            <?php
            foreach ($skills as $skill) {
                echo '<div class="cv-element">';
                echo '<p>' . $skill['name'] . '</p>';
                echo '<p>Level: ' . $skill['level'] . '</p>';
                echo '<button onclick="window.location.href=\'index.php?page=redirect&action=delete&type=experience&id=' . $experience['id'] . '\'">Delete</button>';
                echo '</div>';
            }
            ?>
            <div id='skill-form' class="element-creation">
                <button onclick="closeSkillForm()" class="close-btn">X</button>
                <form method="POST">
                    <div class="form__group field">
                        <input type="text" class="form__field" name="name" placeholder="Name" required>
                        <label for="name" class="form__label">Name</label>
                    </div>
                    <div class="form__group field">
                        <input type="number" class="form__field" name="level" placeholder="Level" min="1" max="4" required>
                        <label for="level" class="form__label">Level</label>
                    </div>
                    <input type="hidden" name="type" value="skill">
                    <button type="submit">Create</button>
                </form>
            </div>
            <button onclick="openSkillForm()">Add a skill</button>
        </section>
        <section class="projects">
            <h2>Projects</h2>
            <?php
            foreach ($projects as $project) {
                echo '<div class="cv-element">';
                echo '<p>' . $project['title'] . '</p>';
                echo '</div>';
            }
            ?>
            <button onclick="window.location.href='index.php?page=projects'">See all projects</button>
        </section>
    </div>
</div>
<script>
    colorpicker = document.getElementById('backgroundpicker');
    textpicker = document.getElementById('textpicker');
    reset = document.getElementById('reset-btn');
    cv = document.getElementById('cv');

    colorpicker.addEventListener('input', function() {
    cv.style.backgroundColor = colorpicker.value;
    });

    textpicker.addEventListener('input', function() {
        cv.style.color = textpicker.value;    
    });

    reset.addEventListener('click', function() {
        cv.style.backgroundColor = '#373737';
        cv.style.color = '#ccc';
    });
</script>

