import React from 'react';

const Staff = (props) => (
  <li className="course media group">
    <div>
      <h3>{props.title}-<i>{props.dept.toUpperCase()}</i></h3>
      <em>{props.desc}</em>
      {props.room &&
        <p><b>Phone Ext: {props.phone} Room: {props.room}</b></p>}
    </div>
  </li>
);

export default Staff;
