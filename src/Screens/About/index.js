// import Ztext from "react-ztext";
import Mypic from './mypic.jpg'
import programmer from './programmer.png'

const index = () => {
  return (
    <section className="about--section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="about--sub--title">ABOUT</h5>
            <h3 className="about--title">
            Neil Guibson Cedeño
            </h3>
            <div className="bar"></div>
            <div className="about--content">
              <div>
                <i className="fas fa-user"></i>
              </div>
              <div>
                <p>
                  I'm a freelance web developer from the Philippines who 
                  is passionate about building front-end WordPress websites 
                  and responsive websites. I can provide you with custom 
                  WordPress websites and themes, as well as dynamic websites 
                  or dynamic landing pages. I would love to help you if you 
                  need some changes made to your current WordPress website. 
                  Some of the tools I use are HTML, CSS, Javascript, and WordPress. 
                  My previous experience in developing a website, plugin integration, 
                  and educational attainment as an IT professional will help me 
                  provide you with a positive experience and a website that will 
                  positively impact your business.
                </p>
                <p>
                  My previous experience in developing a website, plugin integration, 
                  and educational attainment as an IT professional will help me 
                  provide you with a positive experience and a website that will 
                  positively impact your business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              {/* <Ztext
                depth="1rem"
                direction="both"
                event="pointer"
                eventRotation="10deg"
                eventDirection="default"
                fade={false}
                layers={5}
                perspective="500px"
              >
                <span role="img" className="zImg"> */}
              <img
                src={Mypic}
                className="about-img-1"
              />
              {/* </span>
              </Ztext> */}
              <img
                src={programmer}
                className="about-img-2"
              />
              <span className="about-img-shape"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
