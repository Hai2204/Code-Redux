import * as Types from "../constants/actionType";

var data = JSON.parse(localStorage.getItem("CARD"));

var initialState = data ? data : [];

var findProductInCard = (card, product) => {
  var index = -1;
  if (card.length > 0) {
    for (var i = 0; i < card.length; i++) {
      if (card[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
const card = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CARD:
      index = findProductInCard(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
      localStorage.setItem("CARD", JSON.stringify(state));
      return [...state];
    case Types.REMOVE_CARD:
      index = findProductInCard(state, product);
      if(index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CARD", JSON.stringify(state));
      return [...state];
    case Types.UPDATE_QUANTITY_INCARD:
      index = findProductInCard(state, product);
      if(index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CARD", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
export default card;
