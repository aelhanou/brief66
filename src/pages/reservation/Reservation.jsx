import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getAllChambres,addChambre } from './ChambreSlice'
import { addReservation } from "./ReservationSlice";
// import { DateRangePicker } from "react-date-range";
import { InpC } from "../../components";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
// or @mui/lab/dateAdapter/{dayjs,luxon,moment} or any valid date-io adapter

export const Reservation = () => {
  const state = useSelector((state) => state.reservation);
  const [debitDate, setDebitDate] = useState();
  const [finDate, setFinDate] = useState();
  const [adulte, setAdulte] = useState(0);
  const [enfant, setEnfant] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([null, null]);

  // useEffect(() => {
  //   console.log("adulte", adulte);
  // }, [adulte]);

  // useEffect(() => {
  //   console.log("enfant", enfant);
  // }, [enfant]);

  useEffect(() => {
    setDebitDate(value[0]);
    setFinDate(value[1]);
  }, [value]);

  const getData = () => {
    let debit = new Intl.DateTimeFormat("en-US").format(debitDate);
    let fin = new Intl.DateTimeFormat("en-US").format(finDate);
    const reservation = {
      debit,
      fin,
      adulte,
      enfant
    };
    // && adulte && enfant
    console.log(state);
    if (debit && fin && adulte >= 0 && enfant >= 0) {
      dispatch(addReservation(reservation));
      navigate("/chambre");
    } else {
      alert("il faut de remplir les champs");
    }
  };

  // const getDt = (date) => {
  //   const { startDate, endDate } = date.selection;
  //   console.log(startDate);
  //   console.log(endDate);
  //   setDebitDate(startDate);
  //   setFinDate(endDate);
  // };

  return (
    <>
      <div
        className="  w-full lg:items-center md:flex sm:flex-wrap sm:items-center md:flex-wrap md:gap-2 md:h-screen md:items-center  md:m-auto  h-screen flex gap-2 shadow-2xl justify-center  "
        style={{
          backgroundImage: `url("/images/homeBackground.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <LocalizationProvider className="md:mt-20"  dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker  
            displayStaticWrapperAs={"desktop"}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            disablePast={true}
            renderInput={(startProps, endProps) => (
              <React.Fragment >
                <TextField  {...startProps} />
                <Box  sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        <div className="flex flex-col max-w-[200px] min-w-[600px]   rounded-xl  ">
          {/* <input
            type="text"
            name="adulte"
            id=""
            onChange={(e) => setAdulte(e.target.value)}
            placeholder="Enter The Number Of Adulte"
            required
          />
          <input
            type="text"
            name="enfant"
            id=""
            onChange={(e) => setEnfant(e.target.value)}
            placeholder="Enter The Number Of Enfant"
            required
          /> */}
          <div
            className="w-full flex flex-col h-[38vh] justify-between  lg:mb-0 sm:mb-28  sm:max-w-[100%] rounded  "
            style={{
              padding: "10px 20px",
              borderRadius: "15px",
              backgroundColor: "#ffffffeb",
            }}
          >
            <div className="flex  w-full h-72 rounded-xl   justify-between ">
              <InpC setCount={setAdulte} status="Enter The Number Of Adulte" />
              <InpC setCount={setEnfant} status="Enter The Number Of Childs" />
            </div>

            <button
              className="text-blue-400 btn glass h-10  mb-3 rounded "
              onClick={() => getData()}
            >
              Check Avilaible Rooms
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
