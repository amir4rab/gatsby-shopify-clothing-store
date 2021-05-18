import React from 'react';
import { Provider } from 'react-redux'

import { store as reduxStore } from '../redux/store';


const Wrapper = ({ element }) => (
    <Provider store={reduxStore}>
        { element }
    </Provider>
);

export default Wrapper;