const availableCars = [
  {
    make: "Porsche",
    modelYear: "911 Turbo S - 2026",
    description: "KM: 3.032 - Chalk",
    imagePath: "./img/2026-911.jpg",
  },
  {
    make: "Audi",
    modelYear: "R8 Coupe - 2019",
    description: "KM: 25.299 - Deep Blue",
    imagePath: "./img/2019-r8-coupe.jpg",
  },
  {
    make: "Aston Martin",
    modelYear: "Vantage - 2025",
    description: "KM: 8.600 - Tanzanite Yellow",
    imagePath: "./img/2025-amVantage.jpg",
  },
  {
    make: "Mercedes-Benz",
    modelYear: "AMG GT - 2024",
    description: "KM: 4.121 - Pristine Red",
    imagePath: "./img/2024-amg-gt.jpg",
  },
];

//Function Declaration
function populateEstoque() {
  const estoqueContainer = document.getElementById("estoqueContainer");

  const carList = availableCars.map((car) => {
    //Componente card para cada carro
    return `
    <div class="col-3">
      <div class="card h-100" style="background-color: #2a2a2a; border-color: #555;">
        <img class="card-img-top" src=${car.imagePath} alt="${car.make}" />
        <div class="card-body">
          <h4 style="color: #c00000;">${car.make}</h4>
          <h6 class="card-subtitle mb-2 text-light">${car.modelYear}</h6>
          <p class="card-text text-light">${car.description}</p>
        </div>
      </div>
    </div>
  `;
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
