import React, { Component } from 'react';

import calculateIf from '../../../../../img/calculate-IF.png';
import impactFactorIcon from '../../../../../img/impactFactor-icon.svg';
import iconContent3 from '../../../../../img/icon-content-3.png';
import reportsIcon from '../../../../../img/reports-icon.svg';

class Three extends Component {
  render() {
    return (
        <div>
            <div className="row sect">
                <div className="col-md-12 topliner">
                    <h5>FOR EXAMPLE</h5>
                </div>
                <div className="col-md-12">
                    <h4>Calculation of 2018 IF of a journal:</h4>
                </div>
                <div className="col-md-4">
                    <p><strong>A</strong> = the number of times articles published in 2016 and 2017 
                    in a given journal were cited 
                    by indexed journals during 2018.</p>
                    <p>
                        <strong>B</strong> = the total number of “citable items” published in 2016 and 2017.
                    </p>
                </div>
                <div className="col-md-8">
                    <img src={calculateIf} className="img-responsive center-block"/>
                </div>
            </div>

            <div className="row sect">
                <div className="col-md-3">
                    <img src={impactFactorIcon} className="iconM"/>
                    <p>
                        The higher the impact factor, the more highly ranked the journal.  
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={iconContent3}/>
                    <p>
                        Only a small percentage (2% in 2016) of the over 12,000 journals tracked 
by JCR, have an IF of 10 or higher — around 30% have an IF of {'<'}1.
                    </p>
                </div>
                <div className="col-md-3">
                    <img src={reportsIcon} className="iconM"/>
                    <p>
                        The higher the impact factor, the more highly ranked the journal.  
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Three;
