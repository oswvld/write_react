import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="col-md-2">
                <p>
                    <span className="title">CONTACT US</span><br/><br/>
                    +44 345 678 903<br/>
                    medicalwriting@mail.com<br/>
                    Ask for Assistance
                </p>
            </div>
            <div className="col-md-2">
              <ul>
                 <span className="title">SITEMAP</span><br/><br/>
                  <li><a href="#">Project Overview</a></li>
                  <li><a href="#">General Are</a>a</li>
                  <li><a href="#">Specialist Area</a></li>
                  <li><a href="#">The Journals</a></li>
              </ul>
          </div>
          <div className="col-md-2">
              <ul>
                  <span className="title">GENERAL AREA</span><br/><br/>
                  <li><a href="#">Medical Writing</a></li>
                  <li><a href="#">Journal</a></li>
                  <li><a href="#">Before {'&'} After</a></li>
              </ul>
          </div>
          <div className="col-md-2"> 
              <ul>
                 <span className="title">SPECIALIST AREA</span><br/><br/>
                  <li><a href="#">Generics</a></li>
                  <li><a href="#">Cardiology</a></li>
                  <li><a href="#">Internal</a></li>
              </ul>
          </div>
          <div className="col-md-2">
              <ul>
                 <span className="title">THE JOURNALS</span><br/><br/>
                  <li><a href="#">TOP 5 Global</a></li>
                  <li><a href="#">TOP 5 Specialist</a></li>
                  <li><a href="#">TOP 3 Country</a></li>
                  <li><a href="#">Recent Development</a></li>
              </ul>
          </div>
          <div className="col-md-2 copyrights">
             <p>© Menarini Group 2018</p>
          </div>
        </footer>
    );
  }
}

export default Footer;
