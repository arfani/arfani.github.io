import { createStore } from 'redux';
import { data } from './data';
import rootRed from './rootRed';

export default createStore(rootRed, data);
