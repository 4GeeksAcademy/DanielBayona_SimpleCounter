import React, {useState} from "react";
import "./AlertNumber.css"



const AlertNumber= ({alertValue,label}) =>{
    const [alertNumber, setAlertNumber] = useState("");

    const sendAlertValue = () =>{
        if (alertNumber === ""){
            document.getElementById("alertInput").classList.add("alertStyle");
        }else{
            document.getElementById("alertInput").classList.remove("alertStyle")
            alertValue(parseInt(alertNumber));
        }
    }

    const linkValueOfAlert = (number) =>{
        setAlertNumber(number.target.value);
    }

    return(
        <div className="input-group mb-3 widthStyle">
            <button className="btn btn-dark buttonStyle" type="button" id="button-addon2" onClick={sendAlertValue}>{label}</button>
            <input id="alertInput" type="number" className="form-control" onChange={linkValueOfAlert} value={alertNumber} placeholder="Alert number" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>

    )
}

export default AlertNumber;