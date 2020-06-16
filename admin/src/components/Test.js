import React, { Component } from 'react';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    onChange = (e) => {
    //   console.log(e.target.value)
      this.props.onChange1(e.target.value)
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <input value={this.props.data} onChange={this.onChange} />
            </div>
        );
    }
}

export default Test;