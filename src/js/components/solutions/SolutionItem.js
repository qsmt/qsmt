import React from 'react';

// class SolutionItem extends React.Component{
// 	render(){
// 		return(
// 			<div className="col-sm-6 col-xs-12">
// 				<a href="">
// 					{this.props.title.rendered}
// 				</a>
// 			</div>
// 		)
// 	}
// }

const SolutionItem = (props)=>(
	<div className="col-sm-6 col-xs-12">
		<a href="">
			{props.title.rendered}
		</a>
	</div>
)

export default SolutionItem;
