import React, {useState, useContext, useRef} from 'react';
import { FaSistrix, FaOpencart } from "react-icons/fa";
import {useHistory, Link} from 'react-router-dom';

import {AuthContext} from '../context/AuthContextProvider';
import {CartContext} from '../context/CartContextProvider';

import {authFail} from '../context/authContext/authAction';
import {emptyCart} from '../context/cart/cartAction';

const Header = (props) => {
    const {auth, dispatch} = useContext(AuthContext);
    const {cart, dispatch:cartDispatch} = useContext(CartContext);
    const [cartItems] = useState(cart.cartItems);
    
    const [search, setSearch] = useState('');
    
    const history = useHistory();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`/productList/${search}`);
    }


    const activeMyItem = useRef();
    const showMyItem = ()=>{
        activeMyItem.current.classList.add('active');
    }
    const hideMyItem = ()=>{
        activeMyItem.current.classList.remove('active');
    }

    const logout = async ()=>{
        const response = await fetch('/user/logout');
        const data = await response.json();
        if(data.status === 'success'){
            dispatch(authFail());
            cartDispatch(emptyCart());
            history.push('/');
        }
    }

    return (
      	<header>
        <nav>
        	<ul className="my-nav">
        		<li className="logo" onClick={()=>history.push('/')}>Ankit</li>
        		<li className="item search">
        			<div className="search-box">
                        <form onSubmit={handleSubmit}>
         					<input type="text" placeholder="search for items" value={search} onChange={(e)=>setSearch(e.target.value)}/>
         					<button type="submit"><FaSistrix/></button>
                        </form>
        			</div>
        		</li>
        		<li className="item" style={{position:"relative"}}>
                    { 
                        auth.id ? <div className="my-dropdown" onMouseEnter={showMyItem} onMouseLeave={hideMyItem}>
                            <button>{auth.name}</button>
                                <div className="my-item" ref={activeMyItem}>
                                    <ul>
                                        <li onClick={logout}>logout</li>
                                    </ul>
                                </div>
                            </div>
                        : <Link to="/login"><button>Login</button></Link>
                    }
                    <div className="my-item" ref={activeMyItem}>
                        <ul>
                            <li onClick={logout}>logout</li>
                        </ul>
                    </div>
                </li>
        		<li className="item">
                    <Link to="/cart">
                        <button id="cart-btn">
                            <FaOpencart/> Cart
                            { cartItems && <span>{cartItems.length}</span>}
                        </button>
                    </Link>
                </li>
    		</ul>
        </nav>
        </header>
    )
}

export default Header;