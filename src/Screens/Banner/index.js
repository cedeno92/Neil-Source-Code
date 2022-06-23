import { Link } from "react-scroll";

var cubes = [1, 2, 3, 4, 5];

const index = () => {
  return (
    <section style={{ position: "relative", overflow: "hidden" }} id="banner">
      <div className="background">
        {/* <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div> */}
        {cubes.map((item, i) => (
          <div key={i} className="cube"></div>
        ))}
      </div>

      <div className="banner--section">
        <div className="banner--content">
          <h1>I am Web developer and Designer</h1>
          <p>
            I am a highly motivated and goal-oriented 
            Web Developer with three years of experience 
            in programming and design, with an emphasis 
            on Web Design implementation in a variety of 
            themes and builders. Have experience with On-page 
            optimization, IDX brokers, Ahref site audits, 
            and e-commerce websites using WordPress woocommerce.
          </p>
          <div className="banner--btn">
            <Link to="about" className="cus-btn secondary-btn m-1 my-md-0">
              <span>More About</span>
            </Link>
            <Link to="contact" className="cus-btn primary-btn m-1 my-md-0">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
