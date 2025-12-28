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
    };
  };
}

export default function Portfolios({ data }: PortfoliosProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = `rfun - ${data.lang.menus[3]}`;

    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [data.lang.menus]);

  if (!data.portfolios || data.portfolios.length === 0) {
    return (
      <div id="portfolios">
        <div className="header" style={{
          animation: 'fadeInDown 0.6s ease-out'
        }}>
          <h1>{data.lang.menus[3]}</h1>
        </div>
        <div className="content" style={{
          animation: 'fadeIn 0.6s ease-out 0.2s both'
        }}>
          <div className="text-center py-5">
            <div className="mb-3">
              <i className="fa fa-folder-open" style={{ fontSize: '48px', color: '#6c757d' }}></i>
            </div>
            <h4 className="text-muted">No portfolios available</h4>
            <p className="text-muted">Portfolio items will be displayed here when available.</p>
          </div>
        </div>
      </div>
    );
  }

  const Portfolio = data.portfolios?.map((item: PortfolioItem, i: number) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={i} style={{
      animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
    }}>
      <div className="service-block h-100">
        <div className="service-info">
          <div className="service-image">
            <a
              href={item.linkDemo !== '#' ? item.linkDemo : '#'}
              target={item.linkDemo !== '#' ? '_blank' : '_self'}
              rel={item.linkDemo !== '#' ? 'noopener noreferrer' : ''}
              title={item.linkDemo === '#' ? "Demo isn't available" : "Click for demo !"}
              className={item.linkDemo === '#' ? 'disabled' : ''}
            >
              <span className={`fa ${item.faIcon}`}></span>
            </a>
          </div>
        </div>
        <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
        <p className="text-primary mb-0">{item.tech}</p>

        {item.linkDemo !== '#' && (
          <div className="mt-3">
            <a
              href={item.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              <i className="fa fa-external-link"></i> View Demo
            </a>
          </div>
        )}
      </div>
    </div>
  ));

  if (isLoading) {
    return (
      <div id="portfolios">
        <div className="header" style={{
          animation: 'fadeInDown 0.6s ease-out'
        }}>
          <h1>{data.lang.menus[3]}</h1>
        </div>
        <div className="content" style={{
          animation: 'fadeIn 0.6s ease-out 0.2s both'
        }}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading portfolios...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="portfolios">
      <div className="header" style={{
        animation: 'fadeInDown 0.6s ease-out'
      }}>
        <h1>{data.lang.menus[3]}</h1>
      </div>
      <div className="content" style={{
        animation: 'fadeIn 0.6s ease-out 0.2s both'
      }}>
        <div className="row">
          {Portfolio}
        </div>
      </div>
    </div>
  );
}
