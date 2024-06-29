function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  return console.log(
    `You ordered ${quantity} droids worth ${totalPrice} credits!`
  );
}
