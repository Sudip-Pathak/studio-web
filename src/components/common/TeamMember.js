import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={this.props.image}
            alt="..."
          />
          <h4>{this.props.name}</h4>
          <p className="text-muted">{this.props.role}</p>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Parveen Anand Twitter Profile"
          >
            {/* <i className="fab fa-twitter"></i> */}
            <i className={`fab ${this.props.icon} fa-stack-1x fa-inverse`}></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Parveen Anand Facebook Profile"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Parveen Anand LinkedIn Profile"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default TeamMember;
