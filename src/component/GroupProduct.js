import React, {useState, useEffect} from 'react';
import SingleProduct from './SingleProduct';

const GroupProduct = (props) => {
	const category = props.category;
	const [products, setProducts] = useState({});
	const [loading, setLoading] = useState(true);
	let [path, setPath] = useState('');
	
	useEffect(()=>{
		fetch(`/product/category/${category}`)
		.then(response=>response.json())
		.then(data=>{
			setProducts(data.products);
			setPath(data.imagePath);
			setLoading(false);
		})
	},[category])
  	
  	return (
	  	<div className="group-products grid">
			<div className="group-product-title">
				<h1>Latest {category} in Market</h1>
				<p>Extra savings using SuperCoins</p>
			</div>
			<article>
			<div className="all-products">
				{loading ? <h1>Loading...</h1>
				: products.map((data, index)=>(
					<SingleProduct key={data._id} productData={data} imagePath={path}/>
				))
				}
				
			</div>
			</article>
	    </div>
  	)
}

export default GroupProduct;