type Nullable<T> = T | null;


export interface UserInterface {
  id:number
  firstname:string
  lastname:string
  username: string
  password?:Nullable<string>
  email:string
  hasBought:boolean
}

export interface Card {
  cardId:number
  name:string
  setName:string
  // quantityOwned:number
  imgLocation?:Nullable<string>
  actualSet:string
  color?:Nullable<string>
  colorID?:Nullable<string>
  cost?:Nullable<string>
  convertedCost?:Nullable<string>
  type?:Nullable<string>
  power?:Nullable<string>
  toughness?:Nullable<string>
  loyalty?:Nullable<string>
  rarity?:Nullable<string>
  draftQualities?:Nullable<string>
  sound?:Nullable<string>
  script?:Nullable<string>
  text?:Nullable<string>
}
