import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    navItem: [
      {
        name: "Services",
        href: "#services",
      },
      {
        name: "Portfolio",
        href: "#portfolio",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Team",
        href: "#team",
      },
      {
        name: "Contact",
        href: "#contact",
      },
    ],
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              ESCAPE{" "}
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fa fa-bars ml-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                {this.state.navItem.map( ({ name, href }) => (
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href={href}>
                      {name}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
