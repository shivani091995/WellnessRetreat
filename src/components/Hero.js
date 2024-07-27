import React from "react";


function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="backimg" src={props.heroImg} />
      </div>
    </>
  );
}

export default Hero;
