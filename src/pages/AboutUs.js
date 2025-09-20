import { useNavigate } from "react-router-dom";
import JSimg from "./images/JSimg.jpg"
import GDimg from "./images/GDimg.jpg"
import JCimg from "./images/JCimg.jpg"


function AboutUs() {
  const navigate = useNavigate();
  const proceedHome = () => {
    navigate("/home");
  };

  return (
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        we made the <span className="eternals-highlight">best</span>, 
        website ever!
      </p>

      <div className="row developer-cards">
        {/* Developer 1 */}
        <div className="col-md-4">
          <div className="card eternal-card">
            <img
              src={JSimg}
              className="card-img-top dev-img"
              alt="Developer 1"
            />
            <div className="card-body">
              <h5 className="card-title">Jesiah Opeleña</h5>
              <p className="card-text">
                She's a 10, turning 11.
              </p>
              <div className="dev-links">
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="col-md-4">
          <div className="card eternal-card">
            <img
              src={GDimg}
              className="card-img-top dev-img"
              alt="Developer 2"
            />
            <div className="card-body">
              <h5 className="card-title">Godffrey Paul Sermon</h5>
              <p className="card-text">
                I can't clear MoC.
              </p>
              <div className="dev-links">
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer 3 */}
        <div className="col-md-4">
          <div className="card eternal-card">
            <img
              src={JCimg}
              className="card-img-top dev-img"
              alt="Developer 3"
            />
            <div className="card-body">
              <h5 className="card-title">John Carl Velos</h5>
              <p className="card-text">
                He who is known as JC just like our homie J-
              </p>
              <div className="dev-links">
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-success back-btn" onClick={proceedHome}>
        Back to Earth?
      </button>
    </div>
  );
}

export default AboutUs;
