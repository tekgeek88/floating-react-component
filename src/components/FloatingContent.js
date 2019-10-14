import React, { Component } from 'react'

class FloatingContent extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isVisible: props.floatingContentIsVisible,
      x: props.floatingX,
      y: props.floatingY
    };
  }

  getStyle = () => {
    return {
      background: '#f4f4f4',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      position: 'absolute',
      display: this.props.floatingContentIsVisible ?
      'inline-block' : 'none',
      left: `${this.props.floatingX}px`,
      top: `${this.props.floatingY}px`
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        I am a floater!
      </div>
    )
  }
}

export default FloatingContent
