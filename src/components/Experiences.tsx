import { useEffect } from "react";

interface ExperiencesProps {
  data: any;
}

export default function Experiences({ data }: ExperiencesProps) {

  useEffect(() => {
    document.title = `rfun - ${data.lang.menus[1]}`
  })

  const { itemWorks, itemEdu } = data.lang

  const ItemWork = itemWorks?.map((work: any, i: number) => (
    <div key={i} className="relative pl-8 pb-8 group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>

      {/* Timeline line */}
      {i < itemWorks.length - 1 && (
        <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-blue-300 via-blue-200 to-transparent"></div>
      )}

      {/* Content card */}
      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-blue-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <h5 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {work.title}
          </h5>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
            <span className="fa fa-calendar mr-2"></span>
            {work.period}
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="fa fa-building mr-2 text-blue-500"></span>
          <span className="font-medium">{work.company}</span>
        </div>
      </div>
    </div>
  ));

  const ItemEdu = itemEdu?.map((edu: any, i: number) => (
    <div key={i} className="relative pl-8 pb-8 group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>

      {/* Timeline line */}
      {i < itemEdu.length - 1 && (
        <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-green-300 via-green-200 to-transparent"></div>
      )}

      {/* Content card */}
      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-green-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <h5 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
            {edu.title}
          </h5>
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            <span className="fa fa-calendar mr-2"></span>
            {edu.period}
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="fa fa-graduation-cap mr-2 text-green-500"></span>
          <span className="font-medium">{edu.school}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="exp" className={`min-h-screen bg-gradient-to-br ${data.isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-gray-50 via-blue-50 to-green-50'}`}>
      {/* Header Section */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-flex items-center ${data.isDarkMode ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-700'} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
            <span className="fa fa-road mr-2"></span>
            {data.lang.expHeaderBadge}
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {data.lang.menus[1]}
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${data.isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {data.lang.expHeaderDesc}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className={`${data.isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 sm:p-8 shadow-xl`}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="fa fa-briefcase text-white text-xl"></span>
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>{data.lang.subtitleWork}</h2>
                  <p className={`text-sm ${data.isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.lang.expWorkDesc}</p>
                </div>
              </div>
              <div className="relative">
                {ItemWork}
              </div>
            </div>

            {/* Education */}
            <div className={`${data.isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 sm:p-8 shadow-xl`}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="fa fa-graduation-cap text-white text-xl"></span>
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>{data.lang.subtitleEdu}</h2>
                  <p className={`text-sm ${data.isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.lang.expEduDesc}</p>
                </div>
              </div>
              <div className="relative">
                {ItemEdu}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Summary Section - Enhanced */}
      <div className={`py-12 px-4 sm:px-6 lg:px-8 ${data.isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className={`inline-flex items-center ${data.isDarkMode ? 'bg-orange-800 text-orange-200' : 'bg-orange-100 text-orange-700'} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
              <span className="fa fa-cogs mr-2"></span>
              {data.lang.skillsBadge}
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold ${data.isDarkMode ? 'text-white' : 'text-gray-800'}`}>{data.lang.expSkillsTitle}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { skill: "skillFullStack", icon: "fa-code", color: "from-blue-500 to-blue-600", useFa: true },
              { skill: "skillNextJs", icon: "nextjs.svg", color: "from-gray-800 to-gray-900", isWordmark: false },
              { skill: "skillLaravel", icon: "laravel.svg", color: "from-red-500 to-red-600", isOriginal: true },
              { skill: "skillSlicing", icon: "figma.svg", color: "from-pink-500 to-pink-600", isWordmark: false },
              { skill: "skillDatabase", icon: "mysql.svg", color: "from-cyan-400 to-cyan-500", isWordmark: false },
              { skill: "skillApi", icon: "fa-plug", color: "from-purple-500 to-purple-600", useFa: true },
              { skill: "skillArchitecture", icon: "docker.svg", color: "from-blue-600 to-blue-700", isWordmark: false },
              { skill: "skillLeadership", icon: "fa-users", color: "from-orange-500 to-orange-600", useFa: true }
            ].map((item, index) => (
              <div
                key={index}
                className={`group text-center p-4 sm:p-6 rounded-2xl ${data.isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 border ${data.isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-100 hover:border-gray-200'}`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.useFa ? (
                    <span className={`fa ${item.icon} text-white text-xl`}></span>
                  ) : item.isOriginal ? (
                    <img src={`/icons/${item.icon}`} alt={data.lang[item.skill as keyof typeof data.lang]} className="w-9 h-9 brightness-110 contrast-125" />
                  ) : item.isWordmark ? (
                    <img src={`/icons/${item.icon}`} alt={data.lang[item.skill as keyof typeof data.lang]} className="w-14 h-6" />
                  ) : (
                    <img src={`/icons/${item.icon}`} alt={data.lang[item.skill as keyof typeof data.lang]} className="w-8 h-8" />
                  )}
                </div>
                <p className={`font-semibold text-sm ${data.isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{data.lang[item.skill as keyof typeof data.lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 translate-y-16"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mx-auto mb-6">
                <span className="fa fa-handshake text-white text-3xl"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{data.lang.expCtaTitle}</h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                {data.lang.expCtaDesc}
              </p>
              <a
                href="https://wa.me/6281907456710?text=Hi%20Arfan,%20I'm%20interested%20in%20discussing%20a%20project"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="fa fa-whatsapp text-lg"></span>
                {data.lang.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

