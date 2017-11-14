import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';



const Header =() =>{
  return (
    <nav className="navigation">
        <IndexLink to="/" className="navlink" activeClassName="active">Available Now</IndexLink>
        {" | "}
        <Link to="/about" className="navlink" activeClassName="active">Book Room</Link>
        {" | "}
        <Link to="/courses" className="navlink" activeClassName="active">Dates</Link>
    </nav>
  );
};

export default Header;
