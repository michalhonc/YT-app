import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
         <BrowserRouter>
            <Switch>
               <Route to="/" />
            </Switch>
         </BrowserRouter>
      </div>
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();

