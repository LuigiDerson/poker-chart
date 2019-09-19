import React, { Component } from 'react';

export default class PlayerOptions extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.fold}>Fold</button>
                <button>Call</button>
                <button>Raise</button>
            </div>
        );
    }
}
