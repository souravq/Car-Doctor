import bannerImage1 from "../../../assets/images/banner/5.jpg";
import bannerImage2 from "../../../assets/images/banner/1.jpg";
import bannerImage3 from "../../../assets/images/banner/2.jpg";
import bannerImage4 from "../../../assets/images/banner/3.jpg";
import "./Home.css";

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
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
