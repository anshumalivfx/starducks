import { React, Component } from "react";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numcoffee: 0,
      type: "Tall",
      coffee: "Cappuccino",
      hideCoffee: "hidden",
      hideSize: "hidden", 
      day: "Mon"
    };
  }
  
  render() {
    const Sizes = ["Tall", "Grande", "Venti"];
    const Type = ["Cappuccino", "Frappuccino", "Latte"];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    var yourchoices = new Array();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" style={{ width: "10%", height: "10%" }} />
          
          <div className="Select Day">
            
            <div className="select-day">
            <span>
              Select Day:
            </span>
            <span>    </span>
              <select id="day" value = {this.state.day} onChange={(e)=>{
                this.setState({day: e.target.value})
                this.setState({hideCoffee: ""})
              }} >
                {
                  days.map((day, i)=>{
                    return <option value={day} key={i}>{day}</option>
                  })
                }
              </select>
            </div>
            <div className="Select Coffee" style={{visibility: this.state.hideCoffee}}>
              <span>Select Your Coffee: </span>

              <select
                id="coffee"
                value={this.state.coffee}
                onChange={(e) => {
                  this.setState({ coffee: e.target.value });
                  this.setState({ hideSize: "" });

                  console.log(e.target.value);
                }}
              >
                {Type.map((i) => {
                  return (
                    <option value={i} key={i}>
                      {i}
                    </option>
                  );
                })}
              </select>
            </div>
            <div
              className="select-type"
              style={{ visibility: this.state.hideSize }}
            >
              <span>Select Size: </span>

              <select
                id="coffee"
                value={this.state.type}
                onChange={(e) => {
                  this.setState({ type: e.target.value });
                  console.log(e.target.value);
                }}
              >
                {Sizes.map((j) => {
                  return (
                    <option value={j} key={j}>
                      {j}
                    </option>
                  );
                })}
              </select>


            </div>

            <button className="btn btn-primary" onClick={() => {
                // if (yourchoices.isEmpty()) {
                //   yourchoices.push(`On ${this.state.day} you drink ${this.state.coffee} of size ${this.state.type}`);
                // }
                  yourchoices.push(`On ${this.state.day} you drink ${this.state.coffee} of size ${this.state.type}`);
              
              console.log(yourchoices)
            } }>Register for {this.state.day}</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
