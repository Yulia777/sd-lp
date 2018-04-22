import React from 'react';
import  {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middleWare from 'redux-thunk';
import reducers from './reducers';
import MyApp from './components/MyApp';

const store = createStore(reducers, {}, applyMiddleware(middleWare));

const App = () => <MyApp/>;



render(<Provider store={store}><App/></Provider>, document.getElementById('app'));