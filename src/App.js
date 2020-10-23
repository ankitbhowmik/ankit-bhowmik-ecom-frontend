import React, {Fragment, useEffect, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './component/Header';

import {AuthContext} from './context/AuthContextProvider';
import {CartContext} from './context/CartContextProvider';
import {fetchAuthRequest} from './context/authContext/authAction';
import {fetchCart} from './context/cart/cartAction';

import ScrollToTop from './utilComponent/ScrollToTop';
import ProtectedRoute from './utilComponent/ProtectedRoute';

import NoProductFound from './component/NoProductFound';
import Home from './screen/Home';
import ProductDetail from './screen/ProductDetail';
import ProductList from './screen/ProductList';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Cart from './screen/Cart';
import Footer from './component/Footer';


const App = (props) => {
    const {dispatch:authDispatch} = useContext(AuthContext);
    const {dispatch:cartDispatch} = useContext(CartContext);
    useEffect(()=>{
        fetchAuthRequest(authDispatch);
        fetchCart(cartDispatch);
    }, [authDispatch, cartDispatch])

    return (
    <Fragment>
    	<Header/>
    	<main>
            <ScrollToTop>
    		<Switch>
    			<Route exact path="/" component={Home}/>
                <Route path="/productDetail/:pid" component={ProductDetail}/>
                <Route path="/productList/:searchKey?" component={ProductList}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <ProtectedRoute path="/cart" component={Cart}/>

                <Route path="*">
                    <NoProductFound message="no route found" secondMessage="enter correct Url"/>
                </Route>
    		</Switch>
            </ScrollToTop>
            <br/><br/><br/>
    	</main>
        <Footer/>

    </Fragment>
    )
}

export default App;