import React, {Component} from 'react';
import {SubNav, PageTitle} from '../../components';

import image1 from '../../static-components/partners/1.jpg';
import image2 from '../../static-components/partners/2.png';

const data = [
    {
        title: '伙伴计划',
        image: image1,
    },
    {
        title: '合作品牌',
        image: image2
    },
];

class Partners extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            select: 0
        };
    }

    static path = '/partners';


    render() {
        return (
            <div className="loading-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-2">
                            <SubNav data={data} handleClick={this.handleClick} selectIndex={this.state.select}/>
                        </div>
                        <div className="col-xs-12 col-sm-10">
                            <PageTitle title={data[this.state.select].title}/>
                            <div className="row">
                                <div className="col-xs-12">
                                    <img src={data[this.state.select].image} alt={''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleClick(index) {
        this.setState({
            select: index
        });
    }

}

export default Partners;
