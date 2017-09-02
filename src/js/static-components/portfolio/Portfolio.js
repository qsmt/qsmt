import React, {Component} from 'react';

import PortfolioItem from './PortfolioItem';

import {portfolioData} from '../portfolio/portfolio-data';

class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state={
			items: portfolioData
		}
	}

	static path = '/portfolio';



	render() {
		return (
			<div className="loading-container">
				<div className="container">
					<div className="row">
						<div className="page-title col-xs-12">
							<h1>成功案例</h1>
							<div className="divider"></div>
						</div>
						{this.state.items &&
						<div className="container">
							<div className="row">
								{this._renderItems()}
							</div>
						</div>
						}
					</div>
				</div>
				{this.state.loading &&
				<div className="loading"/>}
			</div>
		)
	}

	_renderItems() {
		const items = this.state.items.map((item,i) => (
			<PortfolioItem key={i} src={item} />
		));
		return (
			<div className="row">
				{items}
			</div>
		)
	}

}

export default Portfolio;
