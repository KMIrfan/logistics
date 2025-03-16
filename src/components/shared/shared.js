import React from 'react';

const Shared = ({ filter }) => {
  return (
    <div className="col-">
      {/* Common Inputs */}
      {!filter && (
        <>
            <input type="text" placeholder="Order Name" className="common-input m-1" />
            <input type="text" placeholder="Customer Name" className="common-input m-1" />
            <input type="text" placeholder="Status" className="common-input m-1" />
            <input type="text" placeholder="Vehicle Number" className="common-input m-1" />
        </>
      )}
      {/* Conditionally Render Vehicle Inputs */}
      {filter === "vehicles" && (
        <>
          <input type="text" placeholder="Vehicle Name" className="common-input m-1" />
          <input type="text" placeholder="Vehicle Type" className="common-input m-1" />
        </>
      )}
    </div>
  );
};

export default Shared;