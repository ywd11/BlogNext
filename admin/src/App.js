import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './pages/Main'
// import Index from './pages/Index'
// import List from './pages/List'
// import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <Main />
      {/* <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/123">列表</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/:id" component={List} />
        <Route path="/home" component={Home} />
      </Router> */}
    </div>
  );
}

export default App;
