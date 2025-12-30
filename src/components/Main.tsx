import { Fragment } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import P404 from "./404";
import Certificates from "./Certificates";
import Experiences from "./Experiences";
import Home from "./Home";
import { Footer, Navbar } from "./layout";
import Portfolios from "./Portfolios";
import Services from "./Services";

interface RootData {
  lang: any;
  links: any;
  name: any;
  portfolios: any[];
}

interface MainProps {
  rootData: RootData;
  convertLang: (lang: string) => void;
}

export default function Main({ rootData, convertLang }: MainProps) {
  const location = useLocation();

  return (
    <Fragment>
      <Navbar data={rootData} convertLang={convertLang} />
      <div id="box" className='pt-20'>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home data={rootData} />}
          />
          <Route
            path="/experiences"
            element={<Experiences data={rootData} />}
          />
          <Route
            path="/services"
            element={<Services data={rootData} />}
          />
          <Route
            path="/portfolios"
            element={<Portfolios data={rootData} />}
          />
          <Route
            path="/certificates"
            element={<Certificates data={rootData} />}
          />
          <Route path="*" element={<P404 />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  )
}
