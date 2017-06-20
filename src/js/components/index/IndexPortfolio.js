import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

class IndexPortfolio extends Component {

	componentDidMount() {
		fetch('http://www.qsmttech.com/wp-json/wp/v2/posts?categories=' + 3 +
			'&orderby=slug&order=asc' +
			'&page=' + 1 +
			'&per_page=' + 6)
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson)
				// this.setState({
				// 	loading: false,
				// 	data: responseJson,
				// 	dataSource: this.ds.cloneWithRows(responseJson),
				// })
			})
			.catch((error) => {
				// this.setState({
				// 	loading: false,
				// 	data: [],
				// 	dataSource: this.ds.cloneWithRows([]),
				// })
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
					<div className="row">
						<div portfolio-item ng-repeat="item in $ctrl.portfolios track by item.id" ng-model="item" />
					</div>
					<div className="row">
						<div className="anli-more text-center col-xs-12">
							<LinkContainer to="/portfolio" className="btn btn-default btn-lg">
								<a className="btn btn-default btn-lg">查看更多案例</a>
							</LinkContainer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

IndexPortfolio.propTypes = {};
IndexPortfolio.defaultProps = {};

export default IndexPortfolio;
