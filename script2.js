const SelectnServe2 = document.querySelector("#SelectnServe2");

SelectnServe2.addEventListener("change", () => {
  const Factor = SelectnServe2.value / 2;
  document.querySelector("#ingr-ghee").innerHTML = 1 * Factor;
  document.querySelector("#ingr-chickenbreast").innerHTML = 1.5 * Factor;
  document.querySelector("#ingr-onnion").innerHTML = 1 * Factor;
  document.querySelector("#ingr-jalapeno").innerHTML = 1 * Factor;
  document.querySelector("#ingr-gingers").innerHTML = 3 * Factor;
  document.querySelector("#ingr-masala").innerHTML = 2 * Factor;
  document.querySelector("#ingr-cumins").innerHTML = 1 * Factor;
  document.querySelector("#ingr-turmeris").innerHTML = 1 * Factor;
  document.querySelector("#ingr-salts").innerHTML = 1.5 * Factor;
  document.querySelector("#ingr-garlics").innerHTML = 1 * Factor;
  document.querySelector("#ingr-tomatoes").innerHTML = 2 * Factor;
  document.querySelector("#ingr-raisins").innerHTML = 0.5 * Factor;
  document.querySelector("#ingr-basmatirice").innerHTML = 1 * Factor;
  document.querySelector("#ingr-chick").innerHTML = 0.25 * Factor;
  document.querySelector("#ingr-cleaves").innerHTML = 0.25 * Factor;
  document.querySelector("#ingr-almonds").innerHTML = 0.25 * Factor;
  document.querySelector("#ingr-lemon").innerHTML = 1 * Factor;
});
