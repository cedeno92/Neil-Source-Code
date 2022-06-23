import { useState } from "react";
import OwlCarousel from "react-owl-carousel2";

const options = {
  items: 4,
  nav: true,
  rewind: true,
  autoplay: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
};

const Index = () => {
  const [sliders, setSliders] = useState([
    {
      id: "1",
      imgurl:
        "https://img.freepik.com/free-psd/hiking-concept-web-template_23-2148467097.jpg?size=626&ext=jpg&ga=GA1.2.1448834646.1655918359",
      title: "Project 1",
      type: "Web Design",
    },
    {
      id: "2",
      imgurl:
        "https://img.freepik.com/free-psd/minimalist-scrapbook-web-design-template_23-2149197312.jpg?size=626&ext=jpg&ga=GA1.2.1448834646.1655918359",
      title: "Project 2",
      type: "Web Design",
    },
    {
      id: "3",
      imgurl:
        "https://img.freepik.com/free-psd/restaurant-opening-web-template-design_23-2148410411.jpg?size=626&ext=jpg&ga=GA1.2.1448834646.1655918359",
      title: "Project 3",
      type: "Web Design",
    },
    {
      id: "4",
      imgurl:
        "https://img.freepik.com/free-psd/american-food-website-app-template_23-2148477329.jpg?size=626&ext=jpg&ga=GA1.2.1448834646.1655918359",
      title: "Project 4",
      type: "Web Design",
    },
    {
      id: "5",
      imgurl:
        "https://img.freepik.com/free-psd/social-media-marketing-agency-web-design-template_23-2149073401.jpg?size=626&ext=jpg&ga=GA1.2.1448834646.1655918359",
      title: "Project 5",
      type: "Web Design",
    },
    {
      id: "6",
      imgurl:
        "https://img.freepik.com/free-psd/sushi-concept-website-template_23-2148459644.jpg?size=626&ext=jpg&ga=GA1.2.1448834646.1655918359",
      title: "Project 6",
      type: "Web Design",
    },
  ]);
  return (
    <section id="portfolio" className="protfolio--section">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8">
            <h5 className="about--sub--title">portfolio</h5>
            <h3 className="about--title">Some of my latest Projects</h3>
            <div className="bar"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel options={options}>
              {sliders.map((slider) => (
                <div className="portfolio--item" key={slider.id}>
                  <img src={slider.imgurl} alt={slider.title} />
                  <div className="portfolio--text">
                    <h3>{slider.title}</h3>
                    <p>{slider.type}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
