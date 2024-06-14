import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/ans.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Anshi Mathur</div>
            <div className="brief_description">
              Statistics and Computer Science Student at UIUC
            </div>
          </div>
        </div>
      </div>
    );
  }
}
