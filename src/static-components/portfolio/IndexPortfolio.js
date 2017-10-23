import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import {PortfolioItem, Portfolio} from './index';
import {PageTitle} from "../../components";

import {portfolioData} from './portfolio-data';

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
					<PageTitle
						title={'成功案例'}
						description={'实施精细化运营 10年行业经验保障'}
					/>
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
