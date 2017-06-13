import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Form from './form'
const Box = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
`;

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({show: !this.state.show})
  }

  render() {
    const { show } = this.state
    return(
      <Box onClick={this.handleClick}>
        {this.props.date}
        <Form show={show}/>
      </Box>
    )
  }
}

export default Day
