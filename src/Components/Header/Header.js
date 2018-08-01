import React, { Component } from 'react';
import LogoMenarini from '../../img/logo-menarini.png';

class Header extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-default">
            <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a href=""><img src={LogoMenarini} className="brand img-responsive"/></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">PROJECT OVERVIEW</a></li>
                <li className="active"><a href="#">GENERAL RULES</a></li>
                <li><a href="#">SPECIALIST AREA</a></li>
                <li><a href="#">ARTICLES</a></li>
                <li><a href="#">JOURNALS</a></li>
                <li><a href="#">QUIZ</a></li>
              </ul>
            </div>
          </div>
        </nav>
   </header>
    );
  }
}

export default Header;
