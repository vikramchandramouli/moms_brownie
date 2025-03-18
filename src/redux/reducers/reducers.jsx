import chocoBrownie from "../../assets/ChocoBrownie.jpg";
import darkBrownie from "../../assets/DarkBrownie.jpeg";
import oreoBrownie from "../../assets/OreoBrownie.jpg";
import walnutBrownie from "../../assets/walnutBrownie.jpg";
import nutellaBrownie from "../../assets/nutellaBrownie.jpg";
import biscoffBrownies from "../../assets/biscoffBrownies.jpg";
import TripleBrownies from "../../assets/TripleBrownies.jpg";
import blondeBrownies from "../../assets/blondeBrownies.jpg";
import matchaBrownies from "../../assets/matchaBrownies.jpg";
import mintBrownies from "../../assets/mintBrownies.jpg";

const initialState={
    menu:[
      
          {
            id:1,
            title: "Dark Fudge Brownie",
            description:
              "Rich, ultra-fudgy, and intensely chocolatey.",
            origin: "Chocolate American",
            newPrice: 59,            
            oldPrice: 100,
            image: darkBrownie,
          },
          {
            id:2,
            title: "Choco Chip Brownie",
            description: "Fudgy brownie loaded with chocolate chips",
            origin: "Chocolate American",
            newPrice: 65,
            oldPrice: 100,
            image: chocoBrownie,
          },
          {
            id:3,
            title: "Oreo Brownie",
            description: "Rich brownie with crunchy Oreo pieces.",
            origin: "Chocolate American",
            newPrice: 69,
            oldPrice: 100,
            image: oreoBrownie,
          },
          {
            id:4, 
            title: "Walnut Brownie",
            description: "A Classic fudgy brownie with toasted walnuts. ",
            origin: "Chocolate Nutty American",
            newPrice: 69,
            oldPrice: 100,
            image: walnutBrownie,
          },
          {
            id:5,
            title: "Nutella Brownie",
            description: "Gooey brownie swirled with creamy Nutella.",
            origin: "Chocolate Hazelnut Italian",
            newPrice: 69,
            oldPrice: 100,
            image: nutellaBrownie,
          },
          {
            id:6,
            title: "LotusBiscoff Brownie",
            description: "Fudgy brownie with Biscoff spread & biscuits.",
            origin: "Chocolate Caramelized Belgian",
            newPrice: 75,
            oldPrice: 100,
            image: biscoffBrownies,
          },
          {
            id:7,
            title: "Triple Chocolate Brownie",
            description: "Dark, milk & white chocolate indulgence.",
            origin: "Chocolate Overload American",
            newPrice: 90,
            oldPrice: 100,
            image: TripleBrownies,
          },
          {
            id:8,
            title: "Blonde Brownie",
            description: "Chewy vanilla brownie with caramel notes.",
            origin: "Vanilla Caramel American",
            newPrice: 90,
            oldPrice: 100,
            image: blondeBrownies,
          },
          {
            id:9,
            title: "Mint Brownie",
            description: "Rich chocolate brownie with a cool mint twist.",
            origin: "Chocolate Minty American",
            newPrice: 79,
            oldPrice: 100,
            image: mintBrownies,
          },
          {
            id:10,
            title: "Matcha Brownie",
            description: "Soft, chewy brownie with earthy matcha flavor.",
            origin: "Green Tea Japanese",
            newPrice: 85,
            oldPrice: 100,
            image: matchaBrownies,
          }
      ],
      cart: [],
      cartId:[],
      orderedList:[],
      customerDetails:{}
}

export const addToCartReducer = (state=initialState,action)=>{
  switch(action.type) {
    case "AddtoCart":
      return{
        ...state,cart:[...state.cart,action.payload]
      }
    case "RemovefromCart":
      return{
        ...state,cart:[...action.payload]
      }
    case "AddCartId":
      return{
        ...state,cartId:[...state.cartId,action.payload]
      }
    case "RemoveCartId":
      return {
        ...state,cartId:[...action.payload]
      }
    case "CustomerDetails":
      return {
        ...state,customerDetails:{...action.payload}
      }
      case "OrderedList":
        return {
          ...state,orderedList:[...state.orderedList,...action.payload]
        }
    default:
      return state
  }
}
