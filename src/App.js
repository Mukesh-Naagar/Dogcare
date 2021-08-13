import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import Footer from './Componets/Footer';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Page2 from './Componets/Page2';
import abtpage1 from './Componets/abtpage1';

function App() {
  return (
   

    <React.Fragment>

      <Router>

      <Navbar />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact}  />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/abtpage1" component={abtpage1} />
        </Switch>

        <Footer />
      </Router>

    

        
       
        

      
    </React.Fragment>
  );
}

export default App;
