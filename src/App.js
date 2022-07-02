/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import husky from './husky.svg'           
import dalmatian from './dalmatian.svg'
import {useEffect, useState} from 'react'

const Rasa=(props)=>{
return (
  <>
 <h1> Nume: {props.name} </h1>
  <img src={props.img} className="App-logo"/>
  </> 
)
}


function App(){
 const [huskyCounter,sethuskyCounter]=useState(0);
 const [dalmatCounter,setdalmatCounter]=useState(0);
useEffect(()=>{
alert("mama are mere")  },
  [dalmatCounter]
);
 const tooLessDogs = () => {
  alert("You should buy 0 or more dogs ;)");
}
 const tooMuchDogs = () => {
    alert("You can't buy too much dogs");
 }

  return (
  
    <div className="App" >
      DOGS 

<h1 className='App-header'>  


  <Rasa name={"Husky"}
  className="App-logo"
 
  img={husky}
  />

<button
className='App-button'
 onClick={()=>sethuskyCounter((prevCount)=>{
  if (prevCount>0) return prevCount-1; 
  else {tooLessDogs();
    return 0;}}
  )}>
  -</button>

I wanna {huskyCounter} huskies!
<button 
className='App-button'
onClick={()=>sethuskyCounter((prevCount)=>{
  if(prevCount<15)return prevCount+1;
  else { tooMuchDogs();
  return 15;}
}
  )}>
  +</button>
  
  <a
    //aici pot pune link-uri
    className="App-link"
    href="https://www.youtube.com/watch?v=5F6ULZBf0g8"
    target="_blank"
    rel="noopener noreferrer"
    >
      Click here to see more huskies...
    </a>
   
  <Rasa   name={"Dalmatians"}
  className="App-logo"
 
  img={dalmatian}
  />

<button
className='App-button'
 onClick={()=>setdalmatCounter((prevCount)=>{
  if (prevCount>0) return prevCount-1; 
  else {tooLessDogs();
    return 0;}}
  )}>
  -</button>

I wanna {dalmatCounter} dalmatians!
<button 
className='App-button'
onClick={()=>setdalmatCounter((prevCount)=>{
  if(prevCount<15)return prevCount+1;
  // else { tooMuchDogs();
  // return 15;}
}
  )}>
  +</button>
    
  </h1>

{/* <h1 className='App-header'>
 {/* <Rasa  
   className="App-logo"
  name={"Dalmatian"}
  img={dalmatian}
  /> */
}
      {/* </h1> */} 
    </div>
  );
}

export default App;
