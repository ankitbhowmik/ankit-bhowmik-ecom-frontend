import React, {Fragment} from 'react';
import GroupProduct from '../component/GroupProduct';
import MainCarousel from './Home/MainCarousel';

const Home = (props) => {
  return (
    <Fragment>
    	<MainCarousel/>

    	<GroupProduct category="Mobile"/>
    	<GroupProduct category="Laptop"/>
    	<GroupProduct category="tablet"/>
    	<GroupProduct category="Accessories"/>
    </Fragment>
  )
}

export default Home;