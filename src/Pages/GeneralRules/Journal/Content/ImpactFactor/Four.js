import React, { Component } from 'react';

import SvgTeste from './svg/Teste/Teste';
import SvgNoAcronyms from './svg/NoAcronyms/NoAcronyms';
import SvgWordLimit from './svg/WordLimit/WordLimit';

import rocketIcon from '../../../../../img/rocket-icon.svg';
import targetIcon from '../../../../../img/target-icon.svg';

class Four extends Component {
  render() {
    return (
        <div>
            <div className="row sect">
                <div className="col-md-12 topliner">
                    <h4>Impact Factor (IF) - Why is it important? </h4>
                </div>
                <div className="col-md-4">
                    <SvgWordLimit/>
                    <p>
                        The IF of a journal reflects how frequently peer-reviewed journals are cited by other researchers in a particular year and therefore is a benchmark of quality.   
                    </p>
                </div>
                <div className="col-md-4">
                    {/* <img src={targetIcon} className="img-responsive iconM"/> */}
                    <SvgNoAcronyms/>
                    <p>
                        Increasingly, IFs are being used 
as an objective measure in the evaluation of institutions and research groups/individuals.   
                    </p>
                </div>
                <div className="col-md-4">
                    <SvgTeste/>
                    <p>
                        The number of papers a researcher has published in high IF journals is often used as an objective measure in recruitment/promotion to higher academic positions as well as in the allocation of resources. 
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Four;
