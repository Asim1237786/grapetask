import React, { useState } from "react";
import Loginleft from "../components/Loginleft";
import Login1 from "../components/Login1";
import CommonHelmet from './CommonHelmet';


const Login = () => {
 

  return (
    <>
     <CommonHelmet />
                     <Helmet>
                     <title>Grapetask Login </title>
                     <meta name="description" content="GrapeTask is the go-to freelancing platform for businesses to grow and succeed with affordable, reliable freelance services"/>
                       <link rel="canonical" href="https://www.grapetask.co/login" />
                     </Helmet>
      {/*  */}
    
      <div className="container-fluid poppins min-100vh">
        <div className="row min-100vh">
          <Loginleft />
          <Login1 />
        </div>
      </div>
    </>
  );
};

export default Login;
