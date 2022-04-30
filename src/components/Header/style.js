import styled from "styled-components";

export const HeaderF = styled.header`
  max-width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0a0c10;
  position:fixed;
  width: 100%;
  z-index: 2;
  
  .name-logo {
    margin-left: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 11%;
    cursor: pointer;
    h1 {
      color: white;
      font-weight: 800;
      font-size: 26px;
      letter-spacing: 2px;
    }
  }
  nav {
    margin-right: 3rem;
    ul {
      display: flex;
      list-style: none;
      li {
        color: white;
        font-weight: 800;
        margin-right: 3.2rem;
        text-transform: uppercase;
        font-size: 13px;
        cursor: pointer;
        opacity: 0.6;
        letter-spacing: 1px;
        font-family: "Quicksand", sans-serif;
      }
    }
  }
`;
