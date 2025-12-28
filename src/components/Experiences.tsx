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
    <div className="timeline-item" key={i}>
      <h5 className="title">{work.title}</h5>
      <span className="period">{work.period}</span>
      <span className="company">{work.company}</span>
    </div>
  ));

  const ItemEdu = itemEdu?.map((edu: any, i: number) => (
    <div className="timeline-item" key={i}>
      <h5 className="title">{edu.title}</h5>
      <span className="period">{edu.period}</span>
      <span className="school">{edu.school}</span>
    </div>
  ));

  return (
    <div id="exp">
      <div
        className="header"
        style={{
          backgroundColor: "#343a40",
          animation: 'fadeInDown 0.6s ease-out'
        }}
      >
        <h1>{data.lang.menus[1]}</h1>
      </div>
      <div className="content" style={{
        animation: 'fadeIn 0.6s ease-out 0.2s both'
      }}>
        <div className="row">
          <div className="col-md-6">
            <div className="block work">
              <div className="block-title">
                <h3>{data.lang.subtitleWork}</h3>
              </div>
              <div className="timeline">{ItemWork}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="block edu">
              <div className="block-title">
                <h3>{data.lang.subtitleEdu}</h3>
              </div>
              <div className="timeline">{ItemEdu}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
