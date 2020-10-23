import React, {Fragment, useState, useEffect} from 'react';
import SingleProductList from '../component/SingleProductList';
import {useParams} from 'react-router-dom';
import NoProductFound from '../component/NoProductFound';

const ProductList = (props) => {
	const {searchKey} = useParams()
	const [loading, setLoading] = useState(true);
	const [searchProduct, setSearchProduct] = useState([]);
	const [path, setPath] = useState('');
	
  	useEffect(()=>{
  		fetch(`/product/productList/${searchKey}`)
  		.then(response=> response.json())
  		.then(data=>{
  			setLoading(false);
  			setSearchProduct(data.Products);
  			setPath(data.imagePath);
  		});
  	},[searchKey])

  	return (
	    <Fragment>
	    	{
	    		loading ? <h1>loading...</h1>
	    		: searchProduct.length === 0 ? <NoProductFound secondMessage="check your spelling for incorrect data"/>
	    		: <div className="box container">
		    		{
		    			searchProduct.map(data=>(
		    				<SingleProductList key={data._id} productData={data} imagePath={path}/>
		    			))
		    		}
		    	</div>
	    	}
	    </Fragment>
  	)
}

export default ProductList;