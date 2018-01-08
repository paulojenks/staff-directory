import React from 'react';
import Staff from './Staff';
import Columns from 'react-columns';


const StaffContainer = (props) => {
  let staffs = props.data.map((staff) => {
    return <Staff title={staff.title}
                   desc={staff.description}
                   phone={staff.phone}
                   room={staff.room}
                   dept={staff.dept}
                   key={staff.id} />
  });
  return (
    <div>
      <ul>
        <Columns columns="2">
          {staffs}
        </Columns>
      </ul>
    </div>
  );
}

export default StaffContainer;
