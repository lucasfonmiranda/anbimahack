import React, { Component } from 'react';
import Peperbse from './../components/Peperbse';

class Home extends Component {

    render() {
        return (
            <Peperbse history={this.props.history} parameter={this.props.match.params.route}/>
        )
    }
}

export default Home;
