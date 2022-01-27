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

  // useEffect(()=>{
  //     console.log(stateRev.reservation);
  // },[stateRev])

  // const getReservation = () => {
  //   console.log(stateRev.reservationState);
  // };

  return (
    <div className="bg-black text-white">
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
          <div className="flex flex-col gap-8  mt-10 rounded-xl w-[22%] p-4 h-[280px] border-2">
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
              {" "}
              {adulte && adulte} adulte And {enfant && enfant} enfant{" "}
            </div>
            <div>Total : 0,00 MAD</div>
          </div>
        )}
      </div>
    </div>
  );
};
