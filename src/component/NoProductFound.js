import React from 'react';

const NoProductFound = ({message, secondMessage}) => {
	const styles = {
		display:"flex",
		padding:"20px",
		flexDirection:"column",
		textAlign:"center"
	}

  return (
    <div className="box" style={styles}>
    	<h1>{message || 'Sorry No product found'}</h1>
    	<div><img src="/404.jpg" alt="404 page"/></div>
    	<p>{secondMessage || "Check your data"}</p>
    </div>
  )
}

export default NoProductFound;