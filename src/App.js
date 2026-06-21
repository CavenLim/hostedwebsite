
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import TaskCowDetails from './pages/TaskCowDetails';
import FilmishDetails from './pages/FilmishDetails';
import RpAppDetails from './pages/RpAppDetails';
import SolarEduDetails from'./pages/SolarEduDetails';
import DuckModeDetails from'./pages/DuckModeDetails';
import MrtInSgDetails from './pages/MrtInSgDetails';
import DogCommTwoDetails from'./pages/DogCommTwoDetails';
import TaskCowPrivacy from'./pages/TaskCowPrivacy';
import TaccedPrivacy from'./pages/TaccedPrivacy';
import ErrorFallbackPage from './pages/404Page';
import About from './pages/About';
import Projects from './pages/Projects';
import SSCPage from './pages/SSCPage';

import Footer from './Components/Footer';
import { BrowserRouter, BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Component,useState } from 'react';
import DuckModePrivacy from './pages/DuckModePrivacy';
import FilmishPrivacy from './pages/Filmish';
import MrtInSgPrivacy from './pages/MrtInSgPrivacy';





class App extends Component {
  
  render(){
    
 
    return(
        <HashRouter basename="/">
           <div>
        
        <Switch>
         <Route exact path="/about">
         <NavBar/>
             <About />
          </Route>


           <Route exact path="/dogcomm">
          <NavBar title="DogComm"/>
            <DogCommTwoDetails />
           </Route>

          <Route exact path="/solaredu">
          <NavBar title="SolarEdu"/>
           <SolarEduDetails />
          </Route>

          <Route exact path= "/taskcowprivacy">
          <NavBar title="TaskCow"/>
            <TaskCowPrivacy />
          </Route>

          <Route exact path= "/duckmodeprivacy">
          <NavBar title="DuckMode"/>
            <DuckModePrivacy />
          </Route>

          <Route exact path= "/taccedprivacy">
          <NavBar title="Tacced"/>
            <TaccedPrivacy />
          </Route>

          <Route exact path= "/filmishprivacy">
          <NavBar title="Filmish"/>
            <FilmishPrivacy />
          </Route>

            <Route exact path= "/mrtinsgprivacy">
          <NavBar title="MrtInSg"/>
            <MrtInSgPrivacy />
          </Route>

          <Route exact path="/rpapp">
          <NavBar title="RpApp"/>
            <RpAppDetails />
          </Route>

         <Route exact path="/taskcow">
         <NavBar title="TaskCow"/>
            <TaskCowDetails />
          </Route>

          <Route exact path="/filmish">
         <NavBar title="Filmish"/>
            <FilmishDetails />
          </Route>

           <Route exact path="/mrtinsg">
         <NavBar title="MrtInSg"/>
            <MrtInSgDetails />
          </Route>

          <Route exact path="/duckmode">
          <NavBar title="DuckMode"/>
            <DuckModeDetails />
          </Route>

          <Route exact path="/projects">
          <NavBar/>
           <Projects />
         </Route>

         <Route exact path="/ssc2022">
          <NavBar/>
           <SSCPage />
         </Route>


         <Route exact path="/home">
         <NavBar/>
            <Home />
           </Route>

           <Route exact path="/" render={() => (<Redirect to="/home" />)}>
            <NavBar/>
            <Home />
           </Route>

            {/* *handle non exisitng pages* */}

          <Route component={ErrorFallbackPage}>
   
          </Route>
         


         </Switch>
        <Footer />

   

    </div>



        </HashRouter>
    );
  }
}


export default App;
