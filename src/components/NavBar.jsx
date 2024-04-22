import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const menuItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "Business",
    path: "/business",
  },
  {
    id: 3,
    title: "Entertainment",
    path: "/entertainment",
  },
  {
    id: 4,
    title: "General",
    path: "/general",
  },
  {
    id: 5,
    title: "Health",
    path: "/health",
  },
  {
    id: 6,
    title: "Science",
    path: "/science",
  },
  {
    id: 7,
    title: "Sports",
    path: "/sports",
  },
  {
    id: 8,
    title: "Technology",
    path: "/technology",
  },
];

const NavBar = ({ apisource, setapisource, setSearchQuery, searchQuery }) => {
  const path = window.location.pathname;

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsAggregator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
              {menuItems &&
                menuItems.map((item, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <NavLink
                        className={`${
                          item.path === path ? "active-menu-item" : "menu-item"
                        }  nav-link `}
                        to={item.path}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
