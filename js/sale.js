   const imgs = ["img/sale15.jpg", "img/sale20.jpg", "img/sale25.jpg"];

    //  image = document.getElementById("saleimg"),
    button = document.getElementById("button");

button.onclick = function () {
  saleimg.src = imgs[Math.floor(Math.random() * imgs.length)];
};
