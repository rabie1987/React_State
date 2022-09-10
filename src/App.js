import React from "react";
import "./App.css";
import Compteur from "./Compteur";
const imgSrc = new URL("./imgSrc.jpg", import.meta.url);
class App extends React.Component {
  state = {
    fullName: "Rabie Tabbessi",
    bio: " I'm a full stack web developer",

    profession: "Web Developer",
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={imgSrc} alt="imgSrc" width="200" height="200" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )}
        <button onClick={this.handleShow}>
          {!this.state.show ? "show" : "hide"}
        </button>
        <>
          <h1>Show the count</h1>
          <Compteur />
        </>
      </div>
    );
  }
}

export default App;
