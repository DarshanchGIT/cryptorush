import React from "react";
import {BallTriangle} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#ffa500"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
