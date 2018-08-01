import React, { Component } from 'react';

import studyIcon from '../../../../../img/study-icon.svg';

class Two extends Component {
  render() {
    return (
        <div>
            <div className="row sect">
                <div className="col-md-12 topliner">
                    <h4>Impact Factor (IF) - How is it calculated?</h4>
                </div>
            </div>

            <div className="row sect">
               <div className="col-md-1"></div>
                <div className="col-md-3">
                    <img src={studyIcon} className="iconXL"/>
                </div>
                <div className="col-md-6">
                    <p>
                        The IF is a measure of the frequency with which the average article in a journal has been cited in a particular year. It is used to measure the importance or rank of a journal by calculating the times its articles are cited. The calculation is based on a two-year period and involves dividing the number of times articles in a given journal were cited by the total number of articles that are citable.
                    </p>
                </div>
                <div className="<col-md-2></col-md-2>"></div>
            </div>

        </div>
    );
  }
}

export default Two;
