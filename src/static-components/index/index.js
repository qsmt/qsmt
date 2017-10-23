import React, {PureComponent} from 'react';

import IndexCarousel from './carousel/IndexCarousel';
import IndexService from './IndexService';
import IndexAbout from '../about/IndexAbout';
import IndexPortfolio from '../portfolio/IndexPortfolio';
import IndexSolutions from '../solutions/IndexSolutions';
import IndexPartners from '../partners/IndexPartners';
import IndexCareer from '../career/IndexCareer';

class Index extends PureComponent {
	render() {
		return (
			<div>
				<IndexCarousel/>
				<IndexService/>
				<IndexAbout/>
				<IndexPortfolio/>
				<IndexSolutions/>
				<IndexPartners/>
				<IndexCareer/>
			</div>
		)
	}
}

export default Index;
