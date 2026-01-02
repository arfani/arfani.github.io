import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { convLang, toggleDarkMode } from "../actions/rootAct";
import Main from "./Main";

interface AppProps {
  rootData: any;
  convertLang: (lang: string) => void;
  toggleDarkMode: () => void;
}

class App extends Component<AppProps> {
  render() {
    const { rootData, convertLang, toggleDarkMode } = this.props;
    return (
      <Router>
        <Main
          rootData={rootData}
          convertLang={convertLang}
          toggleDarkMode={toggleDarkMode}
        />
      </Router>
    );
  }
}

const mapState = (state: any) => {
  return { rootData: state };
};

const mapDispatch = (dispatch: any) => {
  return {
    convertLang: (lang: string) => dispatch(convLang(lang)),
    toggleDarkMode: () => dispatch(toggleDarkMode())
  };
};

export default connect(
  mapState,
  mapDispatch
)(App);
