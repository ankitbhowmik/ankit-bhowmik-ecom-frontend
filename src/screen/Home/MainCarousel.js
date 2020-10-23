import React, {useState, useEffect} from 'react';
import Slider from '../../Slider/Slider';

const MainCarousel = (props) => {
	const [loading, setLoading] = useState(true);
	const [mySliders, setMySliders] = useState([]);
	const [path, setPath] = useState('');

	useEffect(()=>{
		fetch('/slider/')
		.then(response=> response.json())
		.then(data=> {
			setMySliders(data.allSliders);
			setPath(data.path);
			setLoading(false);
		})
		.catch(err=>{
			setLoading(false);
			alert(err.message);
		});

	}, [setMySliders])

  	return (
	  	<div className="box" style={{margin:"10px 0"}}>
	  		{	
	  			loading ? <h1>Loading...</h1>
			  	: <Slider>
			  		{
			  			mySliders.map((data, index)=>(
						<div key={index}>
					   		<img src={path+data.SliderImage} alt={data.SliderImage}/>
					   	</div>
			  		))
			  		}
				</Slider>
			}
		</div>
  	)
}

export default MainCarousel;