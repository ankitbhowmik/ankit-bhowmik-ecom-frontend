import React, {useState, useEffect, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {AuthContext} from '../context/AuthContextProvider';
import {authSuccess, authFail} from '../context/authContext/authAction';

const ProtectedRoute = ({component:Component, ...rest}) => {
	const [loading, setLoading] = useState(true);
	const [success, setSuccess] = useState(false);

	const {dispatch} = useContext(AuthContext);

	useEffect(()=>{
		fetch('/user/verify-token')
		.then(response=>response.json())
		.then(data=> {
			if(data.status === 'success'){
				dispatch(authSuccess(data.decodedToken));
				setSuccess(true);
				setLoading(false);
			}else{
				dispatch(authFail());
				setLoading(false);
			}
		})
	}, [dispatch]);

  	return (
	    <Route {...rest}>
	    	{
	    		loading ? <h1>loading...</h1>
	    		: success ? <Component/>
	    		: <Redirect to="/login"/>
	    	}
	    </Route>
  	)
}

export default ProtectedRoute;