export const removeChoosedItemFromCllections = (currnetCollectios, choosedItem) => {
  return currnetCollectios.filter(item => item.id !== choosedItem);
};

export const increasinQuantityChoosedItem = (currnetCollectios, choosedItem) => {
  return currnetCollectios.map( item => {
    if (item.id === choosedItem) {
      return {
        ...item,
        quantity: item.quantity + 1
      };
    };

    return item;
  });
};

export const reducingQuantityChoosedItem = (currnetCollectios, choosedItem) => {
  if (choosedItem.quantity <= 1) {
    return currnetCollectios.filter( item => item.id !== choosedItem.id)
  };

  return currnetCollectios.map( item => {
    if (item.id === choosedItem.id) {
      return {
        ...item,
        quantity: item.quantity - 1
      };
    };

    return item;
  });
};
