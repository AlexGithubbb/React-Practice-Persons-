import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';

class App extends Component {
  constructor() {
    super();
    console.log('[App.js] contructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Yisheng', age: 19 },
      { id: '2', name: 'Bowei', age: 25 },
      { id: '3', name: 'Andrew', age: 44 }
    ],
    oterState: 'this is another state',
    showPersons: false,
    showCockpit: true,
    currentCounter: 0,
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDrviedStateFromProps', props);
    return state;
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        currentCounter: prevState.currentCounter + 1
      };
    });
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

  checkAuthentication = () => {
    this.setState({ isAuthenticated: true });
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Persons.js] getSnapshotBeforeUpdate');
  //   return { message: 'this is snapshot message' }
  // }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  render() {
    console.log('[App.js] rendering...');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          change={this.changeNameHandler}
          isAuth={this.state.isAuthenticated}
        />
      );
      // button.backgroundColor = 'red';
      // button[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    return (
      // <A className={classes.App}>
      <Aux>
        <button
          onClick={() => {this.setState({ showCockpit: false });
        }}>
          Clean up Cockpit
        </button>
        
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.mainTitle}
            click={this.togglePersonHandler}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            auth={this.checkAuthentication}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
