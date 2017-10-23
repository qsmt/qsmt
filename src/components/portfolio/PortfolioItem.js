import React from 'react';

import defaultImage from '../../../images/no-image-box.png';

class PortfolioItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url:defaultImage
		};
	}

	componentDidMount(){
		if(this.props.featured_media){
			fetch('http://www.qsmttech.com/wp-json/wp/v2/media/' + this.props.featured_media)
				.then(response => response.json())
				.then(json => {
					this.setState({url:json.source_url})
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<div className="portfolio-item col-md-4 col-sm-6 col-xs-12">
				<div className="title">
					{this.props.title.rendered}
				</div>
				<div className="img">
					<img src={this.state.url} />
				</div>
			</div>
		);
	}
}

export default PortfolioItem;
