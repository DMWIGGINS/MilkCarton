import React, { Component } from 'react';

class Heading extends Component {
    render() {
        if (this.props.level === 1) {
            return (<h1>{this.props.children}</h1>);
        } else if (this.props.level === 2) {
            return (<h2>{this.props.children}</h2>);
        } else if (this.props.level === 3) {
            return (<h3>{this.props.children}</h3>);
        } else if (this.props.level === 4) {
            return (<h4>{this.props.children}</h4>);
        } else {
            return (<h5>{this.props.children}</h5>);
        }
    };
};
  
export default Heading;