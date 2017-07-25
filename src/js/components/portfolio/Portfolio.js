import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';

import IndexPortfolioItem from './PortfolioItem';

const categoryId = 3;
const pageSize = 3;

class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			activePage: 1
		};
		this.handleSelect = this.handleSelect.bind(this)
	}

	static path = '/portfolio';

	getUrl(pageno = 1) {
		return 'http://www.qsmttech.com/wp-json/wp/v2/posts?categories=' + categoryId +
			'&orderby=slug&order=asc&page=' +
			pageno + '&per_page=' + pageSize
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData(pageno = 1){
		const url = this.getUrl(pageno);
		fetch(url)
			.then(response => {
				const total = response.headers.get('X-WP-Total');
				const totalPages = Math.ceil(total / pageSize);
				this.setState({total, totalPages});
				return response.json()
			})
			.then(json => {
				this.setState({
					items: json,
					loading: false,
					select: 0
				});
			})
	}

	handleSelect(eventKey) {
		this.setState({
			activePage: eventKey,
			loading:true
		});
		this.fetchData(eventKey);
	}


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
								<Pagination
									prev
									next
									first
									last
									ellipsis
									boundaryLinks
									items={this.state.totalPages}
									maxButtons={5}
									activePage={this.state.activePage}
									onSelect={this.handleSelect}/>
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
		const items = this.state.items.map(item => (
			<IndexPortfolioItem key={item.id} {...item} />
		));
		return (
			<div className="row">
				{items}
			</div>
		)
	}

}

export default Portfolio;
