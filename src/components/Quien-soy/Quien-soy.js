import React, { useEffect, useRef } from "react";
import TweetCard from "./Tweet-card";
import InstagramCard from "./Instagram-card";
import "./Quien-soy.css";

const QuienSoy = () => {
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

  return (
    <section className="quien-soy" id="quien-soy" ref={sectionRef}>
      <h2>
        <div className="h2-background">¿Quién soy?</div>
      </h2>
      <div className="cards-container">
        <div className="tweet-container">
          <TweetCard
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBOe5LXvimtpMXVQc561qXME8h5xyHrRttw&s"
            username="Stefi León"
            timestamp="3h ago - 200 Visualizaciones"
            content="Comunicadora (UBA). Social Media Manager. Entusiasta de la datita y la tecnología. MERN developer. Fotógrafa aficionada 📸"
          />
          <TweetCard
            id="second-tweet"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBOe5LXvimtpMXVQc561qXME8h5xyHrRttw&s"
            username="Stefi León"
            timestamp="2h ago - 250 Visualizaciones"
            content="Trabajo como CM desde el 2011. Si, desde el auge de Facebook, el inicio de Instagram, pasando por Vine, Snapchat, X, Reddit, TikTok... Ecosistema digital completo 🤓"
          />
        </div>
        <InstagramCard
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
          username="StefiLeon"
          image="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2025/02/foto.avif"
          caption="Construyo experiencias digitales en contacto con el mundo analógico. A la caza de tendencias y nuevas herramientas 💻✨"
          likes={120}
          comments={15}
        />
      </div>
    </section>
  );
};

export default QuienSoy;
