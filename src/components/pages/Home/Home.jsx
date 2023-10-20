import bannerImage1 from "../../../assets/images/banner/5.jpg";
import bannerImage2 from "../../../assets/images/banner/1.jpg";
import bannerImage3 from "../../../assets/images/banner/2.jpg";
import bannerImage4 from "../../../assets/images/banner/3.jpg";

import aboutUs1 from "../../../assets/images/about_us/person.jpg";
import aboutUs2 from "../../../assets/images/about_us/parts.jpg";
import "./Home.css";
import Card from "./Card";

export default function Home() {
  return (
    <div>
      <div className="carousel w-full carouselDiv">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImage1} className="w-full" />
          <div className="absolute w-2/4  ContentDiv">
            <span className="bannerHeading">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </span>
            <p className="bannerDescription">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <br />
            <div>
              <button className="btn btn-error">
                <span className="bannerButtonText">Discover More</span>
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-outline"
                style={{ border: "1px solid white" }}
              >
                <span className="bannerButtonText">Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImage2} className="w-full" />
          <div className="absolute w-2/4  ContentDiv">
            <span className="bannerHeading">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </span>
            <p className="bannerDescription">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <br />
            <div>
              <button className="btn btn-error">
                <span className="bannerButtonText">Discover More</span>
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-outline"
                style={{ border: "1px solid white" }}
              >
                <span className="bannerButtonText">Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImage3} className="w-full" />
          <div className="absolute w-2/4  ContentDiv">
            <span className="bannerHeading">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </span>
            <p className="bannerDescription">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <br />
            <div>
              <button className="btn btn-error">
                <span className="bannerButtonText">Discover More</span>
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-outline"
                style={{ border: "1px solid white" }}
              >
                <span className="bannerButtonText">Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerImage4} className="w-full" />
          <div className="absolute w-2/4  ContentDiv">
            <span className="bannerHeading">
              Affordable
              <br /> Price For Car
              <br /> Servicing
            </span>
            <p className="bannerDescription">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <br />
            <div>
              <button className="btn btn-error">
                <span className="bannerButtonText">Discover More</span>
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-outline"
                style={{ border: "1px solid white" }}
              >
                <span className="bannerButtonText">Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="hero h-4/5 mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row relative">
            <div style={{position:"relative"}} className="w-2/4">
                <img
                src={aboutUs1}
                className="max-w-sm rounded-lg shadow-2xl"
                />
            <img src={aboutUs2} className="max-w-sm rounded-lg shadow-2xl" alt="About Us" style={{position:"absolute",
    top: "50%",
    left: "30%",
    border: "10px solid white"}}/>
            </div>
            
            <div className="w-2/4 ml-10">
                <p className="aboutUs">About Us</p><br/>
                <p className="aboutUsHeading">We are qualified & of experience in this field!</p><br/>
                <p className="aboutUsText">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br/>
                The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                </p><br/>
                <button className="btn btn-error aboutUsButtonText">Get More Info</button>
            </div>
        </div>
      </div>
      <div className="mt-28">
        <div className="serviceTop">
            <p className="serviceTopHeading">Service</p>
            <p className="serviceTopHeadingText">Our Service Area</p>
            <p className="serviceTopText">The majority have suffered alteration in some form, by injected humour, or randomised<br/> words which do not look even slightly believable.</p>
        </div>
        <br/>
        <div className="grid grid-cols-3 gap-4 gap-x-8">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  );
}
