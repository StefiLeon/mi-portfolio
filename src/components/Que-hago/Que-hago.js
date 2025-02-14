import React, { useEffect, useRef } from "react";
import InstagramCard from "../Quien-soy/Instagram-card";
import YouTubeCard from "./YouTube-card";
import "./Que-hago.css";

const QueHago = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("section in view");
            entry.target.classList.add("in-view");
          } else {
            console.log("section out of view");
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  useEffect(() => {
    const IGscript = document.createElement("script");
    IGscript.src = "https://www.instagram.com/embed.js";
    IGscript.async = true;
    document.body.appendChild(IGscript);
  });

  return (
    <section
      className="que-hago"
      id="que-hago"
      // style={{ height: "100vh" }}
      ref={sectionRef}
    >
      <h3>
        <div className="h3-background">¿Qué hago?</div>
      </h3>
      <div className="que-hago-content">
        <div className="content-pair">
          <div className="text-column">
            <p>
              🧠{" "}
              <span className="small-caps">
                <span className="weight600">Creo</span> y{" "}
                <span className="weight600">modero</span> contenido.
              </span>
              <br />
              Mi pasión es dar vida a ideas que conecten, inspiren y generen
              impacto. No es solo entretener, sino{" "}
              <span className="weight600">crear significado</span>. Para eso me
              involucro tanto en la creación como en la edición de imágenes y
              videos. Coberturas en tiempo real, como el Mundial Qatar 2022 🏆
            </p>
          </div>
          <div className="videos-container">
            <YouTubeCard
              videoUrl="https://www.youtube.com/embed/8qdeZ3vz1mY?si=98r8d0cGJLRVz6yd"
              title="Las elegidas para Francia 2019"
              description="Presentación Mundial Femenino 2019"
            />
          </div>
        </div>
        <div className="content-pair">
          <div className="text-column">
            <p>
              🔎{" "}
              <span className="small-caps">
                <span className="weight600">Busco</span> y{" "}
                <span className="weight600">aprovecho</span> tendencias.
              </span>
              <br />
              Como heavy user de redes sociales intento estar siempre al tanto
              de los temas actuales. ¿Cuáles se pueden utilizar respetando el
              mensaje y el contenido de la cuenta?
            </p>
          </div>
          <a
            href="https://www.instagram.com/afaseleccion/reel/C_Qt5zWN_0I/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramCard
              profilePic="https://pbs.twimg.com/profile_images/1604558315471753219/esZSkuhP_400x400.jpg"
              username="AFAseleccion"
              image="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2025/02/ig-teenangels-1-png.avif"
              caption="💻✨"
            />
          </a>
        </div>
        <div className="content-pair">
          <div className="text-column">
            <p>
              📊{" "}
              <span className="small-caps">
                <span className="weight600">Analizo</span> y decido según los{" "}
                <span className="weight600">datos</span>.
              </span>
              <br />
              Utilizando mi formación en ciencias sociales y en data science,
              optimizo los contenidos según los datos proporcionados por las
              herramientas de cada red social.{" "}
            </p>
          </div>
          <a
            href="https://www.tiktok.com/@afaseleccion/video/7408940219623329029"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramCard
              profilePic="https://pbs.twimg.com/profile_images/1604558315471753219/esZSkuhP_400x400.jpg"
              username="AFAseleccion"
              image="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2025/02/garnacho-png.avif"
              caption="💻✨"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default QueHago;
