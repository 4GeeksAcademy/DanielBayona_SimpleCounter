import React, { useState, useEffect } from "react";
import Card from "../component/card/Card.jsx";
import Button from "../component/buttons/Button.jsx";
import CountDownInput from "../component/countDownInput/CountDown.jsx";
import AlertNumber from "../component/alertNumber/AlertNumber.jsx"
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [alertValue, setAlertValue] = useState(null);


    const startCounter = () =>{
        setIsCountingDown(false);
        setIsRunning(true);
    }

    const stopCounter = () =>{
        setIsRunning(false);
    }

    const resetCounter = () =>{
        setCount(0);
        setIsRunning(false);
    }

    const handleCountDown = (value) => {
        setCount(parseInt(value));
        setIsRunning(true);
        setIsCountingDown(true);
    }

    const handleAlert = (value) =>{
      setAlertValue(value);
    }

    useEffect(() =>{
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                if (isCountingDown && count > 0) {
                    setCount(prevDigit => prevDigit - 1);
                } 
                else {
                    setIsCountingDown(false)
                    setCount(prevDigit => prevDigit + 1);
                }
            }, 1000)
            return () => clearInterval(interval);
        }
    },[isRunning, count, isCountingDown]);

    useEffect(() =>{
        if(count === alertValue) {
            alert(`Counter reached ${alertValue}`);
        }
    },[count,alertValue,count])

    return (
        <>
            <div className="container-fluid bg-dark no-margin-top">
                <div className="row d-flex flex-row justify-content-center gap-1 text-center">
                    <Card number={<FontAwesomeIcon icon={faClock} />} />
                    <Card number={Math.floor(count / 100000) % 10} />
                    <Card number={Math.floor(count / 10000) % 10} />
                    <Card number={Math.floor(count / 1000) % 10} />
                    <Card number={Math.floor(count / 100) % 10} />
                    <Card number={Math.floor(count / 10) % 10} />
                    <Card number={Math.floor(count / 1) % 10} />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 d-flex justify-content-center gap-5">
                        <Button text="Start" onClick={startCounter} />
                        <Button text="Stop" onClick={stopCounter} />
                        <Button text="Reset" onClick={resetCounter} />
                        <CountDownInput label="Start Count Down" countDownValue={handleCountDown}/>
                        <AlertNumber label="Alert Number" alertValue={handleAlert}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;