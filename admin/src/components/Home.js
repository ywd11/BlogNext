import React, {Component}  from 'react';
import Test from './Test';
class Home extends Component {
    constructor(porps) {
      super(porps)
      this.state = {
        value1: 10,
        value2: 20
      }
      this.store={
        age: 18
      }
    }
    onChange1 = (val) => {
      console.log('组件1:' + val)
      val = val ? parseInt(val) : ''
      this.setState({
        value1: val,
        value2: val - 10
      })
    }
    onChange2 = (val) => {
      console.log('组件2:' + val)
      val = val ? parseInt(val) : ''
      this.setState({
        value1: val + 10,
        value2: val
      })
    }
    render() {
        return (
            <div>
              <Test name="组件1" data={this.state.value1} onChange1={this.onChange1}/>
              <Test name="组件2" data={this.state.value2} onChange1={this.onChange2}/>
            </div>
        )
    }
}
export default Home;