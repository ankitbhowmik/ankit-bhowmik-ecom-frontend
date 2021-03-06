import React, {createContext, useReducer} from 'react';
import cartReducer from './cart/cartReducer';

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cart, dispatch] = useReducer(cartReducer, {})

  	return (
	  	<CartContext.Provider value={{cart, dispatch}}>
	  		{props.children}
	  	</CartContext.Provider>
  	)
}

export default CartContextProvider;