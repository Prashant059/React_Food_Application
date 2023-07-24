import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

    if(action.type === 'ADD'){
       
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        
        const existingCartItem = state.items[existingCartItemIndex];
        console.log(existingCartItem);
        let updatedData;

        if(existingCartItem) {
           let updatedItem = {
            ...existingCartItem,
            amount : existingCartItem.amount + action.item.amount
          };
          updatedData = [...state.items];
          updatedData[existingCartItemIndex] = updatedItem;
        } else {
          updatedData = state.items.concat(action.item);
        };

        return {
           items: updatedData,
           totalAmount: updatedTotalAmount 
        };      
    };

    if(action.type === 'REMOVE'){
      const existingCartItemIndex =  state.items.findIndex((item) => item.id === action.id); 
      
      const existingItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updateData;
      
      if(existingItem.amount === 1){
       updateData = state.items.filter(item => item.id !== action.id);
      } else{
        const updateItem = {...existingItem, amount: existingItem.amount -1};
        updateData = [...state.items];
        updateData[existingCartItemIndex] = updateItem;
      };

      return {
        items: updateData,
        totalAmount: updatedTotalAmount
      };
    };

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemToHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    additem: addItemToCartHandler,
    removeitem: removeItemToHandler,
  };


     return ( 
     <CartContext.Provider value={cartContext}>
         {props.children}
     </CartContext.Provider>
     )
};

export default CartProvider;