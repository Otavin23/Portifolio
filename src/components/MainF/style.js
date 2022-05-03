import styled from "styled-components";

export const MainF = styled.main`
  max-width: 100%;
  height: 90.5vh;
  .select-S {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    cursor: pointer;
  }
`;

export const MContainer = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  align-items: center;

  .icons-l {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.05s ease;
    div {
      font-size: 1.7rem;
      margin-bottom: 1rem;
      margin-left: 1.5rem;
      cursor: pointer;
      color: black;
      opacity: 0.8;
      transition: all 1s ease;
      &:hover {
        transform: scale(1.2);
        transition: all 0.05s ease;
      }
    }
  }
  .profile {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7rem;

    .info-name {
      h2 {
        font-size: 4rem;
        color: white;
        letter-spacing: 5px;
        color: black;
        strong {
          margin-left: 1rem;
          color: #cc0000;
        }
        margin: 0;
      }
      p {
        font-weight: 100;
        font-size: 1.3rem;
        //color: white;
        border-right: 2px solid white;
        white-space: nowrap;
        overflow: hidden;
        opacity: 0.6;
        max-width: 200px;
        color: bllack;
        //z-index: 2;
      }
      .typing-animation {
        animation: blinkCursor 500ms infinite normal,
          typing 4s steps(40) 1s normal both;
      }
      @keyframes blinkCursor {
        from {
          border-right: 2px solid black;
        }
        to {
          border-right: transparent;
        }
      }
      @keyframes typing {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }
    }

    button {
      transition: all 0.05s ease;
      margin-top: 2rem;
      border: none;
      //background: red;
      background: transparent;
      border: 3px solid red;
      width: 35%;
      height: 3rem;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 1.1rem;
      cursor: pointer;
      background: red;
      color: white;
      letter-spacing: 5px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .text-information {
    background: yellow;
    img {
      max-width: 300px;
    }
  }
  .photo-cat{
    width: 47%;
    height: 80%;
    background-image: url("https://images-ext-1.discordapp.net/external/YgjzT5aU_Y_Sw78O77_4NEju49CHY-17mVjEqk2yfyM/https/img.freepik.com/vetores-gratis/gato-personagem-dos-desenhos-animados-icone-gatinho_71328-583.jpg?width=436&height=436");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1; 
  }
`;
export const SectionF = styled.section`
  max-width: 100%;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(4, 14, 22);
  h2 {
    margin-top: 4rem;
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: white;
  }
`;
export const SectionContainer = styled.div`
  margin-top: 3rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .name-skill {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    h3 {
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
  }
  .card-M {
    width: 250px;
    height: 200px;
    margin: 0 auto;
    box-shadow: 0px 10px 15px rgb(4, 11, 22);
    display: flex;
    justify-content: center;
    align-items: center;
    //border-bottom: 5px solid red;
    border-radius: 0.5rem;
    background: rgb(4, 17, 25);
    transition-delay: 2s ease;
    .card-C {
      width: 90%;
      height: 90%;
      transition: all 1s ease;
      &:hover {
        transform: scale(1.1);
      }
      .card-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        img {
          width: 35%;
        }
        span {
          font-size: 1.75rem;
          font-weight: bold;
          text-align: center;
          margin-top: 40px;
          z-index: 10;
          color: white;
        }
        p {
          margin-top: 1rem;
          text-transform: capitalize;
          font-weight: 700;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const ProjectF = styled.section`
  max-width: 100%;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 4rem;
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: black;
  }
`;

export const ProjectContainer = styled.div`
  margin-top: 3rem;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .card-M {
    width: 350px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    transition-delay: 2s ease;
    //background: rgb(4, 17, 25);
    margin-bottom: 3rem;
    background: hsl(0, 98%, 100%);
    box-shadow: 0px 0px 6px #d3d3d3;

    .card-C {
      width: 90%;
      height: 90%;
      transition: all 1s eas e;
      //background: rgb(4, 17, 25);
      background: hsl(0, 98%, 100%);
      .logo-p {
        img {
          max-width: 100%;
          height: 12rem;
        }
        span {
          display: flex;
          justify-content: center;
          font-weight: 600;
          font-size: 1.4rem;
          margin-top: 1rem;
          color: black;
          opacity: 0.7;
        }
      }
      .information-card {
        margin-top: 1rem;
        p {
          color: rgb(115, 115, 115);
          background-color: transparent;
          font-family: Heebo, sans-serif;
          font-weight: 500;
          line-height: 1.5;
          font-size: 1.1rem;
        }
      }
      .button-visited{
        margin-top: 2rem;
        display:flex;
        justify-content: space-between;
        transition: all 1s ease;
        button{
          border: none;
          width: 45%;
          height: 3rem;
          background: rgb(237, 44, 73);
          color: white; 
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.05s ease;
          box-shadow: 0px 0px 3px rgb(237,44,74);
          &:hover{
            transform: scale(1.1);
          }
    
        }
      }
    }
  }
`;
