import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationData } from "../reservation/ReservationSlice";
import { Formik } from "formik";
import Alert from "@mui/material/Alert";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Reservation } from "./ReservationinfoSlice";

const exportPdf = () => {
  html2canvas(document.querySelector(".yo")).then((canvas) => {
    document.body.appendChild(canvas);
    // console.log(canvas); // if you want see your screenshot in body.
    const imgData = canvas.toDataURL("image/PNG");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 40, 50);
    pdf.save("hotelMamouniaReservation.pdf");
    document.querySelector("canvas").remove();
  });
};

export const ReservationInfo = () => {
  const stateRev = useSelector((state) => state.reservation);
  const [debitDate, setDebitDate] = useState();
  const [finDate, setFInDate] = useState();
  const [adulte, setAdulte] = useState();
  const [enfant, setEnfant] = useState();
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getReservationData());
  }, []);

  useEffect(() => {
    let { debit, fin, adulte, enfant } = stateRev.reservationState;
    setDebitDate(debit);
    setFInDate(fin);
    setAdulte(adulte);
    setEnfant(enfant);
  }, [stateRev]);

  let logolabel = "images/logo/favicon.png";
  const getDataForm = (dataU) => {
    let dataUser = { ...dataU, country: "maroc" };
    let { debit, fin, adulte, enfant, idChambre, idUser } =
      stateRev.reservationState;
    // const data = {
    //     "nbrDeAdulte": "2",
    //     "nbrDeEnfant": "1",
    //     "dateDeDebit": new Date,
    //     "dateDeFin": new Date,
    //     "idUser": "",
    //     "idChambre": "61dac0e28f5e580f90fccaf9",
    // }
    let Data = {
      dataUser,
      data: {
        nbrDeAdulte: adulte,
        nbrDeEnfant: enfant,
        idChambre,
        idUser,
        dateDeDebit: new Date(
          debit.split("/").reverse().join("-")
        ).toISOString(),
        dateDeFin: new Date(fin.split("/").reverse().join("-")).toISOString(),
      },
    };
    console.log(Data);
    dispatch(Reservation(Data));
    exportPdf();
  };

  return (
    <>
      <div className="flex w-full h-screen bg-gray-600 text-white overflow-hidden gap-2">
        <div className="w-[70%] h-screen flex flex-col justify-center items-center ">
          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.prenom) {
                errors.prenom = "first Name Required";
              } else if (!/^[a-zA-Z ]+$/i.test(values.prenom)) {
                errors.prenom = "Invalid First Name address";
              }
              if (!values.nom) {
                errors.nom = "last Name Required";
              } else if (!/^[a-zA-Z ]+$/i.test(values.nom)) {
                errors.nom = "Invalid First Name address";
              }

              if (!values.tel) {
                errors.tel = "tel is Required";
              } else if (
                !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g.test(values.tel)
              ) {
                errors.tel = "Invalid First Name address";
              }
              if (!values.expireCarte) {
                errors.expireCarte = "Expired Carte is Required";
              }
              if (!values.nbrDeLaCarte) {
                errors.nbrDeLaCarte = "Carte Number is Required";
              }

              return errors;
            }}
            onSubmit={(values) => getDataForm(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <form
                className="flex w-[90%] flex-col gap-2"
                onSubmit={handleSubmit}
              >
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                      type="text"
                      name="prenom"
                      onBlur={handleBlur}
                      value={values.prenom}
                      onChange={handleChange}
                    />

                    {errors.prenom && touched.prenom && errors.prenom}
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Last Name"
                      type="text"
                      name="nom"
                      onBlur={handleBlur}
                      value={values.nom}
                      onChange={handleChange}
                    />

                    {errors.nom && touched.nom && errors.nom}
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  {errors.email && touched.email && errors.email}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="tel"
                    type="text"
                    name="tel"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                  {errors.tel && touched.tel && errors.tel}
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Expired Carte"
                      type="text"
                      name="expireCarte"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.expireCarte}
                    />
                    {errors.expireCarte &&
                      touched.expireCarte &&
                      errors.expireCarte}
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <input
                      className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Carte Number"
                      type="text"
                      name="nbrDeLaCarte"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nbrDeLaCarte}
                    />
                    {errors.nbrDeLaCarte &&
                      touched.nbrDeLaCarte &&
                      errors.nbrDeLaCarte}
                  </div>
                </div>
                <button
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className=" yo flex flex-col gap-8 fixed right-[60px] top-[50px] bg-white  drop-shadow-xl text-black  mt-10 rounded-sm  w-[25%] px-4 py-8 h-auto backdrop-blur-sm">
          <div className="w-full header_card">
            <img className="pt-[5%] px-[35%]" src={logolabel} alt="" />
          </div>
          <div className="text-center text-xl font-semibold">
            Complete your Stay
          </div>
          <div className="flex justify-between bg-white drop-shadow-xl p-5 rounded-xl flex-col">
            <div className="flex flex-col">
              <div className="overflow-x-auto max-w-full text-center justify-center">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className="bg-gray-100">First Name</th>
                      <th className="bg-gray-100">Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-white">yo </td>
                      <td className="bg-white">ggg</td>
                    </tr>
                  </tbody>
                </table>
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
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className="bg-gray-100">Adults</th>
                      <th className="bg-gray-100">Children</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-white ">{adulte && adulte}</td>
                      <td className="bg-white ">{enfant && enfant}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table w-full ">
                  <thead>
                    <tr>
                      <th className="bg-white ">Price :</th>
                      <td className="bg-white">0,00 MAD</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
        </div>
      </div>
    </>
  );
};
