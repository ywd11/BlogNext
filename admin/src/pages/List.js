import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import { range } from 'lodash'
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        this.setState({
            id: this.props.match.params.id
        })
    }
    render() {
        return (
            <div>
                {/* <Redirect to="/home/" /> */}
                List{this.state.id}
                {
                    console.log(range(10))
                }
            </div>
        );
    }
}

export default List;