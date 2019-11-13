import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from "react-bootstrap/Container"
import NavBar from './components/NavBar';
import GroupPage from './components/GroupPage'
import RoundsPage from './components/RoundsPage'
import RoundScorePage from './containers/RoundScorePage'
import IntermediateScorePage from './components/IntermediateScorePage'
import FinalScorePage from './components/FinalScorePage'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Container className="App">
        <NavBar />
        <Container className="main-content">
          <Switch>
            <Route path="/groups">
              <GroupPage />
            </Route>
            <Route path="/rounds">
              <RoundsPage />
            </Route>
            <Route path="/roundscore/:round" component={RoundScorePage} />
            <Route path="/intermediatescore" component={IntermediateScorePage} />
            <Route path="/finalscore" component={FinalScorePage} />
          </Switch>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
