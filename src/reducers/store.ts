import { createStore } from 'redux';
import rootRed, { getInitialState } from './rootRed';

export default createStore(rootRed, getInitialState());

