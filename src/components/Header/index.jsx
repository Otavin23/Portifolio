import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderF>
      <div className="name-logo">
        <h1>Otávio</h1>
      </div>
      <nav>
        <ul>
          <li>about</li>
          <li>portifolio</li>
          <li>contact</li>
        </ul>
      </nav>
    </S.HeaderF>
  );
};
export default Header;
