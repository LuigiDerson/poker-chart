import React, { Component } from 'react';

export default class PlayerOptions extends Component {
    render() {
        return (
            <div>
                <button onClick={(e) => this.props.handleOption(e.target.name)} name="fold" >Fold</button>
                <button onClick={(e) => this.props.handleOption(e.target.name)} name="call" >Call</button>
                <button onClick={(e) => this.props.handleOption(e.target.name)} name="raise" >Raise</button>
            </div>
        );
    }
}
