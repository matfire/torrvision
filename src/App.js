import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import Viewer from './pages/Viewer'
import store from './store/store';
import Routes from './components/Routes';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;