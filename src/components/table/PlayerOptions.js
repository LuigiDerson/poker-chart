import React, { Component } from 'react';

export default class PlayerOptions extends Component {
    render() {
        return (
            <div>
                <button disabled={this.props.current !== this.props.player} onClick={(e) => this.props.handleOption(e.target.name)} name="fold" >Fold</button>
                <button disabled={this.props.current !== this.props.player} onClick={(e) => this.props.handleOption(e.target.name)} name="call" >Call</button>
                <button disabled={this.props.current !== this.props.player} onClick={(e) => this.props.handleOption(e.target.name)} name="raise" >Raise</button>
            </div>
        );
    }
}
