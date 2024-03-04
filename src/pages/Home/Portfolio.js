import React from "react";

const Portfolio = () => {
  return (
    <div className="p-20">
      <h2 className="text-center text-3xl mb-8 font-bold">My Portfolio</h2>
      <div className="border flex items-center justify-center">
        <a href="https://mohsin-hossain-portfolio.vercel.app/" target="_blank">
          <div className="portfolio text-center transform scale-100 transition duration-300 hover:scale-105">
            <img src="https://i.ibb.co/c6Ydw0V/Mohsin-Hossain.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
