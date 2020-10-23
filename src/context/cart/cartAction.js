import { CART_REQUEST, CART_SUCCESS, EMPTY_CART} from './cartType';

export const cartRequest = ()=>{
	return {type:CART_REQUEST}
}

export const cartSuccess = (data)=>{
	return {type:CART_SUCCESS, payload:data}
}

export const emptyCart = ()=>{
	return {type:EMPTY_CART}
}

export const fetchCart = async (dispatch)=>{
	dispatch(cartRequest());
	try{
		const response = await fetch('/shop/show-cart');
		const data = await response.json();
		dispatch(cartSuccess(data));
	}catch(err){
		dispatch(emptyCart());
	}
}
