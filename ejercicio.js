function calculateShipping(weigth) {
  const ratePerKg = 5;
  return weigth * ratePerKg;
}

function processShipping(weigths) {
  for (let i = 0; index < weigths.length; i++) {
    const shippingCost = calculateShipping(weigths[i]);
    console.log(
      `Articulo ${i + 1}: peso ${
        weigths[i]
      } kg - costo de envío ${shippingCost} dólares`
    );
  }
}

const itemWeights = [2, 5, 1.5];
processShipping(itemWeights);
