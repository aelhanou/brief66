import React from "react";
import PropTypes from 'prop-types';


export const ChambreCard = ({
  id,
  img,
  description,
  nomdechambre,
  prixDeChambre,
  disable,
  yo
}) => {
  // if (disable == true) {
  //   console.log("true");
  // } else {
  //   console.log("false");
  // }

  console.log(yo);
  return (
    <div key={id}>
      <div className="flex items-center bg-black w-full px-4 py-10 bg-cover card ">
        <div className="card glass lg:card-side text-neutral-content">
          <figure className="p-6">
            <img
              src={img}
              className="rounded-lg shadow-lg"
              style={{ width: "350px", height: "250px" }}
            />
          </figure>
          <div className="max-w-md card-body">
            <h2 className="card-title ">{nomdechambre}</h2>
            <textarea
              value={description}
              className="bg-transparent border-none outline-none overflow-hidden resize-none"
              cols="40"
              rows="4"
              onChange={(e) => e.target.value}
            />
            <h2 className="mt-4 flex justify-end text-2xl w-full">
              {prixDeChambre}
            </h2>
            <div className="card-actions">
              <button
                className="btn glass  rounded-full"
                disabled={disable && true }
              >
                Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



ChambreCard.propTypes = {
  id:PropTypes.string,
  img:PropTypes.string,
  description:PropTypes.string,
  nomdechambre:PropTypes.string,
  prixDeChambre:PropTypes.string,
  disable:PropTypes.bool,
  yo: PropTypes.bool
};