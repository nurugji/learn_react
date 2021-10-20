import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  // const dateState = useState(new Date().toString());
  // const _date = dateState[0];
  // const setDate = dateState[1];

  const [_date, setDate] = useState(new Date().toString());
  console.log(numberState);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p>
      <p>Number(use state) : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.props.initNumber}</p>
        <p>Number(use state) : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({
              number: Math.random(),
            });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({
              date: new Date().toString(),
            });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
