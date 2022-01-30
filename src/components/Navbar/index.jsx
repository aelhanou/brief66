import React from "react";

let logo = "/images/logo/logo-label.png"

export const Navbar = () => {
  return (
    <>
      <div className='NavBar fixed text-black w-full bg-regal-blue z-[300] border-border-nav items-top flex'>
            <div className='max-w-7xl mx-auto w-full flex flex-row'>
                <div className='py-4 px-8 flex justify-center mx-auto w-full flex-row lg\:px-8 text-white'>
                    <img className='w-auto h-9' src={logo} alt="" />
                </div>
            </div>
        </div>
    </>
  );
};
