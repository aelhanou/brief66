import React from "react";


export const Slide = () => {
return (

    <div className="w-full carousel">
      <div id="slide1" className="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/500/800/300" className="w-full" /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide4" className="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/501/800/300" className="w-full" /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide1" className="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/502/800/300" className="w-full" /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide2" className="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/503/800/300" className="w-full" /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide3" className="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}