import React, { useState, useEffect } from "react";
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

const funcStyle = "color:green";
let funcId = 0;
function FuncComp(props) {
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  const [_date, setDate] = useState(new Date().toString());

  useEffect(function () {
    console.log("%cfunc => effect (componentDidMount) " + ++funcId, funcStyle);
    document.title = number;
    return function () {
      console.log(
        "%cfunc => return (componentWillUnMount)" + ++funcId,
        funcStyle
      );
    };
  }, []);

  useEffect(
    function () {
      console.log(
        "%cfunc => effect number (componentDidMount & componentDidUpdate) " +
          ++funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        console.log(
          "%cfunc => return number (componentDidMount & componentDidUpdate) " +
            ++funcId,
          funcStyle
        );
      };
    },
    [number]
  );

  useEffect(
    function () {
      console.log(
        "%cfunc => effect _date (componentDidMount & componentDidUpdate) " +
          ++funcId,
        funcStyle
      );
      document.title = number;
      return function () {
        console.log(
          "%cfunc => return _date (componentDidMount & componentDidUpdate) " +
            ++funcId,
          funcStyle
        );
      };
    },
    [_date]
  );

  console.log("%cfunc => rander " + ++funcId, funcStyle);

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

const classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextPorps, nextState) {
    console.log("%cclass => shoudComponetUpdate", classStyle);
    return true;
  }
  componentWillUpdate(nextPorps, nextState) {
    console.log("%cclass => coponentWillUpdate", classStyle);
  }
  componentDidUpdate(nextPorps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }
  render() {
    console.log("%cclass => render", classStyle);
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
            console.log("onclick!");
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
