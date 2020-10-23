import React, {useState} from 'react';
import './Slide.css';
import {FaAngleDoubleLeft} from 'react-icons/fa';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Slider = (props) => {
	let [x, setx] = useState(0);
	const sliderArr = props.children.length;
	
	const goPrev = ()=>{
		(x === 0)
		? setx(-sliderArr * 100 + 100)
		: setx(prevState=> prevState+100);	
	}
	const goNext = ()=>{
		(x === -sliderArr * 100 + 100)
		? setx(0)
		: setx(prevState=> prevState-100)
	}

  	return (
  		<div className="ankit-slider">
	    <div className="slider">
	    	{
		    	props.children.map((children,index)=>{
	    			return React.cloneElement(children, {style: {transform:`translateX(${x}%)`}, key:index})
	    		})
	    	}
	    </div>
	    <button className="prev-slide" onClick={goPrev}><FaAngleDoubleLeft/></button>
	   	<button className="next-slide" onClick={goNext}><FaAngleDoubleRight/></button>
  		</div>
  	)
}

export default Slider;