import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

const list = [
  {
    key: 0,
    title: `Sneaker Company`,
    name: `Fall Limited Edition Sneakers`,
    info: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything the
    weather can offer.`,
    newPrice: `$125.00`,
    percentage: `50%`,
    oldPrice: `$250.00`,
    // pictures: [
    //   {
    //     key: 0,
    //     pic: `"../assets/images/image-product-1.jpg"`,
    //     thumbnail: thumb1,
    //   },
    //   {
    //     key: 1,
    //     pic: "../assets/images/image-product-2.jpg",
    //     thumbnail: thumb2,
    //   },
    //   {
    //     key: 2,
    //     pic: "../assets/images/image-product-3.jpg",
    //     thumbnail: thumb3,
    //   },
    //   {
    //     key: 3,
    //     pic: "../assets/images/image-product-4.jpg",
    //     thumbnail: thumb4,
    //   },
    // ],
  },
];
const picture = [
  {
    key: 0,
    id: 0,
    pic: require("../assets/images/image-product-1.jpg"),
    thumbnail: thumb1,
  },
  {
    key: 1,
    id: 1,
    pic: require("../assets/images/image-product-2.jpg"),
    thumbnail: thumb2,
  },
  {
    key: 2,
    id: 2,
    pic: require("../assets/images/image-product-3.jpg"),
    thumbnail: thumb3,
  },
  {
    key: 3,
    id: 3,
    pic: require("../assets/images/image-product-4.jpg"),
    thumbnail: thumb4,
  },
];
export default list;
export { picture };
