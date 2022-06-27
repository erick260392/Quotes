
import './App.css'
import quotes from './quotes.json'
import { useState } from 'react';



function App() {
  
  const [Index, setIndex] = useState(0)
  const {author,quote} =quotes[Index]
  const [Paint, setPaint] = useState(0)
  const Colors =["#FF9671","#09FADF","#00DCF2","#00BAF3"]
  
  let NumberRandom = Math.floor(Math.random()*quotes.length);
  let ColorRandom = Math.floor(Math.random()*Colors.length)
  
  
  
  console.log(quotes);
  console.log(NumberRandom);
  console.log(ColorRandom);


  document.body.style = `background:${Colors[Paint]}`

  return (
  <div className="App">
  <div className='card' >
 
  <i className="fa-solid fa-quote-left"></i> 
  <h2 className='quotes' style={{color:Colors[Paint]}} >{quote} </h2>
  <h3  style={{color:Colors[Paint]}}><b>{author}</b></h3>

  <button onClick={()=>
  {
    setIndex(NumberRandom)
    setPaint(ColorRandom)

  }} ><i class="fa-solid fa-circle-play"></i></button>
  
   </div>

    </div>
  )
}

export default App
