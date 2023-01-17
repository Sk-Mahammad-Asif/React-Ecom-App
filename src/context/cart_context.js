import { createContext, useContext, useReducer,  useEffect  } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("asifCart");
  /*if(localCartData === []){
    return [];
  }else{
    return JSON.parse(localCartData)
  }*/
  const parsedData = JSON.parse(localCartData);
  if(!Array.isArray(parsedData)) return [];
  return parsedData;

};

const initialState = {
  //cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //add product
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

 //increment and decrement product
  const setDecrease = (id) =>{
      dispatch({type: "SET_DECREMENT", payload: id});
  };

  const setIncrease = (id) =>{
    dispatch({type: "SET_INCREMENT", payload: id});
  };



  //to remove the individual item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };


// to clear the cart
    const clearCart = () => {
      dispatch({ type: "CLEAR_CART" });
    };

// to add the data in Local Stroage.
// get vs set

 useEffect(() => {
    //dispatch({ type : "CART_TOTAL_ITEM" });
    //dispatch({ type : "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("asifCart" ,JSON.stringify(state.cart));
 }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };