import React, { useState } from "react";

const Person = (props) => {
  const [stateArr, setStateArr] = useState([]);
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default Person;
