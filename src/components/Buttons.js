import React from "react";
import Digit from "./Digit";
import Signs from "./Signs";

const Buttons = props => {

  return (
    <div className='container'>   
        <Signs handleClick={props.handleClick} id="clear" sign={'CE'} />
        <Digit handleClick={props.handleClick} id={"one"} number={'1'}  /> 
        <Digit handleClick={props.handleClick} id={"two"} number={'2'}  />
        <Signs handleClick={props.handleClick} id={"add"} sign={"+"} />
        <Digit handleClick={props.handleClick} id={"three"} number={'3'}  />
        <Digit handleClick={props.handleClick} id={"four"} number={'4'}  />
        <Signs handleClick={props.handleClick} id={"subtract"} sign={"-"} />
        <Digit handleClick={props.handleClick} id={"five"} number={'5'}  />
        <Digit handleClick={props.handleClick} id={"six"} number={'6'}  />
        <Signs handleClick={props.handleClick} id={"multiply"} sign={"*"} />
        <Digit handleClick={props.handleClick} id={"seven"} number={'7'} />
        <Digit handleClick={props.handleClick} id={"eight"} number={'8'}  />
        <Signs handleClick={props.handleClick} id={"divide"} sign={"/"} />
        <Digit handleClick={props.handleClick} id={"nine"} number={'9'}  />
        <Digit handleClick={props.handleClick} id={"zero"} number={'0'}  />
        <Signs handleClick={props.handleClick} id={"equals"} sign={"="} />
        <Signs handleClick={props.handleClick} id={"decimal"} sign={"."} />
     
        
    </div>
  );
};

export default Buttons;
