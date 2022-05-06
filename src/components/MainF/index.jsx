import React, { useEffect } from "react";
import * as S from "./style";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { ChevronDown } from "@styled-icons/bootstrap";
import ecommerce from "../../assets/ecommerce.jpg";
import calculator from "../../assets/calculadora.jpg";
import github from "../../assets/github.jpg";
import where from "../../assets/where.jpg";
import todoList from "../../assets/todo.jpg";
import newbie from "../../assets/newbie.jpg";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from "aos";

const MainF = () => {
  //Teste one
  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <S.MainF>
      <S.MContainer>
        <div className="icons-l" data-aos="fade-right">
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

        <div className="profile" data-aos="fade-left" data-aos-duration="2000">
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
        <ChevronDown width="35" height="35" color="#616161" />
      </div>

      <S.SectionF>
        <h2 data-aos="fade-up">Skills</h2>
        <S.SectionContainer>
          <div className="card-M" data-aos="fade-right" >
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

          <div className="card-M" data-aos="fade-up">
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

          <div className="card-M" data-aos="fade-up">
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

          <div className="card-M" data-aos="fade-left">
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

      <S.ProjectF>
        <h2 data-aos="fade-up">Project</h2>
        <S.ProjectContainer>
          <div className="card-M" data-aos="fade-right">
            <div className="card-C">
              <div className="logo-p">
                <img src={ecommerce} alt="ecommerce-loja" />
                <span>E-commerce product page</span>
              </div>

              <div className="information-card">
                <p>
                  In this challenge, you'll build a beautiful product page.
                  We'll be putting your JS skills to the test with a lightbox
                  product gallery and cart functionality!
                </p>
              </div>

              <div className="button-visited">
                <button>preview site</button>
                <button> view code</button>
              </div>
            </div>
          </div>
          <div className="card-M" data-aos="fade-right">
            <div className="card-C">
              <div className="logo-p">
                <img src={calculator} alt="calculadora" />
                <span>Calculator app</span>
              </div>
              <div className="information-card">
                <p>
                  This calculator app will be a great test of your CSS and JS
                  skills especially. If you're wanting to practice using Grid,
                  this challenge will be perfect for you!
                </p>
              </div>
              <div className="button-visited">
                <button>preview site</button>
                <button> view code</button>
              </div>
            </div>
          </div>
          <div className="card-M" data-aos="fade-right">
            <div className="card-C">
              <div className="logo-p">
                <img src={github} alt="github search" />
                <span>GithubSearch</span>
              </div>

              <div className="information-card">
                <p>
                  In this project, you'll use the GitHub users API to pull
                  profile data and display it. It's a great challenge if you're
                  looking to practice working with a 3rd-party API
                </p>
              </div>
              <div className="button-visited">
                <button>preview site</button>
                <button> view code</button>
              </div>
            </div>
          </div>
          <div className="card-M" data-aos="fade-right">
            <div className="card-C">
              <div className="logo-p">
                <img src={todoList} alt="todo-list" />
                <span>Todo List</span>
              </div>

              <div className="information-card">
                <p>
                  The classic todo app with a few twists! This app includes a
                  dark/light theme toggle and drag & drop reordering for anyone
                  wanting an extra test.
                </p>
              </div>
              <div className="button-visited">
                <button>preview site</button>
                <button> view code</button>
              </div>
            </div>
          </div>
          <div className="card-M" data-aos="fade-right">
            <div className="card-C">
              <div className="logo-p">
                <img src={where} alt="Where in the world" />
                <span>REST Countries API</span>
              </div>

              <div className="information-card">
                <p>
                  If you're wanting to test your JavaScript skills this is the
                  challenge for you. Use whichever JS framework you prefer and
                  pull data from the REST Countries API.
                </p>
              </div>
              <div className="button-visited">
                <button>preview site</button>
                <button> view code</button>
              </div>
            </div>
          </div>
          <div className="card-M" data-aos="fade-right">
            <div className="card-C">
              <div className="logo-p">
                <img src={newbie} alt="Article preview component" />
                <span>Article preview component</span>
              </div>
              <div className="information-card">
                <p>
                  Practice your layout skills with this article preview
                  component. There's lots of fun to be had playing around with
                  animations for the sharing icons as well.
                </p>
              </div>
              <div className="button-visited">
                <button>preview site</button>
                <button> view code</button>
              </div>
            </div>
          </div>
        </S.ProjectContainer>
      </S.ProjectF>

      <S.Contact>
        <S.ContactContainer>
          <h2>Made with ❤️ by Otavio Vieira</h2>
        </S.ContactContainer>
      </S.Contact>

    </S.MainF>
  );
};
export default MainF;
