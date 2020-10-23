import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {AuthContext} from '../context/AuthContextProvider';
import {authSuccess} from '../context/authContext/authAction';

const Login = (props) => {
	const {register, handleSubmit} = useForm();
	const initialServerErr = {email:'', password:''}
	const [serverErr, setServerErr] = useState(initialServerErr);
	const {dispatch} = useContext(AuthContext);

	const onSubmit = async (data)=>{
		setServerErr(initialServerErr);
		const response = await fetch('/user/login', {
			method:"post",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify(data)
		});
		const result = await response.json();
		if(result.status === 'fail'){
			setServerErr(prevState=> ({...prevState, ...result.allError}));
		}
		if(result.status === 'success'){
			dispatch(authSuccess(result.user));
			props.history.push('/');
		}
	}

  	return (
	  	<div className="my-form">
	  	<form onSubmit={handleSubmit(onSubmit)}>
			<h2>User Login</h2>
			<label htmlFor="email">Email</label>
			<input type="text" name="email" required ref={register}/>
			<div className="email error">
				{serverErr.email}
			</div>

			<label htmlFor="password">Password</label>
			<input type="password" name="password" required ref={register}/>
			<div className="password error">
				{serverErr.password}
			</div>

			<button className="primary-button">Login</button>
			<Link style={{textAlign:"center", marginTop:"20px", display:"block"}} to="/signup">don't have a account<br/> create a account</Link>
		</form>
		</div>
  	)
}

export default Login;