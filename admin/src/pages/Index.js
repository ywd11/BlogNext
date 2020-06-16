import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {cid: 123, title: 'title1'},
                {cid: 124, title: 'title2'},
                {cid: 125, title: 'title3'},
                {cid: 126, title: 'title4'},
            ]
        };
    }
    render() {
        return (
            <div>
                <ul>
                {
                    this.state.data.map((item) => {
                       return (
                       <li key={item.cid}>
                           <Link to={`list/${item.cid}`}>{item.title}</Link>
                       </li>
                       )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Index;