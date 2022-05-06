import styled from "styled-components";

export const HeaderF = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.bodyHeader};
  height: 4rem;
  .name-logo {
    margin-left: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    h1 {
    color: ${props => props.theme.colors.fontHeader};
      font-weight: 800;
      font-size: 26px;
      letter-spacing: 2px;
    }
  }
`