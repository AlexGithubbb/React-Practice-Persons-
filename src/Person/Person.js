import React from 'react';
import classes from '../Person/Person.module.css';
import Radium from 'radium';

const Person = ({name, age, children, onClick, change}) => {
  const media = {
    '@media (min-width: 500px)' : {
      width: "450px"
    }
  }
  return (
    <div className = {classes.Person} style = {media}>
      {/* I'm a {name} and I'm {Math.floor(Math.random()*30)} years old */}
      <p onClick = {onClick}  >I'm a {name} and I'm {age} years old</p>
      <p>{children}</p>
      <input type="text" onChange = {change} placeholder = {name}/>
    </div>
  )
}

export default Radium(Person);
