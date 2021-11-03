import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Sidebar.css";

function Sidebar() {
  // const recent = [
  //   {
  //     id:1,
  //     name:"BGMI",
  //   },
  //   {
  //     id:2,
  //     name:"PUBG-Korean",
  //   },
  //   {
  //     id:3,
  //     name:"PUBG-global",
  //   },
  // ];

  const menu = [
    {
      type: "Single Match Format",
      subMenu: [
        {
          name: "New Match",
          // step:[
          //   "Basic Info","latest",
          // ]
          step: [
            { steps: "Basic info" },
            { steps: "Schedule" },
            { steps: "Match Details" },
            { steps: "Entry Fee", active: true },
            { steps: "Prizepool" },
            { steps: "Requirements" },
            { steps: "Rules" },
            { steps: "Point Sysytem" },
            { steps: "Participant Rules" },
            { steps: "Appearance" },
            { steps: "Content" },
            { steps: "Social Media" },
            { steps: "Umpires" },
            { steps: "Caster" },
            { steps: "Settings" },
          ],
        },
        { name: "Drafts", down: true },
      ],
    },
    { type: "New Match-Multi Match Format", down: true },
  ];

  return (
    <>
      <div className="side-bar ">
        <div className="header pb-3 pt-4 px-4">
          <div className="title h5">Select Games</div>
          <input
            type="text"
            className="search-box"
            placeholder="Search games"
          ></input>
          <ul className="recent my-2 py-1 list-unstyled p-1">
            <li>BGMI</li>
            <li>PUBG-Korean</li>
            <li>PUBG-Global</li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="side-menus m-3 p-2">
          <ul className="menu-ul">
            {menu.map((menu, index) => (
              <div className="menus">
                {/* <div>{props.hello}</div> */}
                <li key={index}
                  className="menu-list "
                  className={menu.down ? "justify-content-between d-flex" : ""}
                >
                  <a className="menu-item">
                    <span>{menu.type}</span>
                  </a>
                  {menu.down ? 
                              (<i class=" p-2 bi bi-caret-down-fill"></i>):
                              (<i class="  px-1 bi bi-caret-up-fill"></i>)
                  }
                  {menu.subMenu && menu.subMenu.length > 0 ? (
                    <ul className="sub-menu">
                      {menu.subMenu.map((sub, index) => (
                        <li key={index} >
                            <a className="submenu-name">{sub.name}</a>
                          {sub.down ? 
                              (<i class=" p-2 bi bi-caret-down-fill"></i>):
                              (<i class=" px-4 bi bi-caret-up-fill"></i>)
                          }
                          {sub.step && sub.step.length ? (
                            <ul className="sub-menu-steps">
                              {sub.step.map((step, index) => (
                                <li key={index} className="steps">
                                  <a className={step.active ? "active" : ""}>
                                    {++index}. {step.steps}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
                {/* {props.menu.map (menu, index) => {

              }} */}
              </div>
              // <MenuItem
              //   hello={"Hi props here"}
              //   key={index}
              //   menuType={menu.type}
              //   subMenu={menu.subMenu || []}
              //   // step={menu.subMenu.name || []}
              // />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

{
  /* {recent.map=(recent) =>{
    return (
      <div key={recent.id}>
      <li>{recent.name}</li>
      </div>
    );
  }} */
}
