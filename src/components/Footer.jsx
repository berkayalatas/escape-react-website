import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <footer className="footer py-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left">
                  Copyright © Your Website 2021
                </div>
                <div className="col-lg-4 my-3 my-lg-0">
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </div>
                <div className="col-lg-4 text-lg-right">
                  <a className="mr-3" href="#!">
                    Privacy Policy
                  </a>
                  <a href="#!">Terms of Use</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
