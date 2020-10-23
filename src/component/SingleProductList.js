import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const SingleProductList = ({productData, imagePath}) => { 
    const [prevPrice] = useState(parseInt(productData.ProductPrice) * 1.1);
    const history = useHistory();
    const goToProductPage = ()=>{
        history.push({
            pathname:`/productDetail/${productData._id}`,
            state: {productData, imagePath}
        });
    }
    
    return (
        <div className="single-product-list" onClick={goToProductPage}>
        	<div className="list-image">
        		<img src={imagePath+productData.ProductImage[0]}  alt={productData.ProductImage[0]}/>
        	</div>
        	<div className="list-detail">
        		<h4>{productData.ProductTitle}</h4>
        		<ul className="features">
                    <li className="small-text">
                        {productData.ProductDescription}
                    </li>
        		</ul>
        	</div>
        	<div className="list-price">
        		<h4>{productData.ProductPrice}</h4>
                <p> <span className="cross"> {prevPrice.toFixed(0)} </span> <span className="green-text"> extra 10% off</span></p>
        		<p className="small-text">No cost emi available</p>
        	</div>
        </div>
    )
}

export default SingleProductList;