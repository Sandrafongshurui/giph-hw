import React, { useRef } from "react";

const FilterForm = (props) => {
  //uncontrolled, it will return a .current of the ref element
  //setting a ref connection, so that this will always pull the value from the input fiedl when i need it
  const filterInputVal = useRef();

  //form submit fn for use ref
  const submitFilterForm = (evnt) => {
    evnt.preventDefault();
    console.log("filter input", filterInputVal.current.value);
    props.onSubmit(filterInputVal.current.value);
  };

  // //for controlled, liftin this state
  // const [inputValue, setInputValue] = useState("");

  // const onValChange = (evnt) => {
  //   setInputValue(evnt.target.value);
  //   props.inputVal(evnt.target.value)
  //   //validation
  // };
  //   //form submit fn 
  // const submitFilterForm = (evnt) => {
  //   evnt.preventDefault(evnt);
  //   props.onSubmit(inputValue)//this is lifting this state to parent
  // };


  return (
    <div>
      <form onSubmit={submitFilterForm}>
        <input ref={filterInputVal} type="text" placeholder="type of giphy"/>
        <input type="submit" value="Submit" />
      </form>
      {/* <form onSubmit={submitFilterForm}>
        <input value={inputValue} onChange={onValChange} type="text" />
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
};

export default FilterForm;
