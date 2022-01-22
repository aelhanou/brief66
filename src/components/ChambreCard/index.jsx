import React from "react";

export const ChambreCard = ({ id, img, description, nomdechambre,prixDeChambre }) => {
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
            <textarea value={description}
              className="bg-transparent border-none outline-none overflow-hidden resize-none"
              cols="40"
              rows="4"
              onChange={(e) => e.target.value}
            />
            <h2 className="mt-4 flex justify-end text-2xl w-full">{prixDeChambre}</h2>
            <div className="card-actions">
              <button className="btn glass  rounded-full">Reservation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
