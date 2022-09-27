import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='my-2' src={loading}  alt = "Loading "></img>
      </div>
    )
  }
}

