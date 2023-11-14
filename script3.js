const servingSelect3 = document.querySelector("#servingselect3");

servingSelect3.addEventListener("change", () => {
  const servingFactoor = servingSelect3.value / 6;
  document.querySelector("#ingr-banana").innerHTML = 3 * servingFactoor;
  document.querySelector("#ingr-butter").innerHTML = 0.3 * servingFactoor;
  document.querySelector("#ingr-sugar").innerHTML = 0.5 * servingFactoor;
  document.querySelector("#ingr-eggs").innerHTML = 1 * servingFactoor;
  document.querySelector("#ingr-vanilla").innerHTML = 1 * servingFactoor;
  document.querySelector("#ingr-bakingsoda").innerHTML = 1 * servingFactoor;
  document.querySelector("#ingr-flour").innerHTML = 1.5 * servingFactoor;
  document.querySelector("#ingr-choclatechip").innerHTML = 0.5 * servingFactoor;
});
