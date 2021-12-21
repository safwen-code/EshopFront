import boxe from "./image/boxe.jpeg";
import casque from "./image/casque.jpeg";
import hp from "./image/hp.jpeg";
import phone from "./image/phone.jpeg";
import playstation from "./image/playstation.jpg";
const products = [
  {
    id: 1,
    titel: "playstation",
    image: playstation,
    description: "description for playStation",
    brand: "sony",
    category: "electronics",
    price: 35.66,
    contInstock: 0,
    rating: 4.5,
    newReviews: 4,
  },
  {
    id: 2,
    titel: "sumsung",
    image: phone,
    description: "description for sumsung product",
    brand: "appel",
    category: "electronics",
    price: 22.66,
    contInstock: 4,
    rating: 1.5,
    newReviews: 6,
  },
  {
    id: 3,
    titel: "pc gaming",
    image: hp,
    description: "description gaming product custumer",
    brand: "hwewi",
    category: "tech",
    price: 47.68,
    contInstock: 1,
    rating: 0,
    newReviews: 4,
  },
  {
    id: 4,
    titel: "casque",
    image: casque,
    description: "description gaming product custumer",
    brand: "hwewi",
    category: "tech",
    price: 47.68,
    contInstock: 1,
    rating: 0,
    newReviews: 4,
  },
  {
    id: 5,
    titel: "boxe",
    image: boxe,
    description: "description entertaiment product custumer",
    brand: "UFC",
    category: "sport",
    price: 47.68,
    contInstock: 1,
    rating: 3.5,
    newReviews: 4,
  },
];

export default products;
