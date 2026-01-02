import { JSX } from "react";

interface FooterProps {
  data: {
    lang?: {
      menus?: string[];
      footerBrandDesc?: string;
      footerQuickLinks?: string;
      footerGetInTouch?: string;
      footerContactEmail?: string;
      footerContactPhone?: string;
      footerContactLocation?: string;
      footerCtaButton?: string;
      footerCopyright?: string;
      footerTechReact?: string;
      footerBackToTop?: string;
    };
  };
  convertLang?: (lang: string) => void;
}

export default function Footer({ data }: FooterProps): JSX.Element {
  const currentYear = new Date().getFullYear();

  // Get menu labels from data, with fallbacks
  const menuLabels = data.lang?.menus || ['Home', 'Experiences', 'Services', 'Portfolios', 'Lang', 'Certificates'];

  // Get translation values with fallbacks
  const t = {
    brandDesc: data.lang?.footerBrandDesc || "Passionate web developer creating digital solutions that make a difference. Let's build something amazing together!",
    quickLinks: data.lang?.footerQuickLinks || "Quick Links",
    getInTouch: data.lang?.footerGetInTouch || "Get In Touch",
    contactEmail: data.lang?.footerContactEmail || "arfanihidayat@gmail.com",
    contactPhone: data.lang?.footerContactPhone || "+62 819 0745 6710",
    contactLocation: data.lang?.footerContactLocation || "Mataram, Lombok, Indonesia",
    ctaButton: data.lang?.footerCtaButton || "Let's Talk",
    copyright: data.lang?.footerCopyright || "Built with ❤️ using",
    techReact: data.lang?.footerTechReact || "React.js",
    backToTop: data.lang?.footerBackToTop || "Back to top",
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-2xl font-bold text-white">r'Fun</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t.brandDesc}
              </p>
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/arfani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="GitHub"
                >
                  <span className="fa fa-github text-lg"></span>
                </a>
                <a
                  href="https://wa.me/6281907456710?text=Hi%20Arfan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <span className="fa fa-whatsapp text-lg"></span>
                </a>
                <a
                  href="mailto:Arfanihidayat@gmail.com"
                  className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="Email"
                >
                  <span className="fa fa-envelope text-lg"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-arfani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <span className="fa fa-linkedin text-lg"></span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-6 flex items-center justify-center">
                <span className="fa fa-link mr-2 text-blue-400"></span>
                {t.quickLinks}
              </h4>
              <div className="space-y-3">
                {[
                  { name: menuLabels[0] || 'Home', href: "/", icon: "fa-home" },
                  { name: menuLabels[1] || 'Experiences', href: "/experiences", icon: "fa-briefcase" },
                  { name: menuLabels[2] || 'Services', href: "/services", icon: "fa-cogs" },
                  { name: menuLabels[3] || 'Portfolios', href: "/portfolios", icon: "fa-folder" },
                  { name: menuLabels[5] || 'Certificates', href: "/certificates", icon: "fa-certificate" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className={`fa ${link.icon} mr-2 text-sm w-4`}></span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-6 flex items-center justify-center md:justify-end">
                <span className="fa fa-paper-plane mr-2 text-blue-400"></span>
                {t.getInTouch}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-end text-gray-400">
                  <span className="fa fa-envelope mr-3 text-blue-400 w-5 text-center"></span>
                  <a href={`mailto:${t.contactEmail}`} className="hover:text-blue-400 transition-colors duration-300">
                    {t.contactEmail}
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end text-gray-400">
                  <span className="fa fa-phone mr-3 text-green-400 w-5 text-center"></span>
                  <a href={`tel:${t.contactPhone}`} className="hover:text-green-400 transition-colors duration-300">
                    {t.contactPhone}
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end text-gray-400">
                  <span className="fa fa-map-marker mr-3 text-red-400 w-5 text-center"></span>
                  <span>{t.contactLocation}</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/6281907456710?text=Hi%20Arfan,%20love%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 hover:shadow-green-500/40"
                >
                  <span className="fa fa-comments"></span>
                  {t.ctaButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-sm">
              <span className="fa fa-copyright mr-1"></span>
              {currentYear} r'Fun. {t.copyright}
              <span className="text-blue-400 font-semibold mx-1">{t.techReact}</span>
            </p>

            {/* Back to top button */}
            <a
              href="#"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>{t.backToTop}</span>
              <span className="fa fa-arrow-up"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

