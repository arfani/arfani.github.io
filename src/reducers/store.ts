import { createStore } from 'redux';
import { arabicLang, data, indoLang } from './data';
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
                case "arab":
                    initialState.lang = arabicLang;
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

