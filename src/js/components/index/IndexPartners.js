import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IndexPartners extends Component {
	render() {
		return (
			<div id="huoban">
				<div className="container">
					<div className="row">
						<div className="page-title col-xs-12">
							<h1>伙伴计划</h1>
							<div className="divider" />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<img src="images/pinpai.jpg" style={{width: '100%', paddingTop: 20}} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

IndexPartners.propTypes = {};
IndexPartners.defaultProps = {};

export default IndexPartners;
