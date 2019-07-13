import React from 'react'

const Digit = (props) => {
  return (
    <button
          id={props.id}
          className="col-xs-2 btn btn-primary digit"
          value={props.number}
          onClick={props.handleClick}
        >
         {props.number}
        </button>
  )
}

export default Digit
