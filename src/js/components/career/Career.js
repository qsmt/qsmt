import React,{Component} from 'react';

class Career extends Component{
	constructor(props) {
		super(props);
		this.state = {
			loading:true
		};
	}
	render(){
		return(
			<div className="loading-container">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-2">
							<ul className="nav nav-pills qsmt-sub-nav">
								{/*<li ng-repeat="item in $ctrl.data track by item.id" className="col-xs-3 col-sm-12 repeated-item" ng-class="{active:item === $ctrl.select}">*/}
									{/*<a href="javascript:void(0)" ng-click="$ctrl.select = item">{'{'}{'{'}item.title.rendered{'}'}{'}'}</a>*/}
								{/*</li>*/}
							</ul>
						</div>
						<div className="col-xs-12 col-sm-10">
							<div className="row">
								<div className="page-title col-xs-12">
									<h1>{'{'}{'{'}$ctrl.select.title.rendered{'}'}{'}'}</h1>
									<div className="divider" />
								</div>
							</div>
							<div className="row">
								{/*<div className="col-xs-12" ng-bind-html="$ctrl.select.content.rendered" />*/}
							</div>
						</div>
					</div>
				</div>
				{this.state.loading &&
				<div className="loading" />
				}
			</div>
		);
	}
}

export default Career;
