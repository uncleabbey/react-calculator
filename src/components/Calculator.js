import React, { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
const Calculator = props => {
  const [input, setInput] = useState(0);
  const clear = () => {
    setInput("0");
  };
  const handleClick = (e) => {
        const prevInput = String(input);
        const keyInput = String(e.target.value);
        const operators = "+/*-";
        const lastChar = prevInput.charAt(prevInput.length-1);
        const firstChar = prevInput.length === 1 ? true : false;

        switch(keyInput) {
            case "CE":
                clear();
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                handleZero(firstChar, prevInput, keyInput);
                break;
            case "+":
            case "*":
            case "/":
            case "-":
                if("+-/*".includes(lastChar)) {
                    setInput(
                        prevInput.substring(0, prevInput.length-1) + keyInput
                    )
                } else {
                    inputConcat(keyInput);
                }
                break;
            case ".":
                if (checkDecimal(prevInput)) {
                    return;
                } else {
                    inputConcat(keyInput);
                }
                break;
            case "=":
                let inputString = prevInput;
                if(operators.indexOf(lastChar) > -1) {
                    inputString = inputString.substring(0, inputString.length-1);
                }
                // eslint-disable-next-line
                let result = eval(inputString);
                setInput(result)
               // setOutput(result)
                break;
            default:
                return;

        }    
    }

    const checkDecimal = (input) => {
        const regex = /[-+*/]/g;
        const lastTerm = input.split(regex).slice(-1);
        return lastTerm[0].includes(".");
      }

   const  handleZero = (firstChar, prevInput, keyInput) => {
        if (firstChar && prevInput === "0") {
            setInput(
                keyInput
            )
        } else {
            setInput(
             prevInput + keyInput
            )
        };
    }

   const inputConcat = (value) => {
        setInput(input + String(value))
    }

  return (
    <div>
      <Display topScreen={input} />
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
