import React, { Component } from 'react';
import Header from './Header';

import qIcon from '../../img/qicon.png';
import errorIcon from '../../img/error-icon.png';
import winIcon from '../../img/win-icon.png';

class GuessTheSolution1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: 'question'
        };
        
        this.clickTrue = this.clickTrue.bind(this);
        this.clickFalse = this.clickFalse.bind(this);
    }

    changeView( newState ) {
        this.state.view = newState;
    }

    clickTrue() {
        this.setState({
            view: 'true'
        });
    }

    clickFalse() {
        this.setState({
            view: 'false'
        });
    }

    render() {

        switch( this.state.view ){
            case 'question':
            return (
                <div>
                    <div className="row sect">
                        <div className="boxGame">
                            <Header/>
                            <div className="row contBox clearfix">                        
                                <div className="col-xs-2 qicon"><img src={qIcon} className="center-block"/></div>
                                <div className="col-xs-10 question">
                                    <span className="h-game">The Declaration of Helsinki states that ‘every clinical trial must be registered in a publicly accessible database such as before recruitment of the first subject’.</span>
                                    <div className="choose"> 
                                        <button className="btn btn-default btn-choose active" type="button" onClick={this.clickTrue}>TRUE</button> <button className="btn btn-default btn-choose" type="button" onClick={this.clickFalse}>FALSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

            break;

            case 'true':
                return (
                    <div>
                    <div className="row sect">
                        <div className="boxGame">
                            <Header/>
                            <div className="row contBox clearfix">                        
                            <div className="col-xs-2 qicon"><img src={winIcon} className="center-block"/></div>
                            <div className="col-xs-10 win">
                            <span className="h-game">The Declaration of Helsinki states that ‘every clinical 
trial must be registered in a publicly accessible 
database such as before recruitment of the first subject’.   </span>
                            <p className="correct"><i className="glyphicon glyphicon-ok-circle ok-icon"></i> TRUE</p>
                            </div>
                            <div className="btn-readmore">
                            <div className="bullet red"></div><div className="bullet black"></div> <a href="#">GO ON</a> 
                            <i className="glyphicon glyphicon-arrow-right" aria-hidden="true"></i>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                );
            break;

            case 'false':
                return (
                    <div>
                    <div className="row sect">
                        <div className="boxGame">
                            <Header/>
                            <div className="row contBox clearfix">                        
                            <div className="col-xs-2 qicon"><img src={errorIcon} className="center-block"/></div>
                            <div className="col-xs-10 error">
                            <span className="h-game">OPS! Wrong answer.</span><br/>
                            <span className="msg">Check correct answer in the Primary Literature section</span>
                        </div>
                        <div className="btn-readmore">
                            <div className="bullet red"></div><div className="bullet black"></div> <a href="#">Retry</a> <i className="glyphicon glyphicon-arrow-right" aria-hidden="true"></i>
                        </div>
                   </div>
                        </div>
                    </div>
                </div>
                );
            break;
        }
    }
}

export default GuessTheSolution1;
