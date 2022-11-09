import { CartItem, Set } from "../cart-item/CartItem";
import { SAMPLE_USER } from "../profile/userData";




export const SAMPLE_SETS: Set[] = [
  {
    "setcode": "sth",
    "name": "Stronghold",
    "pack_image": "https://crystal-cdn1.crystalcommerce.com/photos/30675/he5UU4rxVQWp5ubU.jpg"
  },
  {
    "setcode": "ice",
    "name": "Ice Age",
    "pack_image": "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1110897.jpg"
  },
  {
    "setcode": "wth",
    "name": "Weatherlight",
    "pack_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV6wU_dn8RH8TJc66n78lTHposKWkbuOXCQ&usqp=CAU"
  },
  {
    "setcode": "tor",
    "name": "Torment",
    "pack_image": "https://i.ebayimg.com/images/g/uGkAAOSwQ0teTSrk/s-l600.jpg"
  }
]
export const SAMPLE_CART: CartItem[] =[
  {
    cartItemId: 1,
    user:SAMPLE_USER,
    set: SAMPLE_SETS[0],
    quantity: 5
  },
  {
    cartItemId: 1,
    user:SAMPLE_USER,
    set: SAMPLE_SETS[2],
    quantity: 24
  },
  {
    cartItemId: 1,
    user:SAMPLE_USER,
    set: SAMPLE_SETS[3],
    quantity: 7
  },
  {
    cartItemId: 1,
    user:SAMPLE_USER,
    set: SAMPLE_SETS[1],
    quantity: 1
  }
]
