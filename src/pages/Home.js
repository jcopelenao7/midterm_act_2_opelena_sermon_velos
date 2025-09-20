import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const proceedPortfolio = () => {
        navigate('/portfolio')
    }


  return (
    <div className="Home">
        <h1>Home</h1>
        <button type="button" class="btn btn-success" onClick={proceedPortfolio}>My Portfolio</button>
    </div>
  );
}

export default Home;