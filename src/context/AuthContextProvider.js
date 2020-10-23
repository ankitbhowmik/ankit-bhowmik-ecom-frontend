import React, {createContext, useReducer} from 'react';
import authReducer from './authContext/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [auth, dispatch] = useReducer(authReducer, {})

  	return (
	    <AuthContext.Provider value={{auth, dispatch}}>
	    	{props.children}
	    </AuthContext.Provider>
  	)
}

export default AuthContextProvider;