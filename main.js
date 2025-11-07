const availableCars = [
  {
    make: "Porsche",
    modelYear: "911 Turbo S - 2026",
    description: "description",
    imagePath: "./img/2026-911.jpg",
  },
  {
    make: "Audi",
    modelYear: "R8 Coupe - 2019",
    description: "description",
    imagePath: "./img/2019-r8-coupe.jpg",
  },
  {
    make: "Aston Martin",
    modelYear: "Vantage - 2025",
    description: "description",
    imagePath: "./img/2025-amVantage.jpg",
  },
  {
    make: "Mercedes-Benz",
    modelYear: "AMG GT - 2024",
    description: "description",
    imagePath: "./img/2024-amg-gt.jpg",
  },
];

//Function Declaration
function populateEstoque() {
  const estoqueContainer = document.getElementById("estoqueContainer");

  const carList = availableCars.map((car) => {
    //Componente card para cada carro
    return `
    <div class="card" style="width: 14rem">
    <img class="card-img-top" src=${car.imagePath} alt="Card image cap" />
    <div class="card-body bg-secondary">
    <h4 class=text-white>${car.make}</h4>
    <h6 class="card-subtitle mb-2 text-body-secondary">${car.modelYear}</h6>
    <p class="card-text">${car.description}</p>
    </div>
    </div>`;
  });
  const finalHtml = carList.join("");
  estoqueContainer.innerHTML = finalHtml;
}

//Function Expression
const loadComponent = function (url, elementId, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data;
      }

      if (callback) {
        callback();
      }
    });
};

//Evento de Janela
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("./src/layout/header.html", "header-placeholder");
  loadComponent("./src/layout/content.html", "content-placeholder");
  loadComponent(
    "./src/layout/content.html",
    "content-placeholder",
    populateEstoque
  );
  loadComponent("./src/layout/footer.html", "footer-placeholder");
  loadComponent("./src/components/contactCard.html", "modal-placeholder");
});
