import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Square = styled.div`
      display: ${props => props.show ? 'block' : 'none'}
      position: absolute;
      z-index: 1;
      height: 375px;
      width: 350px;
      background: white;
      bottom: -180px;
      left: 50px;
    `;
    const AnchorSpan = styled.span`
      position: relative;
      width: 0;
      height: 0;
    `;
    return(
      <AnchorSpan>
        <Square show={this.props.show}> This is being shown</Square>
      </AnchorSpan>
    )
  }
}

export default Form
