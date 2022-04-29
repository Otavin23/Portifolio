import styled from "styled-components";

export const MainF = styled.main`
  max-width: 100%;
  height: 90.5vh;
  //display: flex;
  //justify-content: center;
  .icons-l{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     div{
        font-size: 1.5rem;
        color: #696969;
        margin-bottom: 1rem;
        cursor: pointer;
        opacity: 0.5;
        &:hover{
           color: #87cefa;
        }
     }
  }
`;

export const MContainer = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .profile {
    width: 50%;
    height: 100%;
    .info-name {
      margin-top: 4rem;
      h2 {
        font-size: 4rem;
        strong {
          margin-left: 1rem;
          color: #87cefa;
        }
        margin: 0;
      }
      p {
        font-weight: 400;
        font-size: 1.2rem;
        color: #696969;
        letter-spacing: 2px;
        font-family: "Special Elite", cursive;
        border-right: 2px solid #696969;
        max-width: 299px;
        white-space: nowrap;
        overflow: hidden;
      }
      .typing-animation {
        animation: blinkCursor 500ms infinite normal,
          typing 4s steps(40) 1s normal both;
      }
      @keyframes blinkCursor {
        from {
          border-right: 2px solid #696969;
        }
        to {
          border-right: transparent;
        }
      }
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }
    button {
      border: none;
      background: #87cefa;
      color: white;
      width: 30%;
      height: 2.5rem;
      font-weight: 700;
      font-size: 1rem;
      box-shadow: 0px 1px 5px #87cefa;
      cursor: pointer;
    }
  }
  .text-information {
    background: yellow;
    img {
      max-width: 300px;
    }
  }
`;
export const SectionF = styled.section`
  max-width: 100%;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SectionContainer = styled.div`
  background: yellow;
  width: 90%;
  height: 100%;
`