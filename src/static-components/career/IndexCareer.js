import React, {Component} from 'react';

import map from './map.png';
import {PageTitle} from "../../components";

class IndexCareer extends Component {
	render() {
		return (
			<div id="jiaru">
				<div className="container">
					<PageTitle
						title={'加入我们'}
						description={'创新的策划理念 专业的实施团队 丰富的项目经验'}
					/>
					<div className="row">
						<div className="col-xs-12">
							<img src={map} style={{width: '100%', paddingTop: 20}} alt={''} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default IndexCareer;
