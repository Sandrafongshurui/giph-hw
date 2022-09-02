import React, { useRef } from "react";

const FilterForm = (props) => {
  //setting a ref connection, so that this will always pull the value from the input fiedl when i need it
  const filterInputVal = useRef();

  //form submit fn for use ref
  const submitFilterForm = (evnt) => {
    evnt.preventDefault();
    console.log("filter input", filterInputVal.current.value);
    props.onSubmit(filterInputVal.current.value);
  };

  return (
    <div>
      <form onSubmit={submitFilterForm}>
        <input ref={filterInputVal} type="text" placeholder="type of giphy"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FilterForm;
