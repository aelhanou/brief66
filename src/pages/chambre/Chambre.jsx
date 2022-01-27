import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllChambres } from "./ChambreSlice";
import { getReservationData } from "../reservation/ReservationSlice";
import { ChambreCard } from "../../components";

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
    <div className="bg-black text-white">
      <div className="top-0 left-20 w-[130px] fixed">
        <img src={winner} alt="" />
      </div>
      <div className="w-full"
        style={{
          backgroundImage: `url("/images/background/BackG3.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <h2 className="flex text-6xl pb-20 justify-center items-center h-screen"> Réserve Your Room</h2>
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
      <div className="flex w-full">
        <div className="w-[76%]">
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
          <div className="flex flex-col gap-8 fixed right-[60px] top-[50px] bg-white text-black  mt-10 rounded-sm  w-[19%] p-4 h-[480px] backdrop-blur-sm">
            <div>Votre séjour</div>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <div>Arrivée Après</div>
                <div>le {debitDate && debitDate}</div>
              </div>
              <div className="flex flex-col">
                <div>Départ Avant</div>
                <div>le {finDate && finDate}</div>
              </div>
            </div>
            <div>
              {adulte && adulte} adulte And {enfant && enfant} enfant
            </div>
            <div>Total : 0,00 MAD</div>
          </div>
        )}
      </div>
    </div>
  );
};
