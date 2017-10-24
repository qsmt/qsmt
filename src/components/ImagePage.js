import React from 'react';
import { SubNav, PageTitle } from './index';

class ImagePage extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            select: 0
        };
    }


    handleClick(index) {
        this.setState({
            select: index
        });
    }


    render(){
        return(
            <div className="loading-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <SubNav data={this.props.data} handleClick={this.handleClick} selectIndex={this.state.select}/>
                        </div>
                        <div className="col-xs-12 col-sm-10">
                            <PageTitle title={this.props.data[this.state.select].title}/>
                            <div className="row">
                                <div className="col-xs-12">
                                    <img src={this.props.data[this.state.select].image} alt={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImagePage;