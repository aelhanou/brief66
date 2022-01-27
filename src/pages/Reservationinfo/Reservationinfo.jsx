import React from "react";


export const ReservationInfo = () => {
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center mt-8 text-white"
        style={{overflow: "hidden"}}
      >
        <div className="w-[76%] h-screen flex justify-center ">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  placeholder="Email"
                />
                {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you like
            </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  tel
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  country
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                    <option>Maroc</option>
                    <option>United States</option>
                  </select>
                  {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div> */}
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Expired Carte
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="12/22"
                />
              </div>
            </div>
            <div className="flex mt-6 w-full">
              <div className="w-full ">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Carte Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="121942049751244"
                />
                {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you like
            </p> */}
              </div>
            </div>
            <div>
              <button
                className="flex-shrink-0 mt-6 border-transparent w-full bg-white border-4 text-blue-600 hover:text-teal-800 text-sm py-1 px-2 rounded"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-[22%] h-screen">
          <div className="flex flex-col gap-8  mt-10 rounded-xl w-full p-4 h-[280px] border-2">
            <div>Votre séjour</div>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <div>Arrivée Après</div>
                <div>le 23/02/2022</div>
              </div>
              <div className="flex flex-col">
                <div>Départ Avant</div>
                <div>le 23/05/2022</div>
              </div>
            </div>
            <div>2 adulte And 5 enfant</div>
            <div>Total : 500,00 MAD</div>
          </div>
        </div>
      </div>
    </>
  );
};
