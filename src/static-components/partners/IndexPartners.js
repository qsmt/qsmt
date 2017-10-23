import React, {Component} from 'react';

import pinpai from './pinpai.jpg';
import {PageTitle} from "../../components";

class IndexPartners extends Component {
	render() {
		return (
			<div id="huoban">
				<div className="container">
					<PageTitle
						title={'伙伴计划'}
					/>
					<div className="row">
						<div className="col-xs-12">
							<img src={pinpai} style={{width: '100%', paddingTop: 20}} alt={''} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default IndexPartners;
