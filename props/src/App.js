import React from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { name: "Sean", age: 17 },
        { name: "Jackie", age: 16 },
        { name: "JRyan", age: 12 },
      ],
    };
  }
  switchNameHandler = () => {
    // console.log("was clicke");
    //State shouldn't be changed Don't do this: this.state.persons[0].name = "Sean Coburn"
    this.setState({
      persons: [
        { name: "Sean Coburn", age: 17 },
        { name: "Jackie", age: 16 },
        { name: "JRyan", age: 12 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onclick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons.age}
        />
        <Person name={this.state.persons[1].name} age={this.state.persons.age}>
          Hobbies: Piano
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons.age}
        />
      </div>
    );
  }
}

export default App;
