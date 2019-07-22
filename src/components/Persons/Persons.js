import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDrviedStateFromProps', props);
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   // this check is not coming for free, it could be unnecessary in the case that when parent component gets update, the children compo get update as well, like persons and person. But in this case, persons has nothing to do with App(parent comp), so check is good
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.change !== this.props.change ||
  //     nextProps.click !== this.props.click
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'this is snapshot message' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          // onClick={this.switchNameHandler.bind(this, 'Jack No.2')}
          key={person.id}
          click={() => this.props.click(index)}
          name={person.name}
          age={person.age}
          change={event => this.props.change(event, person.id)}
          isAuthenticated = {this.props.isAuth}
        />
      );
    });
  }
}


export default Persons;
