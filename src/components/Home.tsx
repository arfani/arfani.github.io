import { useEffect, useState } from "react";

interface HomeProps {
  data: any;
}

export default function Home({ data }: HomeProps) {

  const [linkWa, setLinkWa] = useState("https://web.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20")
  const pp = "/src/assets/images/arfan.webp"
  const EXPERIENCE_START_YEAR = 2017 // First job started in Sep 2017
  const yearsExperience = new Date().getFullYear() - EXPERIENCE_START_YEAR

  useEffect(() => {
    const isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i);
    if (isMobile) {
      setTimeout(() => {
        setLinkWa("https://api.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20");
      }, 0);
    }
  }, [])

  const { lang, links, name } = data

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="pt-8 lg:pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Image - Enhanced with larger size */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background blobs */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl"></div>

                {/* Main image container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-blue-100">
                  <img
                    src={pp}
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-500 rounded-full opacity-20 animate-pulse delay-500"></div>

                {/* Experience badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="fa fa-star"></span>
                  <span className="font-semibold text-sm">{yearsExperience}+ Years</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Web Developer
              </div>

              {/* Name - Muhammad on first line, Arfan Hidayat on second line */}
              <h1 id="name" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 leading-tight">
                <div>{name.first}</div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {name.middle ? ` ${name.middle}` : ''}{name.last ? ` ${name.last}` : ''}
                </span>
              </h1>

              {/* Profession */}
              {/* <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {lang.profession?.join(", ") || "Professional Web Developer"}
              </p> */}

              {/* Social Links - Enhanced */}
              <div className="flex gap-4 justify-center lg:justify-start mb-8">
                <a
                  href={links.github}
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="GitHub"
                >
                  <span className="fa fa-github text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></span>
                </a>
                {/* <a
                  href={linkWa}
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <span className="fa fa-whatsapp text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></span>
                </a>
                <a
                  href="mailto:Arfanihidayat@gmail.com"
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="Email"
                >
                  <span className="fa fa-envelope text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-arfani"
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <span className="fa fa-linkedin text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></span>
                </a> */}
              </div>

              {/* CTA Button - Enhanced */}
              <a
                href={linkWa}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-blue-500/30"
              >
                <span className="fa fa-comments text-lg"></span>
                <span>{lang.sayHi}</span>
                <span className="fa fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Enhanced */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Floating icons decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-50 rounded-full opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 shadow-lg">
                <span className="fa fa-user text-white text-2xl"></span>
              </div>

              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                {lang.about}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: 'fa-code', label: 'Clean Code', color: 'bg-blue-100 text-blue-600' },
                  { icon: 'fa-rocket', label: 'Fast Delivery', color: 'bg-green-100 text-green-600' },
                  { icon: 'fa-mobile', label: 'Responsive', color: 'bg-purple-100 text-purple-600' },
                  { icon: 'fa-shield', label: 'Secure', color: 'bg-orange-100 text-orange-600' },
                ].map((feature) => (
                  <div key={feature.label} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <span className={`fa ${feature.icon} text-xl`}></span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{feature.label}</p>
                  </div>
                ))}
              </div>

              {/* Available badge */}
              <div className="flex justify-center mt-8">
                <div className="text-sm inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available for freelance projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Preview - Enhanced */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="fa fa-star mr-2"></span>
              Expertise
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Next.js", icon: "nextjs-icon", bgClass: "bg-gray-100", textClass: "text-gray-800" },
              { name: "Laravel", icon: "laravel-icon", bgClass: "bg-red-100", textClass: "text-red-600" },
              { name: "Javascript", icon: "js-icon", bgClass: "bg-yellow-100", textClass: "text-yellow-600" },
              { name: "TypeScript", icon: "ts-icon", bgClass: "bg-blue-100", textClass: "text-blue-700" },
              { name: "Tailwind", icon: "tailwind-icon", bgClass: "bg-cyan-100", textClass: "text-cyan-600" },
              { name: "Linux", icon: "fa-linux", bgClass: "bg-gray-200", textClass: "text-gray-700" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="group text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${skill.bgClass} ${skill.textClass} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon === 'nextjs-icon' ? (
                    <img src="/icons/nextjs.svg" alt="Next.js" className="w-9 h-9" />
                  ) : skill.icon === 'laravel-icon' ? (
                    <img src="/icons/laravel.svg" alt="Laravel" className="w-9 h-9 brightness-110 contrast-125" />
                  ) : skill.icon === 'js-icon' ? (
                    <img src="/icons/javascript.svg" alt="JavaScript" className="w-8 h-8" />
                  ) : skill.icon === 'ts-icon' ? (
                    <img src="/icons/typescript.svg" alt="TypeScript" className="w-8 h-8" />
                  ) : skill.icon === 'tailwind-icon' ? (
                    <img src="/icons/tailwind.svg" alt="Tailwind" className="w-8 h-8" />
                  ) : (
                    <img src="/icons/linux.svg" alt="Linux" className="w-8 h-8" />
                  )}
                </div>
                <p className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's collaborate and bring your ideas to life!
              </p>
              <a
                href="https://wa.me/6281907456710?text=Hi%20Arfan,%20I%20have%20a%20project%20idea"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="fa fa-rocket text-lg"></span>
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

