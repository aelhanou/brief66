import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

// export default function Modal()
export const Modal = ({ name, getData, setDebitDate, setFinDate }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState([null, null]);
  useEffect(() => {
    console.log(value);
    setDebitDate(value[0]);
    setFinDate(value[1]);
  }, [value]);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {name}
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style} className="text-black " style={{ width: "52%" }}>
          <LocalizationProvider
            className="md:mt-10  "
            dateAdapter={AdapterDateFns}
          >
            <StaticDateRangePicker
              displayStaticWrapperAs={"desktop"}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              disablePast={true}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <div className="w-[100%] flex justify-end gap-4">
            <button onClick={getData} className="btn">
              Reservation
            </button>
            <button onClick={handleClose} className="btn">
              Cancel
            </button>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
};

Modal.propTypes = {
  name: PropTypes.string,
  getData: PropTypes.func,
  setDebitDate: PropTypes.func,
  setFinDate: PropTypes.func,
};
