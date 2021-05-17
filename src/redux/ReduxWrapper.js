import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './root-reducer';

const createStore = () => reduxCreateStore(rootReducer);

const ReduxWrapper = ({ element }) => (
    <Provider store={createStore()}>{element}</Provider>
);

export default ReduxWrapper;