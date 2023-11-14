const servingSelect = document.querySelector("#servingselect");

servingSelect.addEventListener("change", () => {
  const servingFactor = servingSelect.value / 2;
  document.querySelector("#ingr-eggplant").innerHTML = 0.5 * servingFactor;
  document.querySelector("#ingr-tomatoes").innerHTML = 1.5 * servingFactor;
  document.querySelector("#ingr-yellowsquash").innerHTML = 0.5 * servingFactor;
  document.querySelector("#ingr-zucchini").innerHTML = 0.5 * servingFactor;
  document.querySelector("#ingr-oliveoil").innerHTML = 0.5 * servingFactor;
  document.querySelector("#ingr-onion").innerHTML = 0.25 * servingFactor;
  document.querySelector("#ingr-garlic").innerHTML = 1 * servingFactor;
  document.querySelector("#ingr-redpepper").innerHTML = 0.25 * servingFactor;
  document.querySelector("#ingr-yellowpepper").innerHTML = 0.25 * servingFactor;
  document.querySelector("#ingr-cantomatoes").innerHTML = 7 * servingFactor;
  document.querySelector("#ingr-basil").innerHTML = 0.5 * servingFactor;
});
