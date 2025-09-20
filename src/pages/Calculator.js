import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


function Calculator() {
    let [firstvalue, setFirstvalue] = useState("") 
    const [symbol, setSymbol] = useState("") 
    let [secondvalue, setSecondvalue] = useState("")
    const [title, setTitle] = useState("")



    // placeholder values
    const realfirstvalue = "admin";
    const realsecondvalue = "adminsecondvalue";
    const navigate = useNavigate();

    const result = () => {
        if(symbol === '+'){
            return parseInt(firstvalue) + parseInt(secondvalue);
        }
        else if(symbol === '-'){
            return parseInt(firstvalue) - parseInt(secondvalue);
        }
        else if(symbol === '/'){
            return parseInt(firstvalue) / parseInt(secondvalue);
        }
        else if(symbol === '%'){
            return parseInt(firstvalue) % parseInt(secondvalue);
        }
        return '';
    }

    useEffect(() => {
        setTitle(`Hello, ${result()}`);
    }, [firstvalue, secondvalue, symbol])

    const handleCalculator = (e) =>{
        e.preventDefault();
        if(firstvalue === realfirstvalue && secondvalue === realsecondvalue){
            alert("Logged In Sucessfully")
            navigate("/home")
        }
        else{
            alert("Logged In Error")
        }
    }
    return (
    
    <div>
        <h1>Calculator Form</h1>
        <h2>{title}</h2>
        <form onSubmit={handleCalculator}>
            <div className='form-group'>
                <label>firstvalue</label>
                <input type='text' className='form-control' value={firstvalue} required maxLength={20} onChange={(e) => setFirstvalue(e.target.value)}></input>
            </div>

            <div className='form-group'>
                <label>symbol thing</label>
                <input type='text' className='form-control' value={symbol} required maxLength={20} onChange={(e) => setSymbol(e.target.value)}></input>
            </div>

            <div className='form-group mb-5'>
                <label>secondvalue</label>
                <input type='text' className='form-control' value={secondvalue} required maxLength={20} onChange={(e) => setSecondvalue(e.target.value)}></input>
            </div>
            <button type="submit" class="btn btn-success">Calculate</button>
        </form>
    </div>
  );
}

export default Calculator;