import { useEffect, useState } from "react";
import "./Breathe.scss";
import {TIME} from './common/utils'

const TIMER = 4000;
const SECONDS = 12;

const Breathe = ({ onDone }) => {
  const [inhale, setInhale] = useState(true),
  [seconds, setSeconds] = useState(SECONDS);

  useEffect(() => {
    setInhale(true);
    setSeconds(SECONDS);
  }, []);
  useEffect(() => {
    let toggle = setInterval(() => setInhale(!inhale), TIMER);
    return () => clearInterval(toggle);
  },[inhale]);

  useEffect(()=>{
    if(seconds>0){
      let cancel = false;
      let timeout = TIME(seconds, setSeconds, cancel, true,);
      
      return () => {
        clearTimeout(timeout);
        cancel = true;
      };
    }

    if(seconds===0){
      onDone()
    }
  },[seconds])
  
  return (
    <>
      <div className="game-breathe">
        <div className="game-breathe-time-count">Breathing Exercise : {seconds} Sec</div>
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#348f50" />
              <stop offset="100%" stopColor="#56b4d3" />
            </linearGradient>
          </defs>
          <circle
            style={{
              transform: "scale(1)",
              animation: `pulse ${(TIMER * 2) / 1000}s infinite`
            }}
            cx="50%"
            cy="50%"
            r="20%"
            fill="url(#gradient)"
          />
          <text
            className="game-breathe-text"
            x="50%"
            y="50%"
            textAnchor="middle"
            stroke="#000000"
            strokeWidth="2px"
            dy=".3em"
          >
            {`${inhale ? "in" : "ex"}hale`}
          </text>
        </svg>
      </div>
      {/* <div className="emotion-basic-cta">
        <button className="emotion-basic-button" onClick={() => onDone()}>
          NEXT
        </button>
      </div> */}
    </>
  );
};

export default Breathe;


// .game-breathe-time-count{
//     color: #000000;
//     font-family: "AvenirNext-Bold", sans-serif;
//   }