type Nullable<T> = T | null;


export interface UserInterface {
  firstName:string
  lastName:string
  username: string
  email:string
}

export interface Card {
  cardId:number
  name:string
  setName:string
  // quantityOwned:number
  imgLocation?:Nullable<string>
  actualSet:Nullable<string>
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