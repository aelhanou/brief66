import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const InputCount = ({ setCount, status }) => {
  const [ChangeCount, setChangeCount] = useState(0);

  const Inctrement = () => {
    setChangeCount(ChangeCount + 1);
  };
  const Dectrement = () => {
    setChangeCount(ChangeCount - 1);
  };

  useEffect(() => {
    setCount(ChangeCount);
  }, [ChangeCount]);

  return (
    <div className="h-80">
      <div className="custom-number-input  w-full p-2 mb-2">
        <label
          htmlFor="custom-input-number"
          className="w-full text-xl text-gray-700 font-serif font-semibold"
        >
          {status}
        </label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={() => (ChangeCount >= 1 ? Dectrement() : 0)}
            data-action="decrement"
            className="  h-52 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="tel"
            className="h-52 text-9xl outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  "
            name="custom-input-number"
            value={ChangeCount}
            onChange={(e) => e.target.value}
            inputMode="numeric"
            style={{background:"none"}}
          />
          <button
            onClick={() => Inctrement()}
            data-action="increment"
            className=" h-52 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};


InputCount.propTypes = {
  setCount:PropTypes.func,
  status:PropTypes.string,
 
};