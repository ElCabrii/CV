
function openProjectCreation() {
    document.getElementById("project-creation").style.display = "block";
}

function closeProjectCreation() {
    document.getElementById("project-creation").style.display = "none";
}

function joinProject(id){
    window.location.href ="/index.php?page=redirect&action=joinProject&id=" + id;
} 

function leaveProject(id){
    window.location.href ="/index.php?page=redirect&action=leaveProject&id=" + id;
}