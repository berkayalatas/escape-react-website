import React, { Component } from "react";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: "fa fa-circle fa-stack-2x text-primary",
        icon2: "fa fa-shopping-cart fa-stack-1x fa-inverse",
        title: "E-Commerce",
        service:
          "Let your brand shine through with easy-to-use design tools and flexible templates. Our AI-powered Creative Assistant will even generate custom designs for you in seconds.",
      },
      {
        icon: "fa fa-circle fa-stack-2x text-primary",
        icon2: "fa fa-laptop fa-stack-1x fa-inverse",
        title: "Responsive Design",
        service:
          "Do more with your marketing using the power of analytics. Sync your store data and get pre-built customer segments based on purchase behavior to improve your sales.",
      },
      {
        icon: "fa fa-circle fa-stack-2x text-primary",
        icon2: "fa fa-lock fa-stack-1x fa-inverse",
        title: "Web Security",
        service:
          "Web Security services provide a single, highly cost-effective and easy-to-manage solution for protecting email and web.",
      },
    ],
  };
  render() {
    return (
      <div>
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row text-center">
              {this.state.services.map(({ icon, icon2, title, service }) => (
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className={icon}></i>
                    <i className={icon2}> </i>
                  </span>
                  <h4 className="my-3"> {title} </h4>
                  <p className="text-muted">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
