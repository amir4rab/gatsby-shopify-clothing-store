import { combineReducers } from 'redux';

import shopingCartReducer from './shopingCart/shopingCart.reducer';

export default combineReducers({
    shopingCart: shopingCartReducer
});