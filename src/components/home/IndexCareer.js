import React, {Component} from 'react';

import map from '../../../images/map.png';

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
							<img src={map} style={{width: '100%', paddingTop: 20}} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default IndexCareer;
