var firebaseConfig = {
  apiKey: "AIzaSyABKjy-Ycbh1nS-bJq7FYyTSEgQO1gGVP8",
  authDomain: "gasolineras-e71ee.firebaseapp.com",
  databaseURL: "https://gasolineras-e71ee.firebaseio.com",
  projectId: "gasolineras-e71ee",
  storageBucket: "",
  messagingSenderId: "294836743290",
  appId: "1:294836743290:web:45ffbdbaca96da99"
};
firebase.initializeApp(firebaseConfig);

var txtTotalLiters = document.getElementById("totalLiters");
var txtTotalPrice = document.getElementById("totalPrice");
var txtPricePerLiter = document.getElementById("pricePerLiter");

var pricePerLiter = 19.45;
var sold = 0;
var liters = 0;
var price = 0;

var interval = null;

window.addEventListener("load", (event) => {
  txtPricePerLiter.value = pricePerLiter;
  txtTotalLiters.value = liters;
  txtTotalPrice.value = price;
});

function startPouring() {
  pour();
  interval = setInterval(() => {
    pour();
  }, 1000);
}

function pour() {
  sold += Math.random();
  liters = sold.toFixed(2);
  price = '$' + (sold * pricePerLiter).toFixed(2);
  setData();
}

function stopPouring() {
  if (interval) {
    clearInterval(interval);
  }
}

function restartPouring() {
  if (interval) {
    clearInterval(interval);
  }
  sold = 0;
  liters = 0;
  price = 0;
  setData();
}

function changePrice() {
  pricePerLiter = txtPricePerLiter.value;
}

function stopAndRestart() {
  stopPouring();
  restartPouring();
}

function setData() {
  txtTotalLiters.value = liters;
  txtTotalPrice.value = price;

  var obj = {
    precioDelLitro: price,
    despachado: liters
  }
  var updates = {};
  updates['/gasolinera1/bomba1'] = obj;
  return firebase.database().ref().update(updates);
}