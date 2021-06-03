import React, { Component } from "react";
import data from "./data";

class App extends Component {
  state = {
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "sami",
  };
  render() {
    return (
      <div className="card">
        <div className="celebration-card">
          <img className="birthday-img" src="./images/birthday.jpg" alt="" />
          <div className="birthday-info">
            {/* <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            /> */}
            <img src={this.state.image} alt="no" />
            <h2 className="wish">
              It's {this.state.name}'s <br /> birthday today
            </h2>
          </div>
          <div className="msg">
            <div className="btn-msg">Congratulate</div>
          </div>
        </div>
        <h1>This Month</h1>
        {data.map(({ name, image, birthday }) => {
          return (
            <div className="list">
              <img src={image} alt="" />
              <div className="info">
                <h3 className="name">{name}</h3>
                <p className="birthdate">{birthday}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
