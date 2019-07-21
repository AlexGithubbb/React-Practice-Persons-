import React, { useEffect, useRef } from'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);


  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer =  setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000);
    toggleBtnRef.current.click();
    return() => {
      // clearTimeout(timer);
      console.log('[Cokpit.js] clearnUp work in useEffect');
    }
  // }, [props.persons]) // run only when persons changed.
  }, []) // run only for the first time

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cokpit.js] 2nd clearnUp work in useEffect');
    }
  })

  let btnClasses = '';

  if (props.showPersons) {
    btnClasses = classes.red;
    // console.log(btnClasses);
  }

  let assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
    // console.log(assignedClasses);
  }
  return (
      <div className={classes.Cockpit}>
        {/* <h1>Welcome to React world</h1> */}
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button ref ={toggleBtnRef} className={btnClasses} onClick={props.click}>Toggle persons</button>
      </div>
  )
}

export default React.memo(Cockpit);
