import React, {useEffect, useState, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import Slider from '../Slider/Slider';
import GroupProduct from '../component/GroupProduct';
import BuyNowButton from '../component/BuyNowButton';
import NoProductFound from '../component/NoProductFound';

const ProductDetail = () => {
  const {pid} = useParams();

 // const {productData, imagePath} = useLocation().state;
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [imagePath, setImagePath] = useState('');

  useEffect(()=>{ 
    fetch(`/product/one/${pid}`)
    .then(response=>response.json())
    .then(data=>{
      setProductData(data.Product);
      setImagePath(data.imagePath);
      setLoading(false);
    })

  },[pid])

    return (
      <Fragment>
      {
        loading ? <h1>loading...</h1>
        : !productData ? <NoProductFound message="No product with such id"/>
        : <div id="product-detail">
          <div className="product-image">
          <aside>
              <article style={{textAlign:"center"}}>
                <Slider>
                  {
                    productData.ProductImage.map((image, index)=> (
                      <div key={index} className="main-image">
                        <img src={imagePath+image} alt={image}/>
                      </div>
                    ))
                  }
                </Slider>
              <h3>{productData.ProductModel}</h3>
              <BuyNowButton productId={productData._id}/>
              </article>
              <div className="small-product-image">
                {
                  productData.ProductImage.map((image, index)=>(
                    <div key={index} className="single-small-image">
                      <img src={imagePath+image} alt={image}/>
                    </div>
                  ))
                }
              </div>
              </aside>
          </div>
          <div className="product-about">
            <h2>{productData.ProductTitle}</h2>
            <hr/>
            <p className="green-text">Extra rs- 2000 off</p>
            <h3>Product Price: </h3>
            <p className="red-text">Rs {productData.ProductPrice}</p>
            
            <BuyNowButton productId={productData._id}/>
            
            <hr/>
            <h3>Product Description: </h3>
            <p>{productData.ProductDescription}</p>
            <h3>Product Category: </h3>
            <p>{productData.ProductCategory}</p>
            <h3>Product Quantity Reaming: </h3>
            <p>{productData.ProductQty}</p>
            <hr/>

            <h3>Product you may like</h3>
              <GroupProduct category={productData.ProductCategory}/>
          </div>
        </div>
      }
      </Fragment>
    )
}

export default ProductDetail;