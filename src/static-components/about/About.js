import React from 'react';
import { SubNav, PageTitle } from '../../components';

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

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
            select: 0
		};
	}

	static path = '/about';

	render() {
		return (
			<div>
				<div>
					<img src={img} style={{width: '100%', height: '20vw'}} alt={''}/>
				</div>
				<div className="loading-container">
					<div className="container">
						<div className="row">
							<SubNav data={data} handleClick={this.handleClick} selectIndex={this.state.select}/>
							<div className="col-xs-12 col-sm-10">
								<PageTitle title={data[this.state.select].title}/>
								<div className="row">
									<div className="col-xs-12">
										<img src={data[this.state.select].image} alt={''} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	handleClick(index) {
		this.setState({
			select: index
		});
	}


}

export default About;
