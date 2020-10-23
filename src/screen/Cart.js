import React, {useContext, useEffect, Fragment} from 'react';
import {CartContext} from '../context/CartContextProvider';
import NoProductFound from '../component/NoProductFound';
import {fetchCart} from '../context/cart/cartAction';

const Cart = (props) => {
	const {cart, dispatch} = useContext(CartContext);
 	const {loading, cartItems} = cart;

 	useEffect(()=>{
 		dispatch(fetchCart(dispatch));
 	}, [dispatch])

 	const removeFromCart = async (productId)=>{
		await fetch('/shop/remove-from-cart',{
 			method:"post",
 			headers:{"Content-Type":"application/json"},
 			body:JSON.stringify({productId})
 		});
 		dispatch(fetchCart(dispatch));
 	}

  	return (
	  	<div className="cart box container">
	  	<h1 className="title">My Orders</h1>
  		{
	  		loading ? <h1>loading...</h1>
	  		: !cartItems.length ? <NoProductFound message="no items in Cart" secondMessage="please shop and add some items in cart"/>
	  		: <Fragment>
	  			{
	  			cartItems.map(item=>( 
		  		<figure className="grid" key={item._id}>
			  		<div className="cart-title">
			  			<h3>{item.productName}</h3>
			  			<p className="grey-text">Product Qty :{item.productQty}</p>
			  			<p className="red-text">Price:- {item.productPrice}</p>
			  		</div>
			  		<div className="cart-image">
			  			<img src={`/productImages/${item.productImg}`} alt={item.productImg}/>
			  			<button onClick={()=>removeFromCart(item.productId)}> <span role="img" aria-label="dustbin">🗑️</span> </button>
			  		</div>
		  		</figure>
	  		)) 
	  			}
	  			<div className="cart-total">
	  				<button className="primary-button" onClick={()=>alert('further is payment gateway which i did not implemented')}>
	  					Proced to checkout
	  				</button>
	  			</div>
	  		</Fragment>
	  	}
	  	</div>
  	)
}

export default Cart;