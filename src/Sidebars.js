import React from "react";

const category = [
  "Gamer",
  "Organiser",
  "Team Owner",
  "Content Creator",
  "Buyer & seller",
  "Service Provider",
  "Investor",
];

const primaryData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Sidebars() {
  return (
    <div className="vh-100 vw-100 ">
      <div
        className="py-2 px-3 bg-primary text-center"
        style={{ height: "11vh" }}
      >
        <div className="h4">Sidebars</div>
        <div className="d-flex align-items-center justify-content-center">
          {category.map((categ, index) => (
            <div key={index}>
              <div className="mx-2">{categ} </div>
              {index != category.length - 1 && <div className="fw-bold">|</div>}
            </div>
          ))}
        </div>
      </div>
      <div
        className=" bg-danger vw-100 d-flex align-items-start"
        style={{ height: "89vh" }}
      >
        <div className="bg-success h-100 d-flex flex-column align-items-center justify-content-center px-3">
          {/* {() => {
            var i = 1;
            for (i; i < 11; i++) {
              return <div className="border border-2 border-white">{i}</div>;
            }
          }} */}
          {primaryData.map((pd, indexx) => (
            <div
              key={indexx}
              className="p-1"
              stlye={{ borderBottom: "4px solid white" }}
            >
              <div className="border border-2 border-white py-2 px-3 rounded-circle m-2">
                {pd}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebars;
