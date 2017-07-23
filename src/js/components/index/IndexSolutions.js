import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Solutions} from '..';

class IndexSolutions extends Component {
	render() {
		return (
			<div id="fangan">
				<div className="container">
					<div className="row">
						<div className="page-title col-xs-12">
							<h1>解决方案</h1>
							<div className="divider" />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<div className="fangan-list">
								<ul>
									<li>甘肃科技馆展陈布展设计</li>
									<li>朔州科技馆概念设计方案第一名</li>
									<li>咸阳科技馆策划设计</li>
									<li>福建科技馆新馆 方案设计征集第一名</li>
									<li>黑龙江科技馆 总体策划第一名</li>
									<li>唐山科技馆 率先提出招投标流程</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<div className="anli-more text-center">
								<Link to={Solutions.path} className="btn btn-default btn-lg">查看更多解决方案</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

IndexSolutions.propTypes = {};
IndexSolutions.defaultProps = {};

export default IndexSolutions;
