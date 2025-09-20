import { useNavigate } from "react-router-dom";


function About() {
    const navigate = useNavigate();
    const proceedHome = () => {
        navigate('/home')
    }
  return (
    
    <div className="About">
        <h1>About</h1>
        <button type="button" class="btn btn-success" onClick={proceedHome}>My Home</button>

    </div>
  );
}

export default About;