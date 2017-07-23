import React, { Component } from 'react';

class Portfolio extends Component{

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	static path = '/portfolio';

	componentDidMount() {
		fetch('http://www.qsmttech.com/wp-json/wp/v2/posts?categories=2&orderby=slug&order=asc&page=1&per_page=100')
			.then(response => response.json())
			.then(json => {
				this.setState({items: json, loading: false, select: 0});
			})
	}

    render(){
        return(
            <div>Portfolio</div>
        )
    }
}

export default Portfolio;
