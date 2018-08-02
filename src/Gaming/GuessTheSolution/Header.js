import React, { Component } from 'react';

import QwizLogoXS from '../../img/qwiz-logoxs.png';
import iconHead from '../../img/game-iconHead.png';
import pifIconHead from '../../img/pif-iconHead.png';

class Header extends Component {
  render() {
    return (
        <div className="row headBox">
            <div className="col-xs-2 brand"><img src={QwizLogoXS} className="img-responsive center-block"/></div>
            <div className="col-xs-10 title">
            <div className="name"><img src={iconHead}/> Guess the solution</div>
            <div className="pif"><img src={pifIconHead}/>PIF: <span className="points">1</span></div>
            </div>
        </div>
    );
  }
}

export default Header;
