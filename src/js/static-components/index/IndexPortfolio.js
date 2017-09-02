import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import {PortfolioItem, Portfolio} from '../portfolio';

import {portfolioData} from '../portfolio/portfolio-data';

class IndexPortfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: portfolioData
		};
	}


	render() {
		return (
			<div id="anli" className="anli">
				<div className="container">
					<div className="row">
						<div className="page-title col-xs-12">
							<h1>成功案例</h1>
							<div className="divider"/>
							<p>
								实施精细化运营 10年行业经验保障
							</p>
						</div>
					</div>
					{this.state.items &&
					this._renderItems()
					}
					<div className="row">
						<div className="anli-more text-center col-xs-12">
							<LinkContainer to={Portfolio.path} className="btn btn-default btn-lg">
								<a className="btn btn-default btn-lg">查看更多案例</a>
							</LinkContainer>
						</div>
					</div>
				</div>
			</div>
		);
	}

	_renderItems() {
		const items = this.state.items.map((item, i) => (
			<PortfolioItem key={i} src={item}/>
		));
		return (
			<div className="row">
				{items}
			</div>
		)
	}

}


export default IndexPortfolio;
