import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL} from './authType';

const initialState = {
	loading:true,
	id:null,
	email:null,
	name:null
}

const authReducer = (state=initialState, action) =>{
	switch(action.type){
		case AUTH_REQUEST :
			return {...state, loading:true}
		
		case AUTH_SUCCESS :
			return {
				loading:false, 
				id:action.payload.id, 
				email:action.payload.email, 
				name:action.payload.name
			}
		
		case AUTH_FAIL :
			return {
				loading:false,
				id:null,
				email:null,
				name:null
			}
		
		default :
			return state

	}
}
export default authReducer;