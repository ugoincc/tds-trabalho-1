document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const title = document.getElementById("title");

  button.addEventListener("click", function () {
    title.textContent = "Bem-vindo ao Exemplo!";
    alert("Você clicou no botão!");
  });
});

// Função para carregar um componente HTML em um elemento
function loadComponent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Carrega os arquivos de layout
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("./src/layout/header.html", "header-placeholder");
  loadComponent("./src/layout/content.html", "content-placeholder");
  loadComponent("./src/layout/footer.html", "footer-placeholder");
});
