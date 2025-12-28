import { data, indoLang, sasakLang } from "./data";

interface ConvLangAction {
  type: 'convLang';
  lang: string;
  dataLang?: any;
}

const rootRed = (state = data, action: ConvLangAction) => {
  if (action.type === "convLang") {
    switch (action.lang) {
      case "english":
        state = { ...state };
        state.lang = data.lang;
        break;
      case "indo":
        state = { ...state };
        state.lang = indoLang;
        break;
      case "sasak":
        state = { ...state };
        state.lang = sasakLang;
        break;
      case "arab":
        state = { ...state };
        state.lang = action.dataLang ? action.dataLang : (data.lang || state.lang);
        break;
      default:
        break;
    }
  }
  return state;
};

export default rootRed;
