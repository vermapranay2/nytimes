import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Sidebar from './components/SideNavPage'
import PanelPage from './components/Main'

class App extends Component {
  render() {
    return (
      <MDBContainer fluid  className="App">
        <MDBRow>
          <MDBCol size="2"><Sidebar/></MDBCol>
          <MDBCol size="10"><PanelPage/></MDBCol>
          
        </MDBRow>

        
      </MDBContainer>
      
    );
  }
}

export default App;
