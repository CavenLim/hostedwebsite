
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import TaskCowDetails from './pages/TaskCowDetails';
import DogCommDetails from './pages/DogCommDetails';
import RpAppDetails from './pages/RpAppDetails';
import SolarEduDetails from'./pages/SolarEduDetails';
import TaskCowPrivacy from'./pages/TaskCowPrivacy';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/dogcomm">
            <DogCommDetails />
          </Route>

          <Route path="/solaredu">
            <SolarEduDetails />
          </Route>

          <Route path="/taskcowprivacy">
            <TaskCowPrivacy />
          </Route>

          <Route path="/rpapp">
            <RpAppDetails />
          </Route>

          <Route path="/taskcow">
            <TaskCowDetails />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>

         

        </Switch>
        <Footer />

      </Router>

    </>
  );
}

export default App;
