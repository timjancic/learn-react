import React, { Component } from 'react';

//Example of Stateless Functional Component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge rounded-pill bg-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
