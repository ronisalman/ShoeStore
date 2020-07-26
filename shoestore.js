// Created by Roni Salman

const cartButton=document.getElementById('slidingCart');
const totalText=document.getElementById('total');
const shoes=document.querySelectorAll('.shoeContainer');
const totalAmount=document.querySelectorAll('.price');

let activeButton=false;

let priceTotal=0.00;
let priceString='0.00';

const clickedCart=()=>{
  // show price when cart open, hide when cart closed
  if(!activeButton){
    activeButton=true;
    totalText.innerHTML="Price: $"+priceString;
    totalText.classList.add('totalPrice');
  }
  else{
    activeButton=false;
    totalText.innerHTML="";
    totalText.classList.remove('totalPrice');
  }
  cartButton.classList.toggle('openCart');
}

const clickedShoe=()=>{
  for(let i=0;i<shoes.length;i++){
    // add click event to each shoe, adding price to cart when clicked
    shoes[i].addEventListener('click',event=>{
      let amount=totalAmount[i].innerHTML;
      amount=amount.replace('$','');
      priceTotal+=parseFloat(amount);
      priceString=priceTotal.toFixed(2);
    });
  }
}

clickedShoe();