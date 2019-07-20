import React from 'react';

const Example = (props) => {
    return (
      <div>
        <h4>
          Hi there, my name is {props.name} and I'm a {props.job}
        </h4>
      </div>
    );
}

export default Example;
