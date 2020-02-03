import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import store from './store';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>     
        </div>
      </BrowserRouter> 
    </Provider>    
  );
}

export default App;
