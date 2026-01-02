import { arabicLang, data, indoLang } from "./data";

interface ConvLangAction {
  type: 'convLang';
  lang: string;
  dataLang?: any;
}

interface ToggleDarkModeAction {
  type: 'toggleDarkMode';
}

interface RootState {
  name: { first: string; middle: string; last: string; };
  links: { github: string; };
  portfolios: { name: string; linkDemo: string; linkDownload: string; imgName: string; title: string; tech: string; faIcon: string; }[];
  lang: any;
  isDarkMode?: boolean;
}

const rootRed = (state: RootState = { ...data, isDarkMode: false }, action: ConvLangAction | ToggleDarkModeAction): RootState => {
  if (action.type === "convLang") {
    let newLang;
    switch (action.lang) {
      case "english":
        newLang = data.lang;
        break;
      case "indo":
        newLang = indoLang;
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

  if (action.type === "toggleDarkMode") {
    // Toggle dark mode
    const newDarkMode = !state.isDarkMode;

    // Save dark mode preference to localStorage
    try {
      localStorage.setItem('preferredDarkMode', newDarkMode.toString());
    } catch {
      console.log('Could not save dark mode preference');
    }

    return { ...state, isDarkMode: newDarkMode };
  }

  return state;
};

export default rootRed;

// Helper function to get initial state with saved preferences
export const getInitialState = (): RootState => {
  const initialState: RootState = { ...data, isDarkMode: false };

  try {
    // Get saved language
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

    // Get saved dark mode
    const savedDarkMode = localStorage.getItem('preferredDarkMode');
    if (savedDarkMode !== null) {
      initialState.isDarkMode = savedDarkMode === 'true';
    } else {
      // Check system preference by default
      initialState.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } catch {
    console.log('Could not read preferences');
    initialState.isDarkMode = false;
  }

  return initialState;
};

