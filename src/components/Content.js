import React, { Component } from 'react'
import FloatingComponent from './FloatingContent';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      floatingContentIsVisible: false,
      floatingX: null,
      floatingY: null
    }
  }

  getContentStyle = {
      position: 'relative',
      height: '250px',
      width: '250px',
      border: '1px solid red',
      backgroundColor: 'lightblue'
  };

  handleMouseMove = (e) => {
    e.persist();
    this.setState({
      floatingX: e.pageX,
      floatingY: e.pageY
    });
  }

  handleMouseEnter = (e) => {
    e.persist();
    this.setState({
      floatingContentIsVisible: true
    });
  }

  handleMouseLeave = (e) => {
    e.persist();
    this.setState({
      floatingContentIsVisible: false
    });
  }

  render() {
    return (
      <div 
        style={this.getContentStyle}
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        I am some content
        <ul>
          <li>Task 01</li>
          <li>Task 02</li>
          <li>Task 03</li>
        </ul>
        <div>
          some more stuff
        </div>
        
        <FloatingComponent 
          floatingContentIsVisible={this.state.floatingContentIsVisible}
          floatingX={this.state.floatingX}
          floatingY={this.state.floatingY}
          />

      </div>
    )
  }
}

export default Content
