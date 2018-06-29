import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import FullWidthGrid from './components/FullWidthGrid';
import Typography from '@material-ui/core/Typography';


class App extends Component {
  render() {
    return (
      <div className="App">        
        <ButtonAppBar> </ButtonAppBar>
        <Typography variant="heading" gutterBottom>
          
        </Typography>        
        <FullWidthGrid> </FullWidthGrid>
      </div>
    );
  }
}

export default App;


