import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
import { convLang, toggleDarkMode } from "../actions/rootAct";
import P404 from "./404";
import Certificates from "./Certificates";
import Experiences from "./Experiences";
import Home from "./Home";
import Main from "./Main";
import Portfolios from "./Portfolios";
import Services from "./Services";

interface AppProps {
  rootData: any;
  convertLang: (lang: string) => void;
  toggleDarkMode: () => void;
}

// Inner component that can use useNavigate
function AppInner({ rootData, convertLang, toggleDarkMode }: AppProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const restoredRef = useRef(false);

  useEffect(() => {
    // Only try to restore once on initial mount
    if (restoredRef.current) return;

    const fallbackPath = sessionStorage.getItem('spa_fallback_path');
    if (fallbackPath) {
      // Mark as restored to prevent multiple navigations
      restoredRef.current = true;
      // Clear immediately
      sessionStorage.removeItem('spa_fallback_path');
      // Navigate to the original path
      navigate(fallbackPath, { replace: true });
    }
  }, [navigate]);

  return (
    <Main
      rootData={rootData}
      convertLang={convertLang}
      toggleDarkMode={toggleDarkMode}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home data={rootData} />} />
        <Route path="/experiences" element={<Experiences data={rootData} />} />
        <Route path="/services" element={<Services data={rootData} />} />
        <Route path="/portfolios" element={<Portfolios data={rootData} />} />
        <Route path="/certificates" element={<Certificates data={rootData} />} />
        <Route path="*" element={<P404 data={rootData} />} />
      </Routes>
    </Main>
  );
}

// Connected version
const ConnectedApp = connect(
  (state: any) => ({ rootData: state }),
  (dispatch: any) => ({
    convertLang: (lang: string) => dispatch(convLang(lang)),
    toggleDarkMode: () => dispatch(toggleDarkMode())
  })
)(AppInner);

export default function App() {
  return (
    <Router>
      <ConnectedApp />
    </Router>
  );
}

