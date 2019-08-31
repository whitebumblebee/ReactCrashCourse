// for header we are using functional component. This is just like having render, We can use any style.
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff'
}

export default Header;