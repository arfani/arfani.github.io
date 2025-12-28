import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { convLang } from "../actions/rootAct";
import Main from "./Main";

interface AppProps {
  rootData: any;
  convertLang: (lang: string) => void;
}

class App extends Component<AppProps> {
  render() {
    const { rootData, convertLang } = this.props;
    return (
      <Router>
        <Main rootData={rootData} convertLang={convertLang} />
      </Router>
    );
  }
}

const mapState = (state: any) => {
  return { rootData: state };
};

const mapDispatch = (dispatch: any) => {
  return {
    convertLang: (lang: string) => dispatch(convLang(lang))
  };
};

export default connect(
  mapState,
  mapDispatch
)(App);
