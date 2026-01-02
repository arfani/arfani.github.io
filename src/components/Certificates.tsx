import { useCallback, useEffect, useState } from "react";

interface CertificatesProps {
  data: {
    lang: {
      menus: string[];
      loadingCertificates: string;
      certHeaderBadge: string;
      certHeaderDesc: string;
      certEmptyTitle: string;
      certEmptyFound: string;
      certEmptyConsole: string;
      statTotalCertificates: string;
      statCompletionRate: string;
      statYearsLearning: string;
      certCarouselTitle: string;
      certSwipeHint: string;
      btnPrevious: string;
      btnNext: string;
      certMobileSwipeHint: string;
      certHighlightsBadge: string;
      certHighlightsTitle: string;
      skillWebDev: string;
      skillCloud: string;
      skillMarketing: string;
      skillProgramming: string;
      certCtaTitle: string;
      certCtaDesc: string;
      certCtaButton: string;
    };
  };
}

export default function Certificates(props: CertificatesProps) {
  const [certificates, setCertificates] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const LEARNING_START_YEAR = 2015 // Starting year for learning journey
  const yearsLearning = new Date().getFullYear() - LEARNING_START_YEAR
  const AUTO_SLIDE_INTERVAL = 60000 // 1 minute in milliseconds

  // Auto-slide effect
  useEffect(() => {
    if (certificates.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex(prev => prev === certificates.length - 1 ? 0 : prev + 1)
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(interval)
  }, [certificates.length])

  useEffect(() => {
    document.title = `rfun - ${props.data.lang.menus[5]}`

    // Load certificates
    const loadCertificates = async () => {
      try {
        console.log('Loading certificates...');
        const modules = import.meta.glob('../assets/images/certificates/*.{webp,png,jpg,svg}', { eager: true });
        console.log('Modules found:', modules);
        const imgs = Object.values(modules).map((module: any) => module.default);
        console.log('Certificates loaded:', imgs);
        setCertificates(imgs);
      } catch (error) {
        console.error('Failed to load certificates:', error);
        setCertificates([]);
      } finally {
        setLoading(false);
      }
    };
    loadCertificates();
  }, []);

  // Touch/swipe handlers for mobile carousel
  const minSwipeDistance = 50

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Next slide
      setActiveIndex(prev => prev === certificates.length - 1 ? 0 : prev + 1)
    }
    if (isRightSwipe) {
      // Previous slide
      setActiveIndex(prev => prev === 0 ? certificates.length - 1 : prev - 1)
    }
  }, [touchStart, touchEnd, certificates.length])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const nextSlide = () => {
    setActiveIndex(prev => prev === certificates.length - 1 ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setActiveIndex(prev => prev === 0 ? certificates.length - 1 : prev - 1)
  }

  if (loading) {
    return (
      <div id="certificates" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="pt-20 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 sm:p-16 shadow-xl">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">{props.data.lang.menus[5]}</h1>
              <p className="text-lg text-gray-600">{props.data.lang.loadingCertificates}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="certificates" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            {props.data.lang.certHeaderBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            {props.data.lang.menus[5]}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {props.data.lang.certHeaderDesc}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {certificates.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="fa fa-exclamation-triangle text-3xl sm:text-4xl text-red-500"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">{props.data.lang.certEmptyTitle}</h3>
              <p className="text-lg text-gray-600 mb-2">{props.data.lang.certEmptyFound.replace('{count}', '0')}</p>
              <p className="text-gray-500">{props.data.lang.certEmptyConsole}</p>
            </div>
          ) : (
            <div>
              {/* Stats - Enhanced */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div className="group p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="fa fa-certificate text-white text-xl"></span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">{certificates.length}</div>
                    <p className="text-gray-600 font-medium text-sm">{props.data.lang.statTotalCertificates}</p>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="fa fa-graduation-cap text-white text-xl"></span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">100%</div>
                    <p className="text-gray-600 font-medium text-sm">{props.data.lang.statCompletionRate}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1 group p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="fa fa-star text-white text-xl"></span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">{yearsLearning}+</div>
                    <p className="text-gray-600 font-medium text-sm">{props.data.lang.statYearsLearning}</p>
                  </div>
                </div>
              </div>

              {/* Touch-Friendly Certificate Viewer/Carousel */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 shadow-lg">
                    <span className="fa fa-certificate text-white text-2xl"></span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{props.data.lang.certCarouselTitle}</h2>
                  <p className="text-gray-600">{props.data.lang.certSwipeHint}</p>
                </div>

                {/* Touch-friendly carousel container */}
                <div
                  className="relative select-none"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  {/* Main carousel view */}
                  <div className="overflow-hidden rounded-xl">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${activeIndex * 100}%)`
                      }}
                    >
                      {certificates.map((src, index) => (
                        <div
                          key={index}
                          className="min-w-full flex justify-center items-center px-2 sm:px-4"
                        >
                          <div className="relative group w-full">
                            <img
                              src={src}
                              alt={`Certificate ${index + 1}`}
                              className="w-full max-h-[50vh] sm:max-h-[60vh] object-contain rounded-xl shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow duration-300"
                              draggable={false}
                            />
                            {/* Slide indicator badge */}
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                              {index + 1} / {certificates.length}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Controls - Touch-friendly size */}
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                    <button
                      onClick={prevSlide}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95 touch-manipulation"
                      aria-label={props.data.lang.btnPrevious}
                    >
                      <span className="fa fa-chevron-left"></span>
                      <span className="hidden sm:inline">{props.data.lang.btnPrevious}</span>
                    </button>

                    {/* Dot indicators - Touch-friendly */}
                    <div className="flex flex-wrap justify-center gap-2 px-4">
                      {certificates.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${activeIndex === index
                            ? 'bg-blue-600 scale-125 shadow-lg'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          aria-label={`Go to certificate ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95 touch-manipulation"
                      aria-label={props.data.lang.btnNext}
                    >
                      <span className="hidden sm:inline">{props.data.lang.btnNext}</span>
                      <span className="fa fa-chevron-right"></span>
                    </button>
                  </div>

                  {/* Mobile swipe hint */}
                  <div className="mt-4 text-center text-gray-400 text-sm sm:hidden">
                    <span className="fa fa-hand-paper mr-2 animate-pulse"></span>
                    {props.data.lang.certMobileSwipeHint}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Achievement Highlights */}
      {certificates.length > 0 && (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="fa fa-trophy mr-2"></span>
                {props.data.lang.certHighlightsBadge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{props.data.lang.certHighlightsTitle}</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { category: props.data.lang.skillWebDev, icon: "fa-code", bgClass: "bg-blue-100", textClass: "text-blue-600" },
                { category: props.data.lang.skillCloud, icon: "fa-cloud", bgClass: "bg-indigo-100", textClass: "text-indigo-600" },
                { category: props.data.lang.skillMarketing, icon: "fa-bullhorn", bgClass: "bg-green-100", textClass: "text-green-600" },
                { category: props.data.lang.skillProgramming, icon: "fa-cogs", bgClass: "bg-purple-100", textClass: "text-purple-600" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group text-center p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className={`w-14 h-14 ${item.bgClass} ${item.textClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <span className={`fa ${item.icon} text-xl sm:text-2xl`}></span>
                  </div>
                  <p className="font-semibold text-gray-700 text-sm sm:text-base">{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mx-auto mb-6">
                <span className="fa fa-graduation-cap text-white text-3xl"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{props.data.lang.certCtaTitle}</h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                {props.data.lang.certCtaDesc}
              </p>
              <a
                href="https://wa.me/6281907456710?text=Hi%20Arfan,%20I'm%20interested%20in%20your%20professional%20background"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="fa fa-comments text-lg"></span>
                {props.data.lang.certCtaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

