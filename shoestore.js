// Created by Roni Salman

let cartButton=document.getElementById('slidingCart');
let totalText=document.getElementById('total');

let activeButton=false;

let clickedCart=()=>{
  // show price when cart open, hide when cart closed
  if(!activeButton){
    activeButton=true;
    totalText.innerHTML="Price: ";
  }
  else{
    activeButton=false;
    totalText.innerHTML="";
  }
  cartButton.classList.toggle('openCart');
}