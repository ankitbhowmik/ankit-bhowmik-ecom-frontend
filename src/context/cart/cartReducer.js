import { CART_REQUEST, CART_SUCCESS, EMPTY_CART} from './cartType';

const initialCart = {
	loading:true,
	cartItems: []
}
const cartReducer = (state=initialCart, action)=>{
	switch(action.type){
		case CART_REQUEST:
			return {...state, loading:true}
		case CART_SUCCESS: 
			return {loading:false, cartItems: action.payload}
		case EMPTY_CART:
			return {...initialCart, loading:false}
		default:
			return state
	}
}
export default cartReducer;