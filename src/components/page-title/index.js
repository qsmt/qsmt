import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class PageTitle extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="page-title col-xs-12">
                    <h1>{this.props.title}</h1>
                    <div className="divider"></div>
                    {this.props.description && <p>{this.props.description}</p>}
                </div>
            </div>
        );
    }
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default PageTitle;