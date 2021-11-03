import React from "react";
import "./MenuItem.css";

function MenuItem(props) {
  return (
    <div className="menus">
      {/* <div>{props.hello}</div> */}
      <li className="menu-list">
        <a className="menu-item">
          <span>{props.menuType}</span>
        </a>
        {props.subMenu && props.subMenu.length > 0 ? (
          <ul className="sub-menu">
            {props.subMenu.map((sub, index) => (
              <li key={index}>
                <div>
                  <a>{sub.name}</a>
                </div>
                {/* <div><a>{sub.step}</a></div> */}
                {sub.step && sub.step.length ? (
                  <ul className="sub-menu-steps">
                    {props.sub.step.map((step, index) => (
                      <li key={index}>
                        <a>{step.steps}</a>
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
  );
}

export default MenuItem;
