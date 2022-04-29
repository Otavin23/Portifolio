import React from "react";
import * as S from "./style";
import FMain from "../../assets/fmain.jpg";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import Skills from "../Skills";

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
            <p className="typing-animation">Front-end web developer =)</p>
          </div>
          <button>Lear More</button>
        </div>
        <div className="photo-f">
          <img src={FMain} alt="photo" />
        </div>
      </S.MContainer>

      <S.SectionF>
         <S.SectionContainer>
            dadaddd
         </S.SectionContainer>
      </S.SectionF>

    </S.MainF>
  );
};
export default MainF;
