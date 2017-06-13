import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from './day'
class Row extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const boxes = this.props.days.map((day) => {
      return <Day key={day} date={day} />
    })
    console.log(this.props.days)
    return(
      <div>
        {boxes}
      </div>
    )
  }
}

export default Row
