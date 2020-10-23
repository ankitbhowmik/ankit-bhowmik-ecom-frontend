import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const Signup = (props) => {
	const {register, handleSubmit, errors} = useForm();
	const initialServerErr = {name:'', email:'', password:''}
	const [serverErr, setServerErr] = useState(initialServerErr);
	
	const onSubmit = async (data)=>{
		setServerErr(initialServerErr);
		const response = await fetch('/user/signup', {
			method:"POST",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify(data)
		});
		const result = await response.json();
		console.log(result)
		if(result.status === 'fail'){
			setServerErr(prevState=> ({...prevState, ...result.allError}));
		}
		if(result.status === 'success'){
			props.history.push('/login');
		}
	}

  	return (
	  	<div className="my-form">
	  	<form onSubmit={handleSubmit(onSubmit)}> 
			<h2>User Signup</h2>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" required ref={register}/>
			<div className="error">
				{serverErr.name}
			</div>

			<label htmlFor="email">Email</label>
			<input type="email" name="email" required ref={register}/>
			<div className="email error">
				{serverErr.email}
			</div>

			<label htmlFor="password">Password</label>
			<input type="password" name="password" required ref={register({minLength:5})}/>
			<div className="password error">
				{errors.password && "password length should be at least 5 letter"}
				{serverErr.password}
			</div>

			<button type="submit" className="primary-button">Signup</button>
		</form>
		</div>
  	)
}

export default Signup;