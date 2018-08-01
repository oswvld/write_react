import React, { Component } from 'react';
import GeneralRules from './Pages/GeneralRules/GeneralRules';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectLogIn: true,
      firstLevel: 'general-rules',
    };
  }



  render() {
    if( this.state.redirectLogIn ){
      if( this.state.firstLevel == 'general-rules' ){
        return(
          <div className="App">
            <GeneralRules />
          </div>
        );
      }
    }
  }
}

export default App;
