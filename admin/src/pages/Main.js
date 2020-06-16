
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import Layout from '../components/Layout'
function Main(){
    return (
        <Router>
            <Route path="/login/" exact component={Login} />
            <Route path="/index/" component={Layout} />
        </Router>
    )
}
export default Main