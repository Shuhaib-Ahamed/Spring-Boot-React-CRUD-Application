import React, { Component } from "react";

export default class HeaderComponant extends Component {
  render() {
    return (
      <header>
        {" "}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a
              href="https://shuhaib-ahamed.web.app/"
              className="px-5 navbar-brand"
            >
              Employee Management App
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
