console.log("script running!");

const totaldisplay = document.querySelector("#totaldisplay")
const ordernow = document.querySelector("#ordernow")

const buttonaddtocart1 = document.querySelector("#buttonaddtocart1");
const bookprice1 = 19.99
console.log(buttonaddtocart1);

const buttonaddtocart2 = document.querySelector("#buttonaddtocart2");
const bookprice2 = 19.99
console.log(buttonaddtocart2);

const buttonaddtocart3 = document.querySelector("#buttonaddtocart3");
const bookprice3 = 19.99
console.log(buttonaddtocart3);

const buttonaddtocart4 = document.querySelector("#buttonaddtocart4");
const bookprice4 = 19.99
console.log(buttonaddtocart4);

let bookamount1 = 0
let bookamount2 = 0
let bookamount3 = 0
let bookamount4 = 0
let total= 0
let total1=0
let total2=0
let total3=0
let total4=0

buttonaddtocart1.addEventListener("click", (e) =>{
  console.log("Buttonaddtocart1 is pressed!");
  bookamount1 = parseInt(document.querySelector("#bookamount1").value);
  console.log(bookamount1);
  total1=parseFloat((bookprice1*bookamount1).toFixed(2));
  console.log(total1)
  if((bookamount1+bookamount2+bookamount3+bookamount4)==0){
    totaldisplay.innerHTML = "Total= $0.00"
    ordernow.disabled = true
  } else if((bookamount1+bookamount2+bookamount3+bookamount4)>0){
    total= parseFloat((total1+total2+total3+total4).toFixed(2));
  totaldisplay.innerHTML = "Total= $" + total
   ordernow.disabled = false
  }
})

buttonaddtocart2.addEventListener("click", (e) =>{
  console.log("Buttonaddtocart2 is pressed!");
  bookamount2 = parseInt(document.querySelector("#bookamount2").value);
  console.log(bookamount2);
  total2=parseFloat((bookprice2*bookamount2).toFixed(2));
  console.log(total2)
  if((bookamount1+bookamount2+bookamount3+bookamount4)==0){
    totaldisplay.innerHTML = "Total= $0.00"
    ordernow.disabled = true
  } else if((bookamount1+bookamount2+bookamount3+bookamount4)>0){
    total= parseFloat((total1+total2+total3+total4).toFixed(2));
    totaldisplay.innerHTML = "Total= $" + total
   ordernow.disabled = false
  }
})

buttonaddtocart3.addEventListener("click", (e) =>{
  console.log("Buttonaddtocart3 is pressed!");
  bookamount3 = parseInt(document.querySelector("#bookamount3").value);
  console.log(bookamount3);
  total3=parseFloat((bookprice3*bookamount3).toFixed(2));
  console.log(total3)
  if((bookamount1+bookamount2+bookamount3+bookamount4)==0){
    totaldisplay.innerHTML = "Total= $0.00"
    ordernow.disabled = true
  } else if((bookamount1+bookamount2+bookamount3+bookamount4)>0){
    total= parseFloat((total1+total2+total3+total4).toFixed(2));
    totaldisplay.innerHTML = "Total= $" + total
   ordernow.disabled = false
  }
})

buttonaddtocart4.addEventListener("click", (e) =>{
  console.log("Buttonaddtocart4 is pressed!");
  bookamount4 = parseInt(document.querySelector("#bookamount4").value);
  console.log(bookamount4);
  total4=parseFloat((bookprice4*bookamount4).toFixed(2));
  console.log(total4)
  if((bookamount1+bookamount2+bookamount3+bookamount4)==0){
    totaldisplay.innerHTML = "Total= $0.00"
    ordernow.disabled = true
  } else if((bookamount1+bookamount2+bookamount3+bookamount4)>0){
    total= parseFloat((total1+total2+total3+total4).toFixed(2));
    totaldisplay.innerHTML = "Total= $" + total
   ordernow.disabled = false
  }
})



