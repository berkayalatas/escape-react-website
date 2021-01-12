import React, { Component } from "react";

export default class Team extends Component {
  state = {
    team: [
      {
        name: "Eric Forman",
        job: "Back-End Developer",
        image:
          "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
      {
        name: "Daisy Brown",
        job: "Front-End Developer",
        image:
          "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
      },
      {
        name: "Parker Green",
        job: "Product Designer",
        image:
          "https://images.unsplash.com/flagged/photo-1576076873449-f9530e1c50f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
    aboutTeam:
      "Our team is your team. When your mission is to be better faster and smarter, you need the best people driving your  vision forward. You need people who can create focused  marketing strategies that align with business goals, who can infuse their creativity into groundbreaking campaigns, and who can analyze data to optimize every tactic along the way. ",
  };

  render() {
    return (
      <div>
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Wonderful Team
              </h2>
              <h3 className="section-subheading text-muted">
                You need to meet with us. Get to know our team below.
              </h3>
            </div>
            <div className="row">
              {this.state.team.map(({ name, job, image }) => (
                <div className="col-lg-4">
                  <div className="team-member">
                    <img
                      className="mx-auto rounded-circle"
                      src={image}
                      alt=""
                    />
                    <h4> {name} </h4>
                    <p className="text-muted"> {job} </p>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">{this.state.aboutTeam}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
