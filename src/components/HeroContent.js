import { Fragment, useContext } from "react";
import { Context } from "../context/context";
import TypedText from "./Typed";

const HeroContent = () => {
  const { sectionToggle } = useContext(Context);

  const iconStyle = {
    height: "1.9em",
    width: "auto",
    transition: "opacity 0.2s",
    cursor: "pointer",
    position: "relative"
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-section d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h2>
                  hi ! i’m<span> Brandon.</span>
                </h2>
                <p>
                  I am <TypedText></TypedText>
                </p>
                <div className="buttons">
                  <a
                    id="link-about"
                    href="#about"
                    className="btn main-btn link-page"
                    onClick={() => sectionToggle("about")}
                  >
                    <span>More about me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Main Content Ends */}
      {/* Social Media Starts */}
      <div className="home-social d-none d-sm-block">
        <ul className="social list-unstyled d-flex m-0">
          <li className="linkedin">
            <a title="Linkedin" href="https://www.linkedin.com/in/brandonchristopher97/" target="_blank">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li className="github">
            <a title="Github" href="https://github.com/BrandonDK97/" target="_blank">
              <i className="fa fa-github" />
            </a>
          </li>
          <li className="instagram">
            <a title="Instagram" href="https://www.instagram.com/brandonchris_/" target="_blank">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li className="whatsapp">
            <a title="Whatsapp" href="https://wa.me/+6594551972" target="_blank">
              <i className="fa fa-whatsapp" />
            </a>
          </li>
        </ul>
      </div>
      {/* Social Media Ends */}
      {/* Home Contact Starts */}
      <div className="home-contact d-none d-sm-block">
        <p style={{fontSize:"10px", fontStyle: "italic"}}>
          Created on Next.js 
          <br/>
          Hosted on Vercel
        </p>
      </div>
    </Fragment>
  );
};
export default HeroContent;
