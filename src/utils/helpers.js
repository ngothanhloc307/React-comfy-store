export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // maximumFractionDigits: 9,
  }).format(number / 1000);
};

export const getUniqueValues = () => {};
