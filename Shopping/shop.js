
const clearScreen = ()=>{
  const cartItems = document.querySelectorAll(".cart-item");
  if(cartItems){
      for(let i=0;i<cartItems.length;i++){
       if(!cartItems[i].className.includes("nav")){
        cartItems[i].remove();
       };
      }
  }
}




const fetchData = async () =>{

  const response = await fetch("https://dummyjson.com/products");
  const jsonData = await response.json();
  return jsonData;
}

const fetchIndividualProducts = async (value)=>{
  const jsonData = await fetchData();
  const products = jsonData.products.filter((each)=>{
      if(each.brand ===  value){
          return each;
      }
  })
return products;
}

const itemsCreation = (indiProducts) =>{


  for(let i=0;i<indiProducts.length;i++){
      const div    = document.createElement("div");
      const img   = document.createElement("img");
      const h3    = document.createElement("h3");
      const desc   = document.createElement("p");
      const button = document.createElement("button");
      const price  = document.createElement("p");
      price.className="price"
      button.className = "product-button";
      button.innerText = "add to cart";
      button.addEventListener("click",()=>{
              cartNavBar(div);

      })
      div.className="cart-item";
      h3.innerText = indiProducts[i].title;
     desc.innerText=indiProducts[i].description;
      img.src = indiProducts[i].images[0];
      price.innerText=indiProducts[i].price;
      div.append(h3)
      div.append(img);
      div.append(desc);
      div.append(button);
      div.append(price)
      const dom     = document.querySelector(".cart").appendChild(div);
  }
}

async function logJSONData() {
console.log("executing");
  clearScreen();
let  search   = document.querySelector(".input").value;
search =firstLetterUpperCase(search)
const indiProducts = await  fetchIndividualProducts(search);
itemsCreation(indiProducts);


}


const firstLetterUpperCase  = (value) => {
const firstLetter = value[0];
const letter      = firstLetter.toUpperCase();
const result      = letter + value.slice(1);
return result;
}


  const button = document.querySelector(".get-items");
  button.addEventListener("click",async()=>{
   await  logJSONData()
})

const cartNavBar = (div) =>{
 const cart = document.querySelector(".cart-nav");
 const clone = div.cloneNode(true);
 clone.className ="cart-item nav"
 
 clone.querySelector("button").className="remove-button";
 clone.querySelector("button").innerText="remove";
 clone.querySelector("button").addEventListener("click",()=>{
  clone.remove();
  cartTotal();

 })

 cart.appendChild(clone);
 cartTotal();

}


const cartTotal = () => {

let total = 0;
const cartItems = document.querySelectorAll(".cart-item.nav");
const cart = document.querySelector(".cart-nav");

cartItems.forEach((each)=>{
const price = each.querySelector(".price").innerText;
total = total + Number(price);
})
const exists = document.querySelector(".cart-price");
if(exists){
exists.remove();
element = latestTotal();
element.innerText=total;
cart.appendChild(element);
} 

else{
element = latestTotal();
element.innerText=total;
cart.appendChild(element);
}


}



const cartItems = ()=>{

}



const  latestTotal  = ()=>{
const temp = document.createElement("p");
temp.className="cart-price";
return temp;

}