export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => (total += item.price), 0);
