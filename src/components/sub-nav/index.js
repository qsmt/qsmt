import React from 'react';
import PropTypes from 'prop-types';

import './sub-nav.css';

class SubNav extends React.Component{
    render(){
        const nav = this.props.data.map((item, index) => {
            const className = index === this.props.selectIndex ?
                "col-xs-3 col-sm-12 repeated-item active" :
                "col-xs-3 col-sm-12 repeated-item";
            return (
                <li key={index} className={className}>
                    <a //href="javascript:void(0)"
                        onClick={e => this.props.handleClick(index)}>{item.title}</a>
                </li>
            )
        });
        return (
            <div className="col-xs-12 col-sm-2">
                <ul className="nav nav-pills qsmt-sub-nav">
                    {nav}
                </ul>
            </div>
        )
    }
}

SubNav.propTypes = {
    data: PropTypes.array,
    handleClick: PropTypes.func.isRequired,
    selectIndex: PropTypes.number.isRequired
};

export default SubNav;