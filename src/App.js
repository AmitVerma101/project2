import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
          <Route path="/business" element={<News pageSize="6" key="business" category="business"/>}> </Route>
          <Route path="/" element={<News pageSize="6" key="Home" category="general"/>}> </Route>

          <Route path="/general" element={<News pageSize="6" key="general" category="general"/>}> </Route>
          <Route path="/health" element={<News pageSize="6" key="health" category="health"/>}> </Route>
          <Route path="/science" element={<News pageSize="6" key="science" category="science"/>}> </Route>
          <Route path="/sports" element={<News pageSize="6" key="sports" category="sports"/>}> </Route>
          <Route path="/entertainment" element={<News pageSize="6" key="entertainment" category="entertainment"/>}> </Route>
          <Route path="/technology" element={<News pageSize="6" key="technology" category="technology"/>}> </Route>

        </Routes>
        </Router>
      </div>
    )
  }
}
