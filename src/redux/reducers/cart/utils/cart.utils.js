export const removeItemFromCollections = (currentCollections, chosenItemId) => (
  currentCollections.filter((item) => item.id !== chosenItemId)
);

export const enlargeQuantityItem = (currentCollections, chosenItemId) => (
  currentCollections.map((item) => {
    if (item.id === chosenItemId) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }

    return item;
  })
);

export const reducingQuantityItem = (currentCollections, chosenItemId) => {
  if (chosenItemId.quantity <= 1) {
    return currentCollections.filter((item) => item.id !== chosenItemId.id);
  }

  return currentCollections.map((item) => {
    if (item.id === chosenItemId.id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }

    return item;
  });
};
