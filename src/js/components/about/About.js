import React, {PureComponent} from 'react';

import img from '../../../images/about/about.jpg';

class About extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	static path = '/about';

	componentDidMount() {
		fetch('http://www.qsmttech.com/wp-json/wp/v2/posts?categories=2&orderby=slug&order=asc&page=1&per_page=100')
			.then(response => response.json())
			.then(json => {
				this.setState({items: json, loading: false, select: 0});
			})
	}

	render() {
		return (
			<div>
				<div>
					<img src={img} style={{width: '100%', height: '20vw'}}/>
				</div>
				<div className="loading-container">
					{this.state.loading ?
						<div className="loading"/> :
						<div className="container">
							<div className="row">
								{this.state.items && this._renderNav()}
								{this._renderContent()}
							</div>
						</div>
					}
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
		const nav = this.state.items.map((item, index) => {
			const className = index === this.state.select ?
				"col-xs-3 col-sm-12 repeated-item active" :
				"col-xs-3 col-sm-12 repeated-item";
			return (
				<li key={item.id} className={className}>
					<a href="javascript:void(0)"
					   onClick={e => this.handleClick(index)}>{item.title.rendered}</a>
				</li>
			)
		})
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
						<h1>{this.state.items[this.state.select].title.rendered}</h1>
						<div className="divider"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12"
						 dangerouslySetInnerHTML={{
							 __html: this.state.items[this.state.select].content.rendered
						 }}
					/>
				</div>
			</div>
		)
	}
}

export default About;
