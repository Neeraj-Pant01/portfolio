import React, { useRef } from 'react';
import { Link, animateScroll } from 'react-scroll';

const Test = () => {

    const scrolleffect = (prop) =>{
        const element = document.getElementById(`${prop}`)
        element.scrollIntoView({behavior:"smooth"})
    }

  return (
    <>
      <div className="links">
        <button onClick={()=>scrolleffect("first")}>third</button>
        <button onClick={()=>scrolleffect("second")}>2</button>
        <button onClick={()=>scrolleffect("third")}>3</button>
        <button onClick={()=>scrolleffect("fourth")}>4</button>

      </div>
      <div style={{ height: '50vh', border: '2px solid red' }} id='first'>
        First
      </div>
      <div style={{ height: '50vh', border: '2px solid yellow' }}id="second">
        Second
      </div>
      <div style={{ height: '50vh', border: '2px solid green' }}  id="third">
        Third
      </div>
      <div id='fourth' style={{ height: '50vh', border: '2px solid blue' }}>
        Fourth
      </div>
    </>
  );
};

export default Test;
