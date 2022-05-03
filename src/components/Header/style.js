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
  height: 4rem;
  .name-logo {
    margin-left: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    h1 {
    color: white;
      font-weight: 800;
      font-size: 26px;
      letter-spacing: 2px;
    }
  }
`