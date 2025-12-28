

interface ServicesProps {
  data: any;
}

export default function Services({ data }: ServicesProps) {
  const { services } = data.lang

  const ServiceItem = services?.map((service: any, i: number) => (
    <div className="col-md-4 col-sm-6" key={i} style={{
      animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
    }}>
      <div className={"service-block id" + i}>
        <div className="service-info">
          <div className="service-image">
            <span
              className={"fa " + service.faIcon}
            />
          </div>
        </div>
        <h5>{service.name}</h5>
        <p>{service.desc}</p>
      </div>
    </div>
  ));

  return (
    <div id="services">
      <div className="header" style={{
        animation: 'fadeInDown 0.6s ease-out'
      }}>
        <h1>{data.lang.menus[2]}</h1>
      </div>
      <div className="content" style={{
        animation: 'fadeIn 0.6s ease-out 0.2s both'
      }}>
        <div className="row">
          {ServiceItem}
        </div>
      </div>
    </div>
  );
}
