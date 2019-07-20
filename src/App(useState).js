import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Sidebar from './components/Sidebar';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Yisheng', age: 19 },
      { name: 'Bowei', age: 25 },
      { name: 'Stphinie', age: 44 }
    ],
    // otherState: "this is other state"
  });
  const [otherState,setOtherState] = useState("this is other state")

  console.log(personState, otherState);
  
  const changeName = () => {
    setPersonState({
      persons: [
        { name: 'hi', age: 19 },
        { name: 'hello', age: 25 },
        { name: 'lol', age: 44 }
      ],
    });
    setOtherState("this is another state")
  };


  return (
    <div className='App'>
      <Sidebar />
      <h1>Welcome to React world</h1>
      <button onClick={changeName}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        My hobbies: coding
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;

// state = {
//   persons: [
//     { name: "Yisheng", age: 19 },
//     { name: "Bowei", age: 25 },
//     { name: "Stphinie", age: 44 }
//   ]
// }

// changeName = () => {
//   this.setState({
//     persons: [
//       { name: "hi", age: 19 },
//       { name: "hello", age: 25 },
//       { name: "lol", age: 44 }
//     ]
//   }
//   )
// }
