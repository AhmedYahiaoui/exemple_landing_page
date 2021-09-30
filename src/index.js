import React from 'react';
import ReactDOM from 'react-dom';
// import NotExistFile from './FrontOffice/NavBar/404';
// import NotExistFile from './Components/404';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './App';
import { index_back } from './BackOffice/index_back';
import { index_front } from './FrontOffice/index_front';



// ReactDOM.render(<App />,document.getElementById('root'));

const rootElement = document.getElementById('root');


ReactDOM.render(
<BrowserRouter>
<Switch>
    <Route exact path="/" component={index_back} />
    <Route exact path="/user" component={index_back} />
    <Route path="/admin" component={index_front} />


    

    {/* <Route path="/admin" component={App} /> */}
    {/* <Route component={NotExistFile} /> */}
</Switch>
</BrowserRouter>, rootElement);


