import React from 'react';
import DemoImg from '../../assets/demo.JPG';
import Header from '../../components/Header/Header.jsx';
function Demo() {
	return (
		<div className="joinOuterContainer">
			<Header />
			<img
				src={DemoImg}
				alt="demo-jpg"
				style={{ height: '440px', marginLeft: '10px', marginRight: '10px' }}
			/>
		</div>
	);
}

export default Demo;
