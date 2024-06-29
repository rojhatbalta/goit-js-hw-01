function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  return console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}
