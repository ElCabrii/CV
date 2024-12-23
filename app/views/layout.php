<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?> | CV</title>
    <link rel="stylesheet" href="./assets/style/style.css">
    <?php if (isset($styles)): ?>
        <?php foreach ($styles as $style): ?>
            <link rel="stylesheet" href="./assets/style/<?php echo $style; ?>.css">
        <?php endforeach; ?>
    <?php endif; ?> 
    <script src="./assets/js/script.js" defer></script>
    <?php if (isset($scripts)): ?>
        <?php foreach ($scripts as $script): ?>
            <script src="./assets/js/<?php echo $script; ?>.js"></script>
        <?php endforeach; ?>
    <?php endif; ?>
</head>
<body>
    <?php require './views/partials/_header.php'; ?>
    <?php require($template); ?>
    <?php require './views/partials/_footer.php'; ?>
</body>
</html>
