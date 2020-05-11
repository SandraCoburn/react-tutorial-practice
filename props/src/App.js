import React from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person name="Sean" age="17" />
        <Person name="Jackie" age="16">
          Hobbies: Piano
        </Person>
        <Person name="JRyan" age="12" />
      </div>
    );
  }
}

export default App;
