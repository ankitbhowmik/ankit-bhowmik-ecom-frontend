import React from 'react';
import {useHistory} from 'react-router-dom';

const SingleProduct = ({productData, imagePath}) => {
	const history = useHistory();

	const goToProductPage = ()=>{
		history.push({
			pathname:`/productDetail/${productData._id}`,
			state: {productData, imagePath}
		});
	}

  	return (
	  	<div className="single-product">
			<div className="flex" onClick={goToProductPage} style={{cursor:"pointer"}}>
				<img src={imagePath+productData.ProductImage[0]} alt={productData.ProductTitle}/>
				<p className="single-product-title">{productData.ProductModel}</p>
				<p className="green-text">{productData.ProductCategory}</p>
			</div>
		</div>
  	)
}

export default SingleProduct;