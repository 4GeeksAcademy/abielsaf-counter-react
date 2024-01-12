import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
<div className="counter">
	<div className="clock"><i class="fa-regular fa-clock"></i></div>
	<div className="four">{Math.floor(props.seconds /1000) %10}</div>
	<div className="three">{Math.floor(props.seconds /100) %10}</div>
	<div className="two">{Math.floor(props.seconds /10) %10}</div>
	<div className="one">{Math.floor(props.seconds /1) %10}</div>
</div>
	);
};

export default Home;
