import React, { useState } from "react";
import { create, all } from "mathjs";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import "./App.css";

const btnValues = [
  ["C", "+-","%","/"], 
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

const App = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const math = create(all)


  const handleButtonClick = (btn) => {
      if(btn === "C"){
        setInput("");
        setResult(0);
        return;
      }
      else if(btn === "="){

        try{
          setResult(math.evaluate(input).toString());
        }
        catch(e){
          setResult("Error");
        }
      }
      else if(btn === "+-"){
        if(input.charAt(0) === "-"){
          setInput(input.slice(1));
        }
        else{
          setInput("-" + input);
        }
      }
      else if(btn === "%"){
        setInput(input + "%");
      }
      else if(btn === "x"){
        setInput(input + "*");
      }
      else if(btn === "."){
        setInput(input + ".");
      }
      else if(btn === "+"){
        setInput(input + "+");
      }
      else if(btn === "-"){
        setInput(input + "-");
      }
      else if(btn === "/"){
        setInput(input + "/");
      }
      else{
        setInput(input + btn);
      }
  }





  return (
    <div>
      <Wrapper>
        <Screen value={result || input} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              key = {i}
              className = {btn === "=" ? "equals":
                          btn === "C" ? "C" : ""
                          }
              value = {btn}
              onClick={() => handleButtonClick(btn)}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
};

export default App;
