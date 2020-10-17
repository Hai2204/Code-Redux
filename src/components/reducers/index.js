import { combineReducers } from "redux";
import products from "./products";
import card from "./card";
import message from "./changeMessgase";

const myReducer = combineReducers({
  products,
  card,
  message,
});
export default myReducer;
