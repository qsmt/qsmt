import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IndexCareer extends Component {
	render() {
		return (
			<div id="jiaru">
				<div className="container">
					<div className="row">
						<div className="page-title col-xs-12">
							<h1>加入我们</h1>
							<div className="divider" />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<img src="images/map.png" style={{width: '100%', paddingTop: 20}} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

IndexCareer.propTypes = {};
IndexCareer.defaultProps = {};

export default IndexCareer;
