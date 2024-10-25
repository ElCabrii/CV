<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>MVC</title>
    <link rel="stylesheet" href="./assets/style/style.css">
</head>
<body>
<main>
    <?php require './views/partials/_header.php'; ?>
    <?php require($template); ?>
    <?php require './views/partials/_footer.php'; ?>
</main>
</body>
</html>
