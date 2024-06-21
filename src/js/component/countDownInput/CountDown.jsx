import React, {useState} from "react";
import "./CountDown.css"




const CountDownInput = ({label, countDownValue}) =>{

    const [number, setNumber] = useState("");

    const sendValue = () => {
        if(number === ""){
            document.getElementById("countDown-input").classList.add("invalid")
        } else{
            document.getElementById("countDown-input").classList.remove("invalid")
            countDownValue(number);
            setNumber("")
        }
       
    };

    const linkValueOfInput = (number) =>{
        setNumber(number.target.value);
    }
    
    

    return(
        <div className="input-group mb-3 widthStyle">
            <button className="btn btn-dark buttonStyle" type="button" id="button-addon1" onClick={sendValue}>{label}</button>
            <input  id="countDown-input" type="number" className="form-control" onChange={linkValueOfInput} value={number} placeholder="Add number in seconds for count down" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>

    )

}

export default CountDownInput;