import { createStore } from 'redux';
import { data, indoLang, sasakLang } from './data';
import rootRed from './rootRed';

// Helper to get initial state with saved language preference
const getInitialState = () => {
    const initialState = { ...data };
    try {
        const savedLang = localStorage.getItem('preferredLang');
        if (savedLang) {
            switch (savedLang) {
                case "english":
                    initialState.lang = data.lang;
                    break;
                case "indo":
                    initialState.lang = indoLang;
                    break;
                case "sasak":
                    initialState.lang = sasakLang;
                    break;
                default:
                    initialState.lang = data.lang;
            }
        }
    } catch {
        console.log('Could not read language preference');
    }
    return initialState;
};

export default createStore(rootRed, getInitialState());
