import { useEffect, useState } from "react";

interface PortfolioItem {
  name: string;
  linkDemo: string;
  linkDownload: string;
  imgName: string;
  title: string;
  tech: string;
  faIcon: string;
}

interface PortfoliosProps {
  data: {
    portfolios: PortfolioItem[];
    lang: {
      menus: string[];
      portfolioEmptyTitle: string;
      portfolioEmptyDesc: string;
      loadingPortfolio: string;
      viewLiveDemo: string;
      demoNotAvailable: string;
      portfolioHeaderBadge: string;
      portfolioHeaderDesc: string;
      portfolioStatsBadge: string;
      portfolioStatsTitle: string;
      statCompletedProjects: string;
      statClientSatisfaction: string;
      statSupportAvailable: string;
      statYearsExperience: string;
      portfolioCtaTitle: string;
      portfolioCtaDesc: string;
      portfolioCtaButton: string;
    };
  };
}

export default function Portfolios({ data }: PortfoliosProps) {
  const [isLoading, setIsLoading] = useState(true);
  const EXPERIENCE_START_YEAR = 2017 // First job started in Sep 2017
  const yearsExperience = new Date().getFullYear() - EXPERIENCE_START_YEAR

  useEffect(() => {
    document.title = `rfun - ${data.lang.menus[3]}`;

    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [data.lang.menus]);

  if (!data.portfolios || data.portfolios.length === 0) {
    return (
      <div id="portfolios" className={`min-h-screen bg-gradient-to-br ${data.isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-gray-50 via-purple-50 to-blue-50'}`}>
        <div className="pt-20 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${data.isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 sm:p-16 shadow-xl`}>
              <div className={`w-20 h-20 sm:w-24 sm:h-24 ${data.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className={`fa fa-folder-open text-4xl sm:text-5xl ${data.isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></span>
              </div>
              <h1 className={`text-3xl sm:text-4xl font-bold ${data.isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>{data.lang.menus[3]}</h1>
              <h4 className={`text-xl sm:text-2xl ${data.isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{data.lang.portfolioEmptyTitle}</h4>
              <p className={`text-lg ${data.isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.lang.portfolioEmptyDesc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Portfolio = data.portfolios?.map((item: PortfolioItem, i: number) => (
    <div key={i} className="group">
      <div className={`${data.isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border h-full relative overflow-hidden`}>
        {/* Decorative gradient border on top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Project icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/30">
            <span className={`fa ${item.faIcon} text-2xl sm:text-3xl text-white`} />
          </div>
          {/* Floating badge */}
          {item.linkDemo !== '#' && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="fa fa-external-link text-white text-xs"></span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-center">
          <h5
            className={`text-lg sm:text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></h5>
          <div className={`inline-flex items-center ${data.isDarkMode ? 'bg-gray-700 text-purple-300' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
            <span className="fa fa-code mr-2"></span>
            {item.tech}
          </div>
        </div>

        {/* Action button */}
        {item.linkDemo !== '#' ? (
          <div className="mt-6">
            <a
              href={item.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              <span className="fa fa-external-link text-lg"></span>
              <span>{data.lang.viewLiveDemo}</span>
            </a>
          </div>
        ) : (
          <div className="mt-6">
            <div className={`w-full inline-flex items-center justify-center gap-2 ${data.isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'} px-6 py-3 rounded-xl font-semibold cursor-not-allowed`}>
              <span className="fa fa-lock text-lg"></span>
              <span>{data.lang.demoNotAvailable}</span>
            </div>
          </div>
        )}

        {/* Hover overlay effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none ${data.isDarkMode ? 'dark:bg-purple-900/20' : ''}`}></div>
      </div>
    </div>
  ));

  if (isLoading) {
    return (
      <div id="portfolios" className={`min-h-screen bg-gradient-to-br ${data.isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-gray-50 via-purple-50 to-blue-50'}`}>
        <div className="pt-20 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${data.isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 sm:p-16 shadow-xl`}>
              <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-6"></div>
              <h1 className={`text-3xl sm:text-4xl font-bold ${data.isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>{data.lang.menus[3]}</h1>
              <p className={`text-lg ${data.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{data.lang.loadingPortfolio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="portfolios" className={`min-h-screen bg-gradient-to-br ${data.isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-gray-50 via-purple-50 to-blue-50'}`}>
      {/* Header Section */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-flex items-center ${data.isDarkMode ? 'bg-purple-800/50 text-purple-200' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            {data.lang.portfolioHeaderBadge}
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {data.lang.menus[3]}
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${data.isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {data.lang.portfolioHeaderDesc}
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Portfolio}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-12 px-4 sm:px-6 lg:px-8 ${data.isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className={`inline-flex items-center ${data.isDarkMode ? 'bg-orange-800/50 text-orange-200' : 'bg-orange-100 text-orange-700'} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
              <span className="fa fa-chart-bar mr-2"></span>
              {data.lang.portfolioStatsBadge}
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>{data.lang.portfolioStatsTitle}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: data.portfolios.length, label: data.lang.statCompletedProjects, icon: "fa-check-circle", color: "from-blue-500 to-blue-600" },
              { number: "100%", label: data.lang.statClientSatisfaction, icon: "fa-heart", color: "from-red-500 to-pink-500" },
              { number: "24/7", label: data.lang.statSupportAvailable, icon: "fa-headset", color: "from-green-500 to-emerald-500" },
              { number: `${yearsExperience}+`, label: data.lang.statYearsExperience, icon: "fa-calendar", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`group text-center p-4 sm:p-6 rounded-2xl ${data.isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 border ${data.isDarkMode ? 'border-gray-600' : 'border-gray-100'}`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className={`fa ${stat.icon} text-white text-xl`}></span>
                </div>
                <div className={`text-2xl sm:text-3xl font-bold mb-2 ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>{stat.number}</div>
                <p className={`font-medium text-sm ${data.isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 translate-y-16"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mx-auto mb-6">
                <span className="fa fa-lightbulb text-white text-3xl"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{data.lang.portfolioCtaTitle}</h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                {data.lang.portfolioCtaDesc}
              </p>
              <a
                href="https://wa.me/6281907456710?text=Hi%20Arfan,%20I%20have%20a%20project%20idea%20I'd%20like%20to%20discuss"
                className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="fa fa-rocket text-lg"></span>
                {data.lang.portfolioCtaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

