import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getAllChambres,addChambre } from './ChambreSlice'
import { addReservation } from "./ReservationSlice";
// import { DateRangePicker } from "react-date-range";
// import TextField from "@mui/material/TextField";
// import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import Box from "@mui/material/Box";
import { InpC, HeaderB, Loading, Modal } from "../../components";

// import { PropagateLoader } from 'react-spinners';
// or @mui/lab/dateAdapter/{dayjs,luxon,moment} or any valid date-io adapter

export const Reservation = () => {
  const state = useSelector((state) => state.reservation);
  const [debitDate, setDebitDate] = useState();
  const [finDate, setFinDate] = useState();
  const [adulte, setAdulte] = useState(0);
  const [enfant, setEnfant] = useState(0);
  // const [displayCal,setDisplayCal] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState([null, null]);
  let logolabel = "images/logo/logo-white.svg";
  let fleche = "images/CURVED_ARROW.png";
  let winner = "images/badgewinner.png";

  // useEffect(() => {
  //   console.log("adulte", adulte);
  // }, [adulte]);

  // useEffect(() => {
  //   console.log("enfant", enfant);
  // }, [enfant]);

  // useEffect(() => {
  //   setDebitDate(value[0]);
  //   setFinDate(value[1]);
  // }, [value]);

  const getData = () => {
    let debit = new Intl.DateTimeFormat("en-GB").format(debitDate);
    let fin = new Intl.DateTimeFormat("en-GB").format(finDate);
    const reservation = {
      debit,
      fin,
      adulte,
      enfant,
    };
    // && adulte && enfant
    console.log(state);
    if (debit && fin && adulte >= 0 && enfant >= 0) {
      dispatch(addReservation(reservation));
      navigate("/chambre");
    } else {
      alert("il faut de remplir les champs");
    }
  }

  // const getDt = (date) => {
  //   const { startDate, endDate } = date.selection;
  //   console.log(startDate);
  //   console.log(endDate);
  //   setDebitDate(startDate);
  //   setFinDate(endDate);
  // };

  return (
    <Loading>
      <div
        className="overflow-y-hidden w-full lg:items-top md:flex sm:flex-wrap sm:items-top md:flex-wrap md:h-screen md:items-top md:m-auto flex-col  h-screen flex gap-14 shadow-2xl justify-center bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url("/images/background/BackG1.jpg")`,
          backgroundSize: "cover",
          overflow: "hidden"
        }}
      >
        {/* <LocalizationProvider className="md:mt-20"  dateAdapter={AdapterDateFns}>
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
        </LocalizationProvider> */}
        <div className="flex flex-col  min-w-[600px]   rounded-xl  ">
          <div className="absolute top-0 left-20 w-[130px]">
            <img src={winner} alt="" />
          </div>
          {/* <input
        <div className='header  justify-center w-full flex gap-8 text-right p-2'>
          {/* <div className='p-2 text-right'>
                <h1 className='text-3xl text-white text-right font-serif'>La Mamounia<br />Palace in Marrakesh</h1>
                <h1 className='text-7xl text-white text-right font-display mt-3'>La Mamounia</h1>
                <p className='text-sm  gap-3 row text-right mt-3'>Timeless and wildly...
                    <span className='text-Blue '>
                        <a href="#" className='underline decoration-1 '>
                            More Info 
                            <i className="fas fa-user"></i>
                        </a>
                    </span>
                    </p>
            </div> */}
          <img className='w-96 flex justify-center mx-auto my-0' src={logolabel} alt="" />
          {/* <div className='text-left'>
            <h1 className='text-3xl text-white text-left font-serif'>La Mamounia<br />Palace in Marrakesh</h1>
                <h1 className='text-7xl text-white text-left font-display mt-3'>La Mamounia</h1>
                
                <p className='text-sm  gap-3 row text-left mt-3'>Timeless and wildly...
                    <span className='text-Blue '>
                        <a href="#" className='underline decoration-1 '>
                            More Info 
                            <i className="fas fa-user"></i>
                        </a>
                    </span>
                    </p>
            </div> */}
        </div>
        <div className="Debu_Res flex flex-row justify-center">
          <div className="flex flex-col max-w-[100px] min-w-[500px]   rounded-xl  ">
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
            <div className="flex flex-col absolute top-[600px] right-[550px] opacity-70 font-anas">
              <img className="w-[100px]" src={fleche} alt="" />
              <p className="text-[12px] mt-5">
                this form for reserved your room...
              </p>
            </div>
            <div
              className="w-full flex flex-col h-[20vh] justify-between  lg:mb-0 sm:mb-28  sm:max-w-[100%] rounded "
              style={{
                padding: "10px 20px",
                borderRadius: "15px",
                backgroundColor: "#ffffffeb",
              }}
            >
              <div className="flex  w-full h-42 rounded-xl   justify-between font-anas">
                <InpC
                  setCount={setAdulte}
                  status="Enter The Number Of Adulte"
                />
                <InpC
                  setCount={setEnfant}
                  status="Enter The Number Of Childs"
                />
              </div>

              <button className="text-blue-400 btn glass h-10 text-sm  mb-3 rounded font-anas text-normale">
                <Modal
                  name="Check Avilaible Rooms"
                  setDebitDate={setDebitDate}
                  setFinDate={setFinDate}
                  getData={getData}
                />
              </button>
            </div>
          </div>
        </div>
        <HeaderB />
      </div>
    </Loading>
  );
};
