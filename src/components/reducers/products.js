import img from "../image/107963382_138603354541099_3182837994047205744_n.jpg";
import img1 from "./8ce5a29dd7e33bbd62f2.jpg";
import img2 from "../image/119681106_1639583819559686_1434686570279555517_o.jpg";
var initialState = [
  {
    id: 1,
    name: "Iphone 6 Plus",
    image: img1,
    decription: "San Pham Apple",
    price: 15,
    rating: 4,
    inventory: 100,
  },
  {
    id: 2,
    name: "Iphone 7 Plus",
    image: img,
    decription: "San Pham Apple",
    price: 25,
    rating: 5,
    inventory: 100,
  },
  {
    id: 3,
    name: "Apple watch",
    image: img2,
    decription: "San Pham Apple",
    price: 15,
    rating: 2,
    inventory: 100,
  },
];
const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default product;
