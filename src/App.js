import './App.css';
import { useEffect, useState } from "react";
import pattern from "./img/pattern-divider-desktop.svg";
import diceicon from "./img/icon-dice.svg";
import patternMobile from "./img/pattern-divider-mobile.svg";

const App =()=> {
const [data, setdata] = useState();

useEffect(() =>{
  peticionApi ();
},[])

function peticionApi (){
  fetch('https://api.adviceslip.com/advice/117')
  .then(response => response.json())
  .then(result => {
    setdata(result.slip);
    console.log(result);
  })
}

console.log(data);

return (
  <div className="App">
      <section>
      {data?.id && ( 
        <h4>Advice #{data.id}</h4>
        )}
        {data?.advice && ( 
        <h2>"{data.advice}"</h2>
        )}
        <img src={pattern} className="border_pattern desktop_pattern"/>
        <img src={patternMobile} className="border_pattern mobile_pattern"/>
        <div className='row_icon'>
        <img src={diceicon} className="icon_device"/>
        </div>
      </section>
    </div>
  );
}

export default App;
