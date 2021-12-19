import React, { useState } from "react";
import { InputLabel, Paper, Select } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const rows = [
  {
    avatar:
      "https://i.pinimg.com/originals/4e/36/5c/4e365cde023b2ffbbe90e8e5f4c497d3.jpg",
    name: "ABC Gaming",
    date: "10-10-2021",
    category: "Hacker related",
    subject: "XYZ",
    description: "I have a complaint on a player, who abused me.",
    urgent: true,
    attachments: [
      { name: "file.png", date: "10-10-2021" },
      { name: "second.jpg", date: "10-10-2021" },
    ],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://image.shutterstock.com/image-vector/gamer-mascot-logo-sticker-design-260nw-1431586820.jpg",
    name: "DEF Gaming",
    date: "10-10-2021",
    category: "Prize related",
    subject: "XYZ",
    description: "I reported a bug and that is not still got repaired!",
    urgent: false,
    attachments: [{ name: "file.png", date: "10-10-2021" }],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/4e/36/5c/4e365cde023b2ffbbe90e8e5f4c497d3.jpg",
    name: "ABC Gaming",
    date: "10-10-2021",
    category: "Hacker related",
    subject: "XYZ",
    description: "I have a complaint on a player, who abused me.",
    urgent: true,
    attachments: [
      { name: "file.png", date: "10-10-2021" },
      { name: "second.jpg", date: "10-10-2021" },
    ],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://image.shutterstock.com/image-vector/gamer-mascot-logo-sticker-design-260nw-1431586820.jpg",
    name: "DEF Gaming",
    date: "10-10-2021",
    category: "Prize related",
    subject: "XYZ",
    description: "I reported a bug and that is not still got repaired!",
    urgent: false,
    attachments: [{ name: "file.png", date: "10-10-2021" }],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/4e/36/5c/4e365cde023b2ffbbe90e8e5f4c497d3.jpg",
    name: "ABC Gaming",
    date: "10-10-2021",
    category: "Hacker related",
    subject: "XYZ",
    description: "I have a complaint on a player, who abused me.",
    urgent: true,
    attachments: [
      { name: "file.png", date: "10-10-2021" },
      { name: "second.jpg", date: "10-10-2021" },
    ],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://image.shutterstock.com/image-vector/gamer-mascot-logo-sticker-design-260nw-1431586820.jpg",
    name: "DEF Gaming",
    date: "10-10-2021",
    category: "Prize related",
    subject: "XYZ",
    description: "I reported a bug and that is not still got repaired!",
    urgent: false,
    attachments: [{ name: "file.png", date: "10-10-2021" }],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/4e/36/5c/4e365cde023b2ffbbe90e8e5f4c497d3.jpg",
    name: "ABC Gaming",
    date: "10-10-2021",
    category: "Hacker related",
    subject: "XYZ",
    description: "I have a complaint on a player, who abused me.",
    urgent: true,
    attachments: [
      { name: "file.png", date: "10-10-2021" },
      { name: "second.jpg", date: "10-10-2021" },
    ],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
  {
    avatar:
      "https://image.shutterstock.com/image-vector/gamer-mascot-logo-sticker-design-260nw-1431586820.jpg",
    name: "DEF Gaming",
    date: "10-10-2021",
    category: "Prize related",
    subject: "XYZ",
    description: "I reported a bug and that is not still got repaired!",
    urgent: false,
    attachments: [{ name: "file.png", date: "10-10-2021" }],
    gamerLastReply: "10-10-2021",
    yourLastReply: "10-10-2021",
    newReply: "",
    gamerReply: "",
  },
];

function Complaints() {
  const [modalOpen, setModalOpen] = useState(false);
  const [indexValue, setIndexValue] = useState(null);
  const [content, setContent] = useState(null);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    setIndexValue(null);
    setContent(null);
  };

  const ModalBody = (props) => {
    console.log(props.index);
    const user = rows[props.index];
    return (
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex justify-content-center"
        // sx={{ backgroundColor: "#a11cf9 !important" }}
      >
        <Box
          classname="bg-primary"
          sx={{
            backgroundColor: "#a11cf9 !important",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "50vw",
            // height: "70vh",
            // bgcolor: "background.paper",
            border: "3px solid #ffffff",
            boxShadow: 24,
            px: 4,
            py: 2,
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between p-2  mb-2"
            style={{ borderBottom: "2px solid white" }}
          >
            <h3 className="text-white fw-bold">{props.content}</h3>
            <CloseIcon
              onClick={handleClose}
              className="text-white"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="py-3 text-white px-2">
            {props.content == "Dispute Description" && (
              <h5>{user.description}</h5>
            )}
            {/* <h5>{user.description}</h5> */}
            {props.content == "Attachments" &&
              user.attachments.map((attach) => (
                <div
                  className="p-3 mx-1 my-2 border border-2 border-white rounded-3 d-flex
                 justify-content-around align-items-center"
                >
                  <div className="text-center text-white  px-2">
                    <p className="fw-bold text-decoration-underline">
                      FileName
                    </p>
                    <p>{attach.name}</p>
                  </div>
                  <div className="text-center text-white  px-2">
                    <p className="fw-bold text-decoration-underline">Date</p>
                    <p>{attach.date}</p>
                  </div>
                  <Button className="mx-2" variant="contained" color="success">
                    View
                  </Button>
                  <Button className="mx-2" variant="contained" color="error">
                    Download
                  </Button>
                </div>
              ))}
          </div>
        </Box>
      </Modal>
    );
  };
  return (
    <div className="px-4 py-2 py-sm-3 px-md-5 py-md-4">
      <h2 className="text-white fw-bold">Gamer Disputes/Complaints</h2>
      <p className="py-3 col-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="d-flex justify-content-start p-2 m-2">
        <Box
          style={{ width: 100, height: 100 }}
          className="rounded-3 mx-3 p-3 bg-white text-dark text-center d-flex flex-column align-items-center justify-content-around"
        >
          <h5>Urgent</h5>
          <h2>10</h2>
        </Box>
        <Box
          style={{ width: 100, height: 100 }}
          className=" rounded-3 mx-3 p-1 bg-white text-dark text-center d-flex flex-column align-items-center justify-content-around"
        >
          <h5>Not Urgent</h5>
          <h2>7</h2>
        </Box>
      </div>
      {/* <div className="d-flex bg-success d-flex justify-content-start p-2 my-3"></div> */}
      {/* <div className=" d-flex p-2 my-3 mx-0 justify-content-between "> */}
      <div classname="d-flex align-items-evenly justify-content-start row col-12">
        <Button classname="col-3 mx-3" variant="contained" color="secondary">
          New [5]
        </Button>
        <Button classname="col-3 mx-3" variant="contained" color="primary">
          In Progress [3]
        </Button>
        <Button classname="col-3 mx-3" variant="contained" color="error">
          Closed [10]
        </Button>
      </div>
      <div className="d-flex justify-content-end mt-3 mt-lg-0 mb-2 mx-0 col-12 ">
        <FormControl
          className="d-flex flex-row row col-6 col-md-4 col-lg-3 align-items-center justify-content-end"
          variant="filled"
          fullwidth
          sx={{ m: 1 }}
        >
          <InputLabel className="fw-bold offset-xxl-3 col-6 col-md-4  text-white mb-2">
            Filter by:
          </InputLabel>
          <Select
            className="col-6   text-white"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            sx={{ mx: 1, height: "50px" }}
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <br />
            <MenuItem value="Alphabetical">Alphabetical</MenuItem>
            <br />
            <MenuItem value="Date Modified">Date Modified</MenuItem>
            <br />
            <MenuItem value="Type">Type</MenuItem>
            <br />
          </Select>
        </FormControl>
        {/* </div> */}
        {/* <div className="p-3 d-flex justify-content-start"> */}
        <FormControl
          variant="filled"
          sx={{ m: 1 }}
          className="d-flex flex-row row col-6 col-md-4 col-lg-3 p-0 align-items-center justify-content-end"
        >
          <InputLabel className="fw-bold offset-xxl-3 col-6 col-md-4  text-white mb-2">
            Sort By:
          </InputLabel>
          <Select
            className="col-6 text-white "
            labelId="demo-simple-select-filled-label"
            sx={{ mx: 1, height: "50px" }}
            id="demo-simple-select-filled"
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <br />
            <MenuItem value="Alphabetical">Alphabetical</MenuItem>
            <br />
            <MenuItem value="Date Modified">Date Modified</MenuItem>
            <br />
            <MenuItem value="Type">Type</MenuItem>
            <br />
          </Select>
        </FormControl>
      </div>
      {/* </div> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticket ID</TableCell>
              <TableCell align="center">
                Date & <br /> Time
              </TableCell>
              <TableCell align="center">Gamer/Team</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Priority</TableCell>
              <TableCell align="center">Attachments</TableCell>
              <TableCell align="center">Gamer Last Reply</TableCell>
              <TableCell align="center">Your Last Reply</TableCell>
              <TableCell align="center">New Reply</TableCell>
              <TableCell align="center">Gamer Reply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src={row.avatar}
                    width="30px"
                    className="rounded-circle"
                  />{" "}
                  &nbsp;&nbsp;
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.subject}</TableCell>
                <TableCell align="center nowrap">
                  <Typography
                    variant="caption"
                    noWrap
                    onClick={() => {
                      setIndexValue(index);
                      setContent("Dispute Description");
                      handleOpen();
                    }}
                  >
                    {row.description}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {row.urgent ? "Urgent" : "Not Urgent"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setIndexValue(index);
                      setContent("Attachments");
                      handleOpen();
                    }}
                    style={{
                      fontSize: "10px",
                      textTransform: "initial",
                      padding: 5,
                    }}
                  >
                    View [{row.attachments.length}]
                  </Button>
                </TableCell>
                <TableCell align="center">{row.gamerLastReply}</TableCell>
                <TableCell align="center">{row.yourLastReply}</TableCell>
                <TableCell align="center">
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    style={{
                      fontSize: "10px",
                      textTransform: "initial",
                      padding: 5,
                    }}
                  >
                    New reply
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    color="warning"
                    variant="contained"
                    size="small"
                    style={{
                      fontSize: "10px",
                      textTransform: "initial",
                      padding: 5,
                    }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {modalOpen && <ModalBody content={content} index={indexValue} />}
    </div>
  );
}

export default Complaints;
