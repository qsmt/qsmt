import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import {IndexPortfolioItem,Portfolio} from '../portfolio';

class IndexPortfolio extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount() {
		fetch('http://www.qsmttech.com/wp-json/wp/v2/posts?categories=' + 3 +
			'&orderby=slug&order=asc' +
			'&page=' + 1 +
			'&per_page=' + 6)
			.then((response) => response.json())
			.then(items => {
				this.setState({
					items
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}


	render() {
		return (
			<div id="anli" className="anli">
				<div className="container">
					<div className="row">
						<div className="page-title col-xs-12">
							<h1>成功案例</h1>
							<div className="divider" />
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

	_renderItems(){
		const items = this.state.items.map(item => (
			<IndexPortfolioItem key={item.id} {...item} />
		));
		return(
			<div className="row">
				{items}
			</div>
		)
	}

}


export default IndexPortfolio;
