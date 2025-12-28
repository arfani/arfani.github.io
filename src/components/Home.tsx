import { useEffect, useState } from "react";

interface HomeProps {
  data: any;
}

export default function Home({ data }: HomeProps) {

  const [linkWa, setLinkWa] = useState("https://web.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20")
  const pp = "/src/assets/images/arfan.webp"

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
    <div id="home">
      <div className="header" style={{
        animation: 'fadeInDown 0.8s ease-out'
      }}>
        <div className="row">
          <div id="photo" className="col-md-6">
            <img
              src={pp}
              style={{ width: 270, height: 270 }}
              alt="Profile"
            />
          </div>
          <div id="id1" className="col-md-6">
            <h1 id="name">{name.first}{name.middle ? ' ' + name.middle : ''}{name.last ? ' ' + name.last : ''}</h1>
            <div className="prof">
              {lang.profession?.join(", ") || "Profession Not defined"}
            </div>
            <div id="links">
              <a href={links.github}>
                <span className="fa fa-github" />
              </a>
              <a href={linkWa}>
                <span className="fa fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 sayHi">
            {lang.about}
            <a className="text-success" href={linkWa}>
              {" " + lang.sayHi}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
