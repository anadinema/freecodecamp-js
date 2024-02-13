const product = {
    productName: "Parker Jotter Standard CT Ball Pen",
    colour: "Black",
    actualPrice: 250,
    rating: 4.1,
    isDealLive: true,
    offer: 5
};

console.log("Product are live on Amazon");
console.log("Product is: " + product.productName.trim() + " in colour: " + product.colour.trim());
console.log("Original price: " + product.actualPrice);

if(product.isDealLive === true) {
    let currPrice = product.actualPrice - (product.actualPrice * 5)/100;
    console.log("A deal is running, so current price is: " + currPrice.toFixed());
}
