import React from "react";
import * as S from "./style";
import {
  GrFacebookOption,
  GrGithub,
  GrLinkedinOption,
} from "react-icons/gr";
import { ChevronDown } from "@styled-icons/bootstrap";

const MainF = () => {
  return (
    <S.MainF>
      <S.MContainer>
        <div className="icons-l">
          <div>
            <GrGithub />
          </div>
          <div>
            <GrFacebookOption />
          </div>
          <div>
            <GrLinkedinOption />
          </div>
        </div>
        <div className="profile">
          <div className="info-name">
            <h2>
              I'm
              <strong>Otavio</strong> Vieira
            </h2>
            <p className="typing-animation">Front-end Developer</p>
          </div>
          <button>Learn More</button>
        </div>
      </S.MContainer>

      <div className="select-S">
        <ChevronDown width="50" height={"50"} color="#f1f1f1" />
      </div>

      <S.SectionF>
        <h2>Skills</h2>
        <S.SectionContainer>
          <div className="card-M">
            <div className="card-C">
              <div className="card-logo">
                <img 
                  id="img"
                  src={
                    "https://www.heitorfranco.com/_next/image?url=https%3A%2F%2Fportfolio-heitor-franco.cdn.prismic.io%2Fportfolio-heitor-franco%2Ffc4211ec-8519-4151-a19a-04ec094342b4_html5.svg&w=256&q=75"
                  }
                  alt="Html-logo"
                />
                <span>Html</span>
              </div>
            </div>
          </div>
          <div className="card-M">
            <div className="card-C">
              <div className="card-logo">
                <img
                  src={
                    "https://www.heitorfranco.com/_next/image?url=https%3A%2F%2Fportfolio-heitor-franco.cdn.prismic.io%2Fportfolio-heitor-franco%2F7331f00f-c358-48e5-86fd-c2c638712429_css3.svg&w=256&q=75"
                  }
                  alt="logo-pincel"
                />
                <span>Css</span>
              </div>
            </div>
          </div>
          <div className="card-M">
            <div className="card-C">
              <div className="card-logo">
                <img
                  src={
                    "https://www.heitorfranco.com/_next/image?url=https%3A%2F%2Fportfolio-heitor-franco.cdn.prismic.io%2Fportfolio-heitor-franco%2F84662a2e-1f1a-4ba8-abf1-7d09414cf4b8_javascript.svg&w=256&q=75"
                  }
                  alt="logo-skills"
                />
                <span>Javascript</span>
              </div>
            </div>
          </div>
          <div className="card-M">
            <div className="card-C">
              <div className="card-logo">
                <img
                  src={
                    "https://www.heitorfranco.com/_next/image?url=https%3A%2F%2Fportfolio-heitor-franco.cdn.prismic.io%2Fportfolio-heitor-franco%2F33aa3d2a-ecfd-4ccb-aa7f-03f9b00f9620_react.svg&w=256&q=75"
                  }
                  alt="framework-skills"
                />
                <span>Reactjs</span>
              </div>
            </div>
          </div>
        </S.SectionContainer>
      </S.SectionF>


    </S.MainF>
  );
};
export default MainF;
