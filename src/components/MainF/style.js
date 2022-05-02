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
      color: white;
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
    background-image: url("https://ae01.alicdn.com/kf/HTB15hV_LXXXXXXrXFXXq6xXFXXXE/Adesivo-de-vinil-engra-ado-com-desenho-de-gato-9-18cm-decalque-de-carro-estilo-adesivos.jpg");
    background-repeat: no-repeat;
    background-size: 700px 900px;
    background: #0a0c10;
    .info-name {
      h2 {
        font-size: 4rem;
        color: white;
        letter-spacing: 5px;
        strong {
          margin-left: 1rem;
          color: #cc0000;
        }
        margin: 0;
      }
      p {
        font-weight: 100;
        font-size: 1.3rem;
        color: white;
        border-right: 2px solid white;
        white-space: nowrap;
        overflow: hidden;
        opacity: 0.6;
        max-width: 200px;
      }
      .typing-animation {
        animation: blinkCursor 500ms infinite normal,
          typing 4s steps(40) 1s normal both;
      }
      @keyframes blinkCursor {
        from {
          border-right: 2px solid white;
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
    color: white;
  }
`;

export const ProjectContainer = styled.div`
  margin-top: 3rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: rgb(4, 17, 25);


  .card-M {
    width: 350px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    //border-bottom: 5px solid red;
    border-radius: 0.5rem;
    //background: white;
    transition-delay: 2s ease;
    background: #0a0c10;
    .card-C{
      width: 90%;
      height: 90%;
      transition: all 1s ease;
    
      .logo-p{
        img{
          width: 100%;


        }
      }
    }
  }
`;
