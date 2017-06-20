import React, {PureComponent} from 'react';
import {Carousel} from 'react-bootstrap';

const slides = require('./data/carousels.json')
class IndexCarousel extends PureComponent {

	render() {
		const items = slides.map(item =>
			<Carousel.Item key={item.id}>
				<img src={item.image}/>
				{/*<Carousel.Caption>*/}
				{/*<h3>First slide label</h3>*/}
				{/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
				{/*</Carousel.Caption>*/}
			</Carousel.Item>
		);
		return (
			<Carousel>
				{items}
			</Carousel>
		)
	}
}

export default IndexCarousel;
