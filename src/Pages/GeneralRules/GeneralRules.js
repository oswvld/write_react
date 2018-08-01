import React, { Component } from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import Sidebar from './Journal/Components/Sidebar/Sidebar';
import One from './Journal/Content/ImpactFactor/One';
import Two from './Journal/Content/ImpactFactor/Two';
import Three from './Journal/Content/ImpactFactor/Three';
import Four from './Journal/Content/ImpactFactor/Four';


class GeneralRules extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondLevel: 'journal',
            thirdLevel: 'impact-factor'
        };
    }

    render() {
        if( this.state.secondLevel == 'journal' ){
            switch( this.state.thirdLevel ){
                case 'impact-factor':
                    return (
                        <div>
                            <Header/>
                            <section className="container">
                                <div className="wrapper">
                                    <div className="content">
                                        <div className="blacklabel">Impact Factor</div>
                                        <One/>
                                        <Two/>
                                        <Three/>
                                        <Four/>
                                    </div>
                                    <Sidebar/>
                                </div>
                            </section>
                            <Footer/>
                        </div>
                    );
                break;

                default:
                break;
            }
        }
    }
}

export default GeneralRules;
