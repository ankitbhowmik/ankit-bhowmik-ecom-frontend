import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL} from './authType';

export const authRequest = ()=>{
	return {type:AUTH_REQUEST}
}

export const authSuccess = (data)=>{
	return {type: AUTH_SUCCESS, payload:data}
}

export const authFail = ()=>{
	return {type:AUTH_FAIL}
}

export const fetchAuthRequest = async (dispatch) => {
	dispatch(authRequest);
	const response = await fetch('/user/verify-token');
	const data = await response.json();
	if(data.status === 'success'){
		dispatch(authSuccess(data.decodedToken));
	}
	if(data.status === 'fail'){
		dispatch(authFail());
	}
}