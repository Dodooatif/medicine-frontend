import React from "react";
import small from "../images/small.jpg";

const Home = () => {
  return (
      <h1
        style={{
          height: "100vh",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "50%",
          backgroundImage: `url(${small})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        Medication Tracker App
      </h1>
  );
};

export default Home;
