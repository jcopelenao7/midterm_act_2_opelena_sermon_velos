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
        {/* Person1 */}
        <div className="col-md-4">
          <div className="card eternal-card">
            <img
              src={JSimg}
              className="card-img-top dev-img"
              alt="Person1"
            />
            <div className="card-body">
              <h5 className="card-title">Jesiah Opeleña</h5>
              <p className="card-text">
                object
              </p>
              <div className="dev-links">
                <a href="https://github.com/jcopelenao7" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/jesiah-opelena-226157303/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.youtube.com/@jcopelena" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Person2 */}
        <div className="col-md-4">
          <div className="card eternal-card">
            <img
              src={GDimg}
              className="card-img-top dev-img"
              alt="Person2"
            />
            <div className="card-body">
              <h5 className="card-title">Godffrey Paul Sermon</h5>
              <p className="card-text">
                immovable object
              </p>
              <div className="dev-links">
                <a href="https://github.com/gdznd" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/gdznd/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.youtube.com/@godffreypaulsermon4123" target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Person3 */}
        <div className="col-md-4">
          <div className="card eternal-card">
            <img
              src={JCimg}
              className="card-img-top dev-img"
              alt="Person3"
            />
            <div className="card-body">
              <h5 className="card-title">John Carl Velos</h5>
              <p className="card-text">
                the man who can't be moved.
              </p>
              <div className="dev-links">
                <a href="https://github.com/jcvelos" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/john-carl-velos-127a21351/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/jcvelos" target="_blank" rel="noreferrer">YouTube</a>
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
