import React, { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { CardActions } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

const card = [
  {
    name: "Mode",
    count: "Squad",
  },
  {
    name: "Total Slots",
    count: "25",
  },
  {
    name: "Participants",
    count: "21",
  },
  {
    name: "In Lobby",
    count: "4",
  },
  {
    name: "Entry Fees Collected",
    count: "5000 CC",
  },
];

function Participants() {
  const [isPart, setIsPart] = useState(true);
  const dp =
  'https://www.w3schools.com/w3css/img_avatar3.png';
  return (
    <div className="participants container py-3">
      <div className="">
        <p className="p-2 fw-bold h2">PARTICIPANTS LIST</p>
      </div>
      <div className="d-flex row ">
        <p className="p-3 col-12 col-lg-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="p-3 col-6 col-lg-2 text-center">
          <FormControl
            variant="filled"
            fullwidth
            sx={{ m: 1, minWidth: "150px", color: "white" }}
          >
            <InputLabel className="fw-bold text-white">Bulk Actions</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <br />
              <MenuItem value="">Action 1</MenuItem>
              <br />
              <MenuItem value="">Action 2</MenuItem>
              <br />
              <MenuItem value="">Action 3</MenuItem>
              <br />
            </Select>
          </FormControl>
        </div>
        <div className="p-3 col-6 col-lg-2">
          <FormControl variant="filled" sx={{ m: 1,  minWidth: "150px", }}>
            <InputLabel className="fw-bold text-white">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <br />
              <MenuItem value="">Action 1</MenuItem>
              <br />
              <MenuItem value="">Action 2</MenuItem>
              <br />
              <MenuItem value="">Action 3</MenuItem>
              <br />
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="btns">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsPart(true)}
        >
          Participants
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => setIsPart(false)}
        >
          No Participants
        </Button>
      </div>

      {isPart ? (
        <>
          <div className="d-flex my-2 justify-content-center row">
            {card.map((card) => {
              return (
                <Paper className="col-4 col-sm-3 m-2 col-lg-2  d-flex flex-column text-center p-2 justify-content-around">
                  <h5>{card.name}</h5>
                  <h2>{card.count}</h2>
                </Paper>
              );
            })}
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Players/Teams</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">
                    Registration <br /> Date & Time
                  </TableCell>
                  <TableCell align="center">Hacker Rating</TableCell>
                  <TableCell align="center">Player/Team Rating</TableCell>
                  <TableCell align="center">Tech Rating</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img src={dp} width="50px" className="rounded-circle" />{" "}
                      &nbsp;&nbsp;
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="success" size="small">
                        <CheckIcon />
                      </Button>
                      <Button variant="contained" color="error" size="small">
                        <CloseIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div className="d-lex align-item-center">
          <Card className="col-12 col-md-6" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, mb: 2.5 }}
                color="text.secondary"
                gutterBottom
              >
                Data not available
              </Typography>
              <Typography variant="h4" className="my-2" component="div">
                No Participants
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Participants;
