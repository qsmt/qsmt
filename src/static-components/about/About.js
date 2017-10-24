import React from 'react';
import { ImagePage } from '../../components';

import img from './about.jpg';
import image1 from './1.jpg';
import image2 from './2.png';
import image3 from './3.jpg';
import image4 from './4.png';

const data = [
	{
		title: '公司简介',
		image: image1,
	},
	{
		title: '资质荣誉',
		image: image2
	},
    {
        title: '专注领域',
        image: image3
    },
    {
        title: '优势价值',
        image: image4
    }
];

class About extends React.PureComponent {


	static path = '/about';

	render() {
		return (
			<div>
				<div>
					<img src={img} style={{width: '100%', height: '20vw'}} alt={''}/>
				</div>
				<ImagePage data={data}/>
			</div>
		)
	}



}

export default About;
