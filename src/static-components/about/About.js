import React from 'react';

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
							{this._renderNav()}
							{this._renderContent()}
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

	_renderNav() {
		const nav = data.map((item, index) => {
			const className = index === this.state.select ?
				"col-xs-3 col-sm-12 repeated-item active" :
				"col-xs-3 col-sm-12 repeated-item";
			return (
				<li key={index} className={className}>
					<a //href="javascript:void(0)"
					   onClick={e => this.handleClick(index)}>{item.title}</a>
				</li>
			)
		});
		return (
			<div className="col-xs-12 col-sm-2">
				<ul className="nav nav-pills qsmt-sub-nav">
					{nav}
				</ul>
			</div>
		);
	}

	_renderContent() {
		return (
			<div className="col-xs-12 col-sm-10">
				<div className="row">
					<div className="page-title col-xs-12">
						<h1>{data[this.state.select].title}</h1>
						<div className="divider"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<img src={data[this.state.select].image} alt={''} />
					</div>
				</div>
			</div>
		)
	}
}

export default About;
