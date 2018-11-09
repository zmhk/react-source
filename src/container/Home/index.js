import React, { Component } from 'react';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  addCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }
  toAbout = () => {
     this.props.history.push("/about");
  }
  toControlPanel = () => {
     this.props.history.push("/controlpanel");
  }
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <div>{count}</div>
        <div className="btn-add" onClick={this.addCount}>+</div>
        <div className="to-about" onClick={this.toAbout}>关于</div>
        <div className="to-about" onClick={this.toControlPanel}>操作</div>
      </div>
    );
  }
}

export default App;
