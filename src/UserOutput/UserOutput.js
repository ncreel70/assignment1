import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p>What's up, {props.username}?</p>
      <p>You have {props.numChildren} children.</p>
    </div>
  );
};

export default UserOutput;
