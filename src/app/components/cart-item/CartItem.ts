import {UserInterface} from 'src/app/components/profile/userInterface'
export interface CartItem {
  cartItemId:number
  quantity:number
  user:UserInterface
  set:Set
}

export const DEFAULT_SET_PRICE = 5.99

export interface Set {
  setcode:string
  pack_image:string
  name:string
  price?:number 
  isInCart?:boolean
  cartItemId?:number
}


// TODO: implement Set properly

// export interface Cart {
//   cartId:number
//   quantity:number
//   //set:SetInterface
// }