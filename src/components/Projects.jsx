import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div class="container">
    <div class="row">
      <div class="col-sm-3 project">
          <h1>120</h1>
          <hr className="divider"/>
        <p>Completed Projects</p>
      </div>
      <div class="col-sm-3 project other">
      <h1>18</h1>
      <hr className="divider"/>
        <p>Happy Customers</p>
      </div>
      <div class="col-sm-3 project">
      <h1>46</h1>
      <hr className="divider"/>
        <p>Billboards</p>
      </div>
      <div class="col-sm-3 project other">
      <h1>36</h1>
      <hr className="divider"/>
        <p>States</p>
      </div>
    </div>
  </div>
  )
}

export default Projects