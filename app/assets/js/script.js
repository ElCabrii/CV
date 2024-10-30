document.addEventListener('DOMContentLoaded', function() {
    if (document.body.scrollHeight <= window.innerHeight) {
        document.getElementById('footer').style.position = 'absolute';
    } else {
        document.getElementById('footer').style.position = 'relative';
    }
});

document.getElementById('license').addEventListener('click', function() {
    window.open('https://github.com/ElCabrii/CV/blob/main/LICENSE', '_blank');
});