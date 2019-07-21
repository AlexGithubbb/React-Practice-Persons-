import React, {Component} from 'react';
import classes from './Person.module.css';
// import Radium from 'radium';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{
  // const media = {
  //   '@media (min-width: 500px)' : {
  //     width: "450px"
  //   }
  // }
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    this.inputElementRef.current.focus();
  }
  render(){
    const{name, age, children, click, change} = this.props;
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {/* <div className={classes.Person}> */}
        {/* I'm a {name} and I'm {Math.floor(Math.random()*30)} years old */}
        <p onClick={click}  >I'm a {name} and I'm {age} years old</p>
        <p>{children}</p>
        <input type="text" onChange={change} value={name} ref = {this.inputElementRef}/>
      {/* </div> */}
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  change: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
}


export default withClass(Person, classes.Person);
