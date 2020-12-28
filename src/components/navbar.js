import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

   render() {
      return (
         <nav className="navbar container">
            <Link to="/" className="navbar-brand">ExcerTracker</Link>
            <div className="navbar-links">
               <Link to="/" className="nav-link">Exercises</Link>
               <Link to="/create" className="nav-link">Create Exercise Log</Link>
               <Link to="/user" className="nav-link">Create User</Link>
            </div>
         </nav >
      )
   }
}