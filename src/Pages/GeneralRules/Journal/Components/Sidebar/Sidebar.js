import React, { Component } from 'react';

import whereToFindItIcon from '../../../../../img/where-to-findit-icon.svg';
import magazine from '../../../../../img/magazine.jpg';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarStatus: props.sidebarStatus
        };
    }

    render() {
        return (
            <div className="side">
            <div className="claim">
                <h3>Project Write: Everything you ever wanted to know about Impact factors -  but were afraid to ask.</h3>
            </div>
            <div className="box-siderbar impactF-sb">
                <h4>Impact Factor (IF)</h4>
                <img src={whereToFindItIcon} className="iconXL"/>
                <p><strong>WHERE TO FIND IT?</strong></p>
                <p>Impact factors are listed in Journal Citation Reports® (JCR) which includes more than 12,000 journals from 81 countries. Impact factors are also usually listed on individual journal publisher pages.</p>
                <div className="btn-readmore">
                    <div className="bullet red"></div><div className="bullet black"></div> <a href="#">Read More</a> <i className="glyphicon glyphicon-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
            <div className="box-siderbar top5global">
                <h4>Top 5 Global</h4>
                <img src={magazine}/>
                <p><strong>New England Journal of Medicine (NEJM)</strong></p>
                <ul>
                    <li>IF 72.46  (2016), highest among general medical journals.</li>
                    <li>NEJM is the most widely read, cited, and influential general medical periodical in the world.</li>
                </ul>
                <div className="btn-readmore">
                    <div className="bullet red"></div><div className="bullet black"></div> <a href="#">Read More</a> <i className="glyphicon glyphicon-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
          </div>
        );
    }
}

export default Sidebar;
