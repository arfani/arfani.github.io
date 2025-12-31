import { arabicLang, data, indoLang, sasakLang } from "./data";

interface ConvLangAction {
  type: 'convLang';
  lang: string;
  dataLang?: any;
}

const rootRed = (state = data, action: ConvLangAction) => {
  if (action.type === "convLang") {
    let newLang;
    switch (action.lang) {
      case "english":
        newLang = data.lang;
        break;
      case "indo":
        newLang = indoLang;
        break;
      case "sasak":
        newLang = sasakLang;
        break;
      case "arab":
        newLang = arabicLang;
        break;
      default:
        newLang = data.lang;
    }

    // Save language preference to localStorage
    try {
      localStorage.setItem('preferredLang', action.lang);
    } catch {
      console.log('Could not save language preference');
    }

    return { ...state, lang: newLang };
  }
  return state;
};

export default rootRed;

// Helper function to get initial language from localStorage
export const getInitialLang = () => {
  try {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
      switch (savedLang) {
        case "english":
          return data.lang;
        case "indo":
          return indoLang;
        case "sasak":
          return sasakLang;
        case "arab":
          return arabicLang;
        default:
          return data.lang;
      }
    }
  } catch {
    console.log('Could not read language preference');
  }
  return data.lang;
};
