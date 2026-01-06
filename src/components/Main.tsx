import { Fragment, ReactNode } from 'react';
import { Footer, Navbar } from "./layout";

interface RootData {
  lang: any;
  links: any;
  name: any;
  portfolios: any[];
  isDarkMode?: boolean;
}

interface MainProps {
  rootData: RootData;
  convertLang: (lang: string) => void;
  toggleDarkMode: () => void;
  children?: ReactNode;
}

export default function Main({ rootData, convertLang, toggleDarkMode, children }: MainProps) {
  return (
    <Fragment>
      <Navbar
        data={rootData}
        convertLang={convertLang}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={rootData.isDarkMode}
      />
      <div id="box" className={`pt-20 min-h-screen ${rootData.isDarkMode ? 'dark bg-gray-900' : ''}`}>
        {children}
      </div>
      <Footer data={rootData} />
    </Fragment>
  )
}

