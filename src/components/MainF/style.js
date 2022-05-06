import styled from "styled-components";

export const MainF = styled.main`
  width: 100%;
  height: 90.5vh;
  @media (max-width: 836px) {
  }
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
  @media (max-width: 836px) {
    width: 100%;
  }
  .icons-l {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.05s ease;

    ul {
      display: flex;
      flex-direction: column;
      color: white;
      font-size: 1.7rem;
      cursor: pointer;
      color: ${(props) => props.theme.colors.fontHeader};
      opacity: 0.8;
      list-style: none;
      li {
        margin-bottom: 0.5rem;
        margin-left: 1.5rem;
        transition: all 1s ease;
        &:hover {
          transform: scale(1.2);
          transition: all 0.05s ease;
        }
        button {
          border: none;
          background: transparent;
          color: white;
        }
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
    overflow: hidden;
    @media (max-width: 441px) {
      margin-left: 3rem;
    }
    @media (max-width: 356px) {
      width: 200px;
    }
    @media (max-width: 700px) {
      width: 500px;
    }
    @media (max-width: 459px) {
      margin-left: 2.3rem;
    }
    .info-name {
      @media (max-width: 1115px) {
        max-width: 100%;
      }
      h2 {
        color: ${(props) => props.theme.colors.fontHeader};
        letter-spacing: 5px;
        overflow: hidden;
        font-size: clamp(2rem, 8vw, 4rem);
        strong {
          margin-left: 1rem;
          color: #cc0000;
        }
        margin: 0;
      }
      p {
        font-weight: 100;
        font-size: 1.3rem;
        border-right: 2px solid white;
        white-space: nowrap;
        overflow: hidden;
        opacity: 0.6;
        max-width: 200px;
        color: ${(props) => props.theme.colors.fontHeader};
      }
      .typing-animation {
        animation: blinkCursor 500ms infinite normal,
          typing 4s steps(40) 1s normal both;
      }
      @keyframes blinkCursor {
        from {
          border-right: 2px solid ${(props) => props.theme.colors.fontHeader};
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
      @media (max-width: 953px) {
        width: 55%;
      }
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
`;
export const SectionF = styled.section`
  width: 100%;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.bodyHeader};
  overflow: hidden;
  h2 {
    margin-top: 4rem;
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.fontHeader};
  }
`;
export const SectionContainer = styled.div`
  padding-top: 3rem;
  width: 90%;
  height: 100%;
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
    box-shadow: 0px 1px 15px ${(props) => props.theme.colors.shadowCard};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.bodyHeader};
    margin-bottom: 2rem;
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
          color: ${(props) => props.theme.colors.fontHeader};
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
  width: 100%;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.bodyCard};
  h2 {
    margin-top: 4rem;
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.fontHeader};
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
    @media (max-width: 425px) {
      width: 320px;
      height: 500px;
    }
    @media (max-width: 320px) {
      width: 270px;
      height: 540px;
    }
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    transition-delay: 2s ease;
    margin-bottom: 3rem;
    background: ${(props) => props.theme.colors.bodyCard};
    box-shadow: 0px 1px 15px ${(props) => props.theme.colors.shadowCard};
    .card-C {
      width: 90%;
      height: 90%;
      transition: all 1s eas e;
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
          color: ${(props) => props.theme.colors.fontHeader};
          opacity: 0.7;
        }
      }
      .information-card {
        margin-top: 1rem;
        p {
          color: ${(props) => props.theme.colors.fontHeader};
          background-color: transparent;
          font-family: Heebo, sans-serif;
          font-weight: 500;
          line-height: 1.5;
          font-size: 1.1rem;
          opacity: 0.5;
        }
      }
      .button-visited {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        transition: all 1s ease;
        button {
          border: none;
          width: 45%;
          height: 3rem;
          background: rgb(237, 44, 73);
          cursor: pointer;
          transition: all 0.05s ease;
          box-shadow: 0px 0px 3px rgb(237, 44, 74);
          color: white;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 700;
          text-decoration: none;
          &:hover {
            transform: scale(1.1);
          }
          a {
            color: white;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 700;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

export const Contact = styled.section`
  width: 100%;
  height: 15%;
  background: ${(props) => props.theme.colors.bodyHeader};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.div`
  h2 {
    color: ${(props) => props.theme.colors.fontHeader};
    font-size: 1.3rem;
  }
`;
