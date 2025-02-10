import React, { useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-left">
          <img
            src="https://futbolfemeninoargentino.com.ar/wp-content/uploads/2025/02/social-media-png.avif"
            alt="Stefi Leon"
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <h1>
            👋 <span className="outline">Soy</span>{" "}
            <span className="highlight-name">Stefi León</span>
          </h1>
          <p>
            <span className="outline">Creo contenido en</span>{" "}
            <span className="highlight-social">redes sociales</span>,{" "}
            <span className="outline">gestiono comunidades y</span>{" "}
            <span className="highlight-problem">
              resuelvo problemas
              <svg
                aria-hidden="true"
                className="gsap-swipe"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 370 436"
                style={{
                  transformOrigin: "30% 80%",
                  transform: "rotate(-30deg)",
                  opacity: 1,
                }}
              >
                <defs>
                  <filter id="duotone">
                    <feColorMatrix
                      type="matrix"
                      values=".33 .33 .33 0 0
                              .33 .33 .33 0 0
                              .33 .33 .33 0 0
                              0 0 0 1 0"
                    />
                    <feComponentTransfer color-interpolation-filters="sRGB">
                      <feFuncR
                        type="table"
                        tableValues=".6823529412 .9960784314"
                      />
                      <feFuncG
                        type="table"
                        tableValues=".5607843137 .9725490196"
                      />
                      <feFuncB
                        type="table"
                        tableValues=".8588235294 .7058823529"
                      />
                    </feComponentTransfer>
                    <feComponentTransfer color-interpolation-filters="sRGB">
                      <feFuncR
                        type="gamma"
                        exponent="1.5"
                        amplitude="1"
                        offset="0"
                      />
                      <feFuncG
                        type="gamma"
                        exponent="1.5"
                        amplitude="1"
                        offset="0"
                      />
                      <feFuncB
                        type="gamma"
                        exponent="2"
                        amplitude="1.5"
                        offset="0"
                      />
                    </feComponentTransfer>
                  </filter>
                  <mask id="swipeMask">
                    <rect
                      className="maskSwipe"
                      width="370"
                      height="436"
                      fill="white"
                      transform="matrix(1,0,0,1,-370,0)"
                    />
                  </mask>
                </defs>
                <g id="Layer_1" data-name="Layer 1">
                  <image
                    filter="url(#duotone)"
                    mask="url(#swipeMask)"
                    width="370"
                    height="436"
                    href="https://www.clarin.com/img/2019/01/12/YtqS3YwVv_1200x0__1.jpg"
                  />
                </g>
              </svg>
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
