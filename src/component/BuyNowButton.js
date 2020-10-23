import React, {useContext} from 'react';

import {CartContext} from '../context/CartContextProvider';
import {fetchCart} from '../context/cart/cartAction';

const BuyNowButton = ({productId}) => {
	const {dispatch} = useContext(CartContext);
	
	const addToCart = async ()=>{
		const response = await fetch('/shop/add-to-cart', {
			method:'post',
			headers:{'Content-type' : "application/json"},
			body: JSON.stringify({productId})
		});
		const data = await response.json();
 		dispatch(fetchCart(dispatch));
 		if(data.status==='success'){
 			alert('data added to cart');
 		}else if(data.error === 'item already exist in cart'){
 			alert('item already exist in cart')
 		}else if(data.error === 'not logged in'){
 			alert('please login first');
 		}
	}

  	return (
	    <div>
	    	<p>
	            <button className="primary-button" onClick={addToCart}>Add to Cart</button>
	            <button className="primary-button" style={{backgroundColor:"yellow", color:"black"}}>Buy Now</button>
	        </p>
	    </div>
  	)
}

export default BuyNowButton;