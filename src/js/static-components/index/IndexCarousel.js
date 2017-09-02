import React, {PureComponent} from 'react';
import {Carousel} from 'react-bootstrap';

const slides = require('./data/carousels.json');
import image0 from '../../../images/carousel1.png';
import image1 from '../../../images/carousel2.png';
import image2 from '../../../images/carousel3.png';
import image3 from '../../../images/carousel4.png';
import image4 from '../../../images/carousel5.png';
import image5 from '../../../images/carousel6.png';
const images = [
	image0,image1,image2,image3,image4,image5
];


class IndexCarousel extends PureComponent {

	render() {
		const items = slides.map((item,index) =>{

			return <Carousel.Item key={item.id}>
				<img src={images[index]}/>
				{/*<Carousel.Caption>*/}
				{/*<h3>First slide label</h3>*/}
				{/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
				{/*</Carousel.Caption>*/}
			</Carousel.Item>
		});
		return (
			<Carousel>
				{items}
			</Carousel>
		)
	}
}

export default IndexCarousel;
