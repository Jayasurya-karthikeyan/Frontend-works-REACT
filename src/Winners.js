import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const data = [
  [
    "https://i.pinimg.com/736x/51/96/b3/5196b34be5aec2079e4b68190299a544.jpg",
    "MVP",
    "7850",
    "1000",
  ],
  [
    "https://i.pinimg.com/236x/02/a5/0b/02a50b563ba791756d5657a7fdbe51e9.jpg",
    "Top Assaulter",
    "7850",
    "1000",
  ],
  [
    "https://i.pinimg.com/564x/fe/f5/6d/fef56d6ad1b8c7dff428196ff5f23915.jpg",
    "Top Sniper",
    "7850",
    "1000",
  ],
  [
    "https://i.pinimg.com/originals/08/27/23/082723ad570164eb39b670dbad5ee92a.jpg",
    "Top Sniper",
    "7850",
    "1000",
  ],
];
const buttons = [
  ["Save poster", "primary"],
  ["Edit", "success"],
  ["Approve", "error"],
];

function Winners() {
  return (
    <div className="participants container py-4">
      <div className="border border-3 border-white ">
        <div>
          <p className="mx-3 mt-2 fw-bold h2">Special Prize Winners</p>
          <div className="d-flex row justify-content-between mx-3 mb-3">
            <p className="py-3 col-12 col-lg-6 m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="pt-4 row col-12 col-lg-5  row d-flex align-items-evenly justify-content-around">
              {buttons.map((button) => (
                <div className="col-4 text-center">
                  <Button variant="contained" color={button[1]}>
                    {button[0]}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-top border-3 border-white row d-flex justify-content-around m-0 p-4"
          //   style={{ height: 400 }}
        >
          {data.map((data) => (
            <div className="col-10 col-sm-6 col-lg-4 col-xl-3 p-3">
              <Box
                className="text-center bg-danger p-3 text-center"
                style={{ height: 300, borderRadius: 30 }}
              >
                <div className="h4 text-white fw-bold mb-3">{data[1]}</div>
                <img
                  src={data[0]}
                  // width="100%"
                  height="60%"
                  className="border rounded-circle bg-warning "
                />
                <div className="d-flex my-3 mx-2 justify-content-between">
                  <div className="col-4">Points: {data[2]}</div>
                  <div className="col-4">Rewards: {data[3]}</div>
                </div>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Winners;
