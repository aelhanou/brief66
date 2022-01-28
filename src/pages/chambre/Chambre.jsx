import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllChambres } from "./ChambreSlice";
import { getReservationData } from "../reservation/ReservationSlice";
import { ChambreCard } from "../../components";
import Alert from '@mui/material/Alert';

export const Chambre = () => {
  const state = useSelector((state) => state.chambre);
  const stateRev = useSelector((state) => state.reservation);
  const [debitDate, setDebitDate] = useState();
  const [finDate, setFInDate] = useState();
  const [adulte, setAdulte] = useState();
  const [enfant, setEnfant] = useState();
  const [allChambres, setAllChambres] = useState([]);
  // const memoizedValue = useMemo()
  const dispatch = useDispatch();
  let winner = "images/badgewinner.png";
  let logolabel = "images/logo/favicon.png";


  let images = [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
    "/images/room5.jpg",
    "/images/room6.jpg",
  ];
  let description = [
    "Les chambres classiques Hivernage proposent une décoration aux tons embrasés créant une ambiance chaleureuse avec une agréable vue sur le jardin intérieur. Elles disposent de lits jumeaux, d'une salle de bain avec douche séparée.Un cocktail à l'arrivée, des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.",
    "Les chambres supérieures d'une superficie de 28 à 40 m² offrent un décor traditionnel marocain aux couleurs chatoyantes dans une atmosphère relaxante avec une vue sur le quartier de l'Hivernage. Elles disposent d'un grand lit, d'une salle de bain avec douche séparée.Un cocktail à l'arrivée, des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.                    ",
    "Réparties sur tous les niveaux de l’hôtel avec balcon ou terrasse, ces magnifiques chambres ont une vue soit sur la célèbre mosquée de la Koutoubia soit sur notre Jardin côté Koutoubia.Elles disposent d'un grand lit, d'une salle de bain avec douche séparée.Un cocktail à l'arrivée, des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.                    ",
    "Réparties sur tous les niveaux de l’hôtel avec balcon ou terrasse, ces magnifiques chambres ont une vue soit sur la célèbre mosquée de la Koutoubia soit sur notre Jardin côté Koutoubia.Elles disposent d'un grand lit, d'une salle de bain avec douche séparée.Un cocktail à l'arrivée, des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.                    ",
    "Ces chambres ont une vue sur les Jardins légendaires et les montagnes de l’Atlas d 'une superficie de 30 à 40 m².La combinaison du marbre et du style marocain confère aux salles de bains une ambiance apaisante Elles disposent d'un grand lit, d'une salle de bain avec douche séparée.Un cocktail à l'arrivée, des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.                    ",
    "Avec une une splendide vue sur la piscine, les Jardins légendaires et les montagnes de l’Atlas, les chambres Deluxe Agdal - D'une superficie de 30 à 45 m2 combinent confort et raffinement. Elles disposent d'un grand lit, d'une salle de bain avec douche séparée.Un cocktail à l'arrivée, des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.                    ",
  ];

  // let coverture_II= "images/background/BackG3.jpg";

  // const [chambre, setChambre] = useState({})

  useEffect(() => {
    let { debit, fin, adulte, enfant } = stateRev.reservationState;
    setDebitDate(debit);
    setFInDate(fin);
    setAdulte(adulte);
    setEnfant(enfant);
  }, [stateRev]);

  useEffect(async () => {
    dispatch(getReservationData());
  }, []);

  useEffect(() => {
    setAllChambres(state.allChambares);
    console.log(allChambres);
  }, [state]);

  const reservations = (e) => {
    if (e.length > 0) {
      let reserved = e?.map((f) => {
        let datedebit = f?.dateDeDebit.split("T");
        let datefin = f?.dateDeFin.split("T");
        let lastDatedebitFromDB = datedebit[0].split("-").join("/");
        let lastDatefinFromDB = datefin[0].split("-").join("/");
        let newDateDebitFront = debitDate.split("/").reverse().join("/");
        let newDateFinFront = finDate.split("/").reverse().join("/");
        if (
          (newDateDebitFront <= lastDatedebitFromDB &&
            newDateFinFront >= lastDatefinFromDB) ||
          (newDateDebitFront >= lastDatedebitFromDB &&
            newDateFinFront <= lastDatefinFromDB)
        ) {
          return true;
        } else {
          return false;
        }
      });
      return reserved.some((e) => e != false);
    }
    return false;
  };
  // const getstate = () => {
  //   dispatch(
  //     addChambre({
  //       nomDeCHambre: "room 30",
  //       prixDeChambre: "600dh",
  //       capacityDeChambre: " 4 ",
  //       idTypeDeChambre: "61dab7402d2cfad73e417acb",
  //     })
  //   );
  // };
  useEffect(async () => {
    dispatch(getAllChambres());
  }, []);

  const css = `
  .chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }
  
  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }
  
  .chevron:before,
  .chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }
  
  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }
  
  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
  
  @keyframes move {
    25% {
      opacity: 1;
  
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
  
  .text {
    display: block;
    margin-top: 75px;
    margin-left: -30px;
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: .25;
    animation: pulse 2s linear alternate infinite;
  }
  
  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`

  // useEffect(()=>{
  //     console.log(stateRev.reservation);
  // },[stateRev])

  // const getReservation = () => {
  //   console.log(stateRev.reservationState);
  // };

  return (
    <div className="bg-black text-white font-anas">
      <div className="top-0 left-20 w-[130px] fixed z-[330]">
        <img src={winner} alt="" />
      </div>
      <div className="w-full "
        style={{
          backgroundImage: `url("/images/background/BackG3.jpg")`,
          zIndex: "-10",
          backgroundSize: "cover",
          height: "100vh",
          minHeight: "500px",
          backgroundAttachment: "fixed",
        }}>
      </div>
      <div className="w-full absolute h-[100vh] flex justify-center items-center top-0" style={{ zIndex: "10" }}>
        <h2 className="flex text-6xl pb-20 justify-center items-center h-screen"> Réserve Your Room</h2>
        
        {/* Button Scroll Down */}
        <div> 
          <div className="container absolute left-[50%] bottom-[10%] z-50 w-7 h-7">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
            <style>
              {css}
            </style>
          </div>
        </div>
      </div>
      <div className="flex w-full" style={{ zIndex: "100" }}>
        <div className="w-[80%] grid grid-cols-4 gap-6 p-20">
          {state?.allChambares.map((e, i) => (
            <ChambreCard
              img={images[i]}
              description={description[i]}
              key={e?._id}
              nomdechambre={e?.nomDeCHambre}
              prixDeChambre={e?.prixDeChambre}
              disable={reservations(e?.id_Reservations)}
              yo="asfa"
            />
          ))}
        </div>
        {state?.allChambares.length > 0 && (
          <div className="flex flex-col gap-8 fixed right-[50px] top-[50px] bg-white  drop-shadow-xl text-black  mt-10 rounded-md  w-[19%] px-4 py-8 h-auto backdrop-blur-sm">
            <div className="w-full header_card">
              <img className="pt-[5%] px-[35%]" src={logolabel} alt="" />
            </div>
            <div className="text-center text-xl font-semibold">Complete your Stay</div>
            <div className="flex justify-between bg-white drop-shadow-xl p-5 rounded-xl flex-col">
              <div className="flex flex-col">
                <div className="overflow-x-auto max-w-full text-center justify-center">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th className="bg-gray-100">Check-in</th>
                        <th className="bg-gray-100">Check-out</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-white">{debitDate && debitDate}</td>
                        <td className="bg-white">{finDate && finDate}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table w-full text-center">
                    <thead>
                      <tr>
                        <th className="bg-gray-100">Adults</th>
                        <th className="bg-gray-100">Children</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-white">{adulte && adulte}</td>
                        <td className="bg-white">{enfant && enfant}</td>
                      </tr>
                      <tr>
                        <td className="bg-white">Price :</td>
                        <td className="bg-white">0,00 MAD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
          </div>
        )}
      </div>
        {/* <div className="w-[100%] overflow-x-scroll">
          <div className="w-[80%]  flex justify-center gap-6 items-center ">
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo1
          </div>
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo2
          </div>
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo3
          </div>
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo4
          </div>
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo5
          </div>
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo6
          </div>
          <div className="w-[450px] h-[400px] bg-gray-50 text-black">
            yo7
          </div>
          </div>
        </div> */}
    </div >
  );
};
