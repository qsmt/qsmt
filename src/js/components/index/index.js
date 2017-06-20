import React, {PureComponent} from 'react';

import IndexCarousel from './IndexCarousel';
import IndexService from './IndexService';
import IndexAbout from './IndexAbout';
import IndexPortfolio from './IndexPortfolio';
import IndexSolutions from './IndexSolutions';
import IndexPartners from './IndexPartners';
import IndexCareer from './IndexCareer';

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
