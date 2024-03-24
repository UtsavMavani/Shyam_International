const products = [
  {
    type: "vegitables",
    name: "Mix vegetables",
    imageSrc: "assets/img/vegitables/mix-vegetables.jpg",
  },
  {
    type: "vegitables",
    name: "Cabbage",
    imageSrc: "assets/img/vegitables/cabbage.jpg",
  },
  {
    type: "vegitables",
    name: "Green Chilly",
    imageSrc: "assets/img/vegitables/green-chilly.jpg",
  },
  {
    type: "vegitables",
    name: "Potatoes",
    imageSrc: "assets/img/vegitables/potatoes.jpg",
  },
  {
    type: "vegitables",
    name: "Tomato",
    imageSrc: "assets/img/vegitables/tomato.jpg",
  },
  {
    type: "vegitables",
    name: "Onion",
    imageSrc: "assets/img/vegitables/onion.jpg",
  },
  {
    type: "vegitables",
    name: "Lemon",
    imageSrc: "assets/img/vegitables/lemon.jpg",
  },
  {
    type: "vegitables",
    name: "Cucumber",
    imageSrc: "assets/img/vegitables/cucumber.jpg",
  },
  {
    type: "spices",
    name: "garlic",
    imageSrc: "assets/img/spices/garlic.jpg",
  },
  {
    type: "spices",
    name: "Red Chilli",
    imageSrc: "assets/img/spices/red-chilli.jpg",
  },
  {
    type: "spices",
    name: "Turmaric",
    imageSrc: "assets/img/spices/turmaric.jpg",
  },
  {
    type: "spices",
    name: "Clove",
    imageSrc: "assets/img/spices/clove.jpg",
  },
  {
    type: "spices",
    name: "Cinnamon",
    imageSrc: "assets/img/spices/cinnamon.jpg",
  },
  {
    type: "spices",
    name: "Mint pudina",
    imageSrc: "assets/img/spices/mint-pudina.jpg",
  },
  {
    type: "spices",
    name: "Jaggery",
    imageSrc: "assets/img/spices/jaggery.jpg",
  },
  {
    type: "pulses",
    name: "Chickpeas",
    imageSrc: "assets/img/pulses/chickpeas.jpg",
  },
  {
    type: "pulses",
    name: "Moog beens",
    imageSrc: "assets/img/pulses/moog-beens.jpg",
  },
  {
    type: "pulses",
    name: "Kidney beans",
    imageSrc: "assets/img/pulses/kidney-beans.jpg",
  },
  {
    type: "pulses",
    name: "Yellow split peas",
    imageSrc: "assets/img/pulses/yellow-split-peas.jpg",
  },
  {
    type: "pulses",
    name: "Green split peas",
    imageSrc: "assets/img/pulses/green-split-peas.jpg",
  },
  {
    type: "grains",
    name: "Wheat",
    imageSrc: "assets/img/grains/wheat.jpg",
  },
  {
    type: "grains",
    name: "Basmati rice",
    imageSrc: "assets/img/grains/basmati-rice.jpg",
  },
  {
    type: "grains",
    name: "Peanut",
    imageSrc: "assets/img/grains/peanut.jpg",
  },
  {
    type: "fruits",
    name: "Apple",
    imageSrc: "assets/img/fruits/apple.jpg",
  },
  {
    type: "fruits",
    name: "Banana",
    imageSrc: "assets/img/fruits/banana.jpg",
  },
  {
    type: "fruits",
    name: "Mongo",
    imageSrc: "assets/img/fruits/mongo.jpg",
  },
  {
    type: "fruits",
    name: "Orange",
    imageSrc: "assets/img/fruits/orange.jpg",
  },
  {
    type: "fruits",
    name: "Kiwi",
    imageSrc: "assets/img/fruits/kiwi.jpg",
  },
  {
    type: "fruits",
    name: "Promegranate",
    imageSrc: "assets/img/fruits/promegranate.jpg",
  },
  {
    type: "dryfruits",
    name: "Almond",
    imageSrc: "assets/img/dryfruits/almond.jpg",
  },
  {
    type: "dryfruits",
    name: "Cashew nuts",
    imageSrc: "assets/img/dryfruits/cashew-nuts.jpg",
  },
  {
    type: "dryfruits",
    name: "Black raisins",
    imageSrc: "assets/img/dryfruits/black-raisins.jpg",
  },
  {
    type: "dryfruits",
    name: "Yellow raisins",
    imageSrc: "assets/img/dryfruits/yellow-raisins.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const portfolioContainer = document.getElementById("products-container");

  products.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = `col-lg-4 col-md-6 product-item isotope-item filter-${item.type}`;
    portfolioItem.innerHTML = `
        <img src="${item.imageSrc}" class="product-img" alt="Product Image">
        <div class="product-info">
          <h4>${item.name}</h4>
        </div>
      `;
    portfolioContainer.appendChild(portfolioItem);
  });
});
