import React from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { id: 11, name: "Sean", age: 17 },
        { id: 22, name: "Jackie", age: 16 },
        { id: 33, name: "JRyan", age: 12 },
      ],
    };
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      //returns true or false
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex]) //the same as line 22 different syntax
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: "Sean", age: 17 },
    //     { name: event.target.value, age: 13 },
    //     { name: "Jackie", age: 16 },
    //   ],
    // });
  };
  // switchNameHandler = (newName) => {
  //   // console.log("was clicke");
  //   //State shouldn't be changed Don't do this: this.state.persons[0].name = "Sean Coburn"
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 17 },
  //       { name: "Jackie", age: 16 },
  //       { name: "JRyan", age: 12 },
  //     ],
  //     showPersons: false,
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //slice will make a copy of the whole array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid green",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Sean!!!")}
            changed={this.nameChangeHandler}
          >
            Hobbies: Piano
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {/* {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Sean!!!")}
              changed={this.nameChangeHandler}
            >
              Hobbies: Piano
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null} */}
        {persons}
      </div>
    );
  }
}

export default App;
