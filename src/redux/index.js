import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import alertReducer from './alert/alertReducer';
import userReducer from './user/userReducer';
import tweetReducer from './tweet/tweetReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  user: userReducer,
  tweet: tweetReducer,
});

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}
export default store;
