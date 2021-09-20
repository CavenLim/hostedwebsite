
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import TaskCowDetails from './pages/TaskCowDetails';
import DogCommDetails from './pages/DogCommDetails';
import RpAppDetails from './pages/RpAppDetails';
import SolarEduDetails from'./pages/SolarEduDetails';
import DuckModeDetails from'./pages/DuckModeDetails';
import TaskCowPrivacy from'./pages/TaskCowPrivacy';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './Components/Footer';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Component } from 'react';
import DuckModePrivacy from './pages/DuckModePrivacy';


class App extends Component {
  render(){
    return(
        <HashRouter basename="/">
           <div>
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

          <Route path= "/taskcowprivacy">
            <TaskCowPrivacy />
          </Route>

          <Route path= "/duckmodeprivacy">
            <DuckModePrivacy />
          </Route>

          <Route path="/rpapp">
            <RpAppDetails />
          </Route>

         <Route path="/taskcow">
            <TaskCowDetails />
          </Route>

          <Route path="/duckmode">
            <DuckModeDetails />
          </Route>

          <Route path="/projects">
           <Projects />
         </Route>
         <Route path="/">
            <Home />
           </Route>

         

         </Switch>
        <Footer />

   

    </div>



        </HashRouter>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Router>
//         <NavBar />
//         <Switch>
//           <Route path={process.env.PUBLIC_URL+"/about"}>
//             <About />
//           </Route>

//           <Route path={process.env.PUBLIC_URL+ "/dogcomm"}>
//             <DogCommDetails />
//           </Route>

//           <Route path={process.env.PUBLIC_URL+ "/solaredu"}>
//             <SolarEduDetails />
//           </Route>

//           <Route path={process.env.PUBLIC_URL+ "/taskcowprivacy"}>
//             <TaskCowPrivacy />
//           </Route>

//           <Route path={process.env.PUBLIC_URL+"/rpapp"}>
//             <RpAppDetails />
//           </Route>

//           <Route path={process.env.PUBLIC_URL+"/taskcow"}>
//             <TaskCowDetails />
//           </Route>

//           <Route path={process.env.PUBLIC_URL+"/projects"}>
//             <Projects />
//           </Route>
//           <Route path={process.env.PUBLIC_URL+"/"}>
//             <Home />
//           </Route>

         

//         </Switch>
//         <Footer />

//       </Router>

//     </div>
//   );
// }

export default App;
