import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addReservation } from "../../pages/reservation/ReservationSlice";

export const ChambreCard = ({
  Id,
  img,
  description,
  nomdechambre,
  prixDeChambre,
  disable,
}) => {
  const state = useSelector((state) => state.reservation);
  const [reservation, setReservaion] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setReservaion(state.reservationState);
  }, [state, reservation]);

  const getIdChambre = (id) => {
    let reservationData = { ...reservation, idChambre: id };
    dispatch(addReservation(reservationData));
    navigate("/reservationinfo");
  };
  return (
    <div key={Id}>
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
                disabled={disable && true}
                onClick={() => getIdChambre(Id)}
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
  Id: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  nomdechambre: PropTypes.string,
  prixDeChambre: PropTypes.string,
  disable: PropTypes.bool,
};
