export const compareCost = (a, b) => {
  const costa = a.cost.replace('$','');
  const costb = b.cost.replace('$','');
  if(parseInt(costa) < parseInt(costb)){
    return -1;
  }
  if(parseInt(costa) > parseInt(costb)){
    return 1;
  }
  return 0;
};