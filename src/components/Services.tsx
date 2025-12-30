interface ServicesProps {
  data: any;
}

export default function Services({ data }: ServicesProps) {
  const { services } = data.lang;

  const ServiceItem = services?.map((service: any, i: number) => (
    <div
      key={i}
      className="group"
    >
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full relative overflow-hidden">
        {/* Decorative gradient border on top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Icon with gradient background */}
        <div className="relative mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/30">
            <span className={`fa ${service.faIcon} text-2xl sm:text-3xl text-white`} />
          </div>
          {/* Floating decoration */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
        </div>

        <div className="text-center">
          <h5 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {service.name}
          </h5>
          <p className="text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </div>
  ));

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Services & Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            {data.lang.menus[2]}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional development services tailored to bring your digital ideas to life with cutting-edge technology and modern design.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ServiceItem}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mx-auto mb-6">
                <span className="fa fa-rocket text-white text-3xl"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create something amazing together
              </p>
              <a
                href="https://wa.me/6281907456710?text=Hi%20Arfan,%20I'm%20interested%20in%20your%20services"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="fa fa-whatsapp text-lg"></span>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="fa fa-star mr-2"></span>
              Why Choose Me
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">What Sets Me Apart</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "fa-rocket",
                title: "Fast Delivery",
                desc: "Quick turnaround times without compromising quality",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "fa-shield-alt",
                title: "Responsive Design",
                desc: "Responsive and mobile-friendly design for all screen sizes",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "fa-headset",
                title: "Consulting & Support",
                desc: "Ongoing support and maintenance for your peace of mind",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className={`fa ${feature.icon} text-white text-2xl`}></span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


