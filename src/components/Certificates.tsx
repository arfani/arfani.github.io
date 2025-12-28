import { useEffect, useState } from "react";

interface CertificatesProps {
  data: any;
}

export default function Certificates(props: CertificatesProps) {
  const [certificates, setCertificates] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

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

  if (loading) {
    return (
      <div id="certificates">
        <div className="header">
          <h1>{props.data.lang.menus[5]}</h1>
        </div>
        <div className="content">
          <div style={{
            padding: '40px',
            textAlign: 'center',
            fontSize: '18px'
          }}>
            🔄 Loading certificates...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="certificates">
      <div className="header" style={{
        animation: 'fadeInDown 0.6s ease-out'
      }}>
        <h1>{props.data.lang.menus[5]}</h1>
      </div>
      <div className="content" style={{
        animation: 'fadeIn 0.6s ease-out 0.2s both'
      }}>
        {certificates.length === 0 ? (
          <div style={{
            padding: '20px',
            textAlign: 'center',
            background: '#ffebee',
            color: '#c62828',
            borderRadius: '8px',
            margin: '20px 0'
          }}>
            <h3>⚠️ No Certificates Found</h3>
            <p>Found: {certificates.length} certificates</p>
            <p>Check browser console for detailed loading information</p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px', textAlign: 'center', color: '#666' }}>
              <p>Found {certificates.length} certificates. Use navigation controls below.</p>
            </div>

            {/* Simple carousel using native HTML */}
            <div className="certificate-carousel">
              <div className="carousel-container" style={{ position: 'relative' }}>
                <div
                  className="carousel-slides"
                  style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                    transform: `translateX(-${activeIndex * 100}%)`
                  }}
                >
                  {certificates.map((src, index) => (
                    <div
                      key={index}
                      style={{
                        minWidth: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                      }}
                    >
                      <img
                        src={src}
                        alt={`Certificate ${index + 1}`}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '600px',
                          objectFit: 'contain',
                          borderRadius: '8px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => setActiveIndex(prev => prev === 0 ? certificates.length - 1 : prev - 1)}
                    style={{
                      padding: '10px 20px',
                      background: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    ← Previous
                  </button>

                  <div style={{ color: '#666' }}>
                    {activeIndex + 1} of {certificates.length}
                  </div>

                  <button
                    onClick={() => setActiveIndex(prev => prev === certificates.length - 1 ? 0 : prev + 1)}
                    style={{
                      padding: '10px 20px',
                      background: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Next →
                  </button>
                </div>

                {/* Indicators */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '15px',
                  gap: '8px'
                }}>
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: 'none',
                        background: activeIndex === index ? '#007bff' : '#ccc',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
