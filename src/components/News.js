import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container text-center ' >
            <h2>NewsMonkey-Top Headlines</h2>

        <NewsItem/>
      </div>
    )
  }
}
