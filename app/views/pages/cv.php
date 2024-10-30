<div class="container">
    <section class="experience">
        <h2>Experience</h2>
        <?php
        foreach ($experiences as $experience) {
            echo '<div>';
            echo '<h3>' . $experience['title'] . '</h3>';
            echo '<p>' . $experience['description'] . '</p>';
            echo '<p>' . $experience['start_date'] . ' - ' . $experience['end_date'] . '</p>';
            echo '</div>';
        }
        ?>
    <section class="education">
        <h2>Education</h2>
        
    </section>

    <section class="skills">
        
    </section>
    <section class="projects">
        <h2>Projects</h2>
        
    </section>
</div>