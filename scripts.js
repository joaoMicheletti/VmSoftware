let currentProject = 1;

function showProject(n) {
  const projects = document.getElementsByClassName("project");
  if (n > projects.length) {
    currentProject = 1;
  }
  if (n < 1) {
    currentProject = projects.length;
  }
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  projects[currentProject - 1].style.display = "block";
}

function changeProject(n) {
  showProject(currentProject += n);
}

// Mostrar o primeiro projeto ao carregar a página
showProject(currentProject);
