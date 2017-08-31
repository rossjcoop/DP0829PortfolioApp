import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/index.css';
import './styles/app.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import References from './components/References';
import Contact from './components/Contact';
import BaseLayout from './components/BaseLayout';


ReactDOM.render(


  <BrowserRouter>
  	<BaseLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/References" component={References} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
