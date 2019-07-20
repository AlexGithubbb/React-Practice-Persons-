import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Yisheng', age: 19 },
      { id: '2', name: 'Bowei', age: 25 },
      { id: '3', name: 'Stphinie', age: 44 }
    ],
    oterState: 'this is another state',
    showPersons: false
  };
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: '1', name: newName, age: 19 },
        { id: '2', name: 'Bowei', age: 25 },
        { id: '3', name: 'Jennifer', age: 44 }
      ]
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] }; // get the correspoding person

    person.name = event.target.value;

    const persons = [...this.state.persons];

    // update array with the personIndex we fetched before
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // this will spread the original array and put each item into a new array => (new)persons
    persons.splice(personIndex, 1);
    this.setState({ persons }); // this.setState({persons: persons})
  };
  render() {
    const button = {
      // backgroundColor: 'white',
      padding: '8px',
      border: '1px solid blue',
      font: 'inherit',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'green',
      // hovering is not recommend here, in in-line styling, it's pretty hard to operate it, but we can do it with Radium
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    let classes = [];
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                // onClick={this.switchNameHandler.bind(this, 'Jack No.2')}
                onClick={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                change={event => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      button.backgroundColor = 'red';
      button[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <StyleRoot>
        <div className={styles.App}>
          {/* <Sidebar /> */}
          <h1>Welcome to React world</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={button} onClick={this.togglePersonHandler}>
            Toggle persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
