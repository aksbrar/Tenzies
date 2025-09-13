import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'

export default function Die(){

  // dice array and state
  const [allDice, setAllDice] = useState(generateAllDice())
  
  function generateAllDice(){
    const all = Array.from({length:10}, ()=>{
      return {
        value : Math.floor(Math.random()*6) + 1,
        isHeld : false,
        key : nanoid(),
      } 
      
    })
    return all
  }

  // roll
  function roll(){
    setAllDice(oldDice => {
      return oldDice.map(item => {
        return item.isHeld === true ? 
          item : 
          {...item, value : Math.floor(Math.random()*6) + 1}
      })
    })
  }

  // hold
  function hold(id){
    setAllDice(prev => {
      return prev.map(item => {
        if (item.key === id){
          return {...item , isHeld : true}
        }
        else {
          return item
        }
      })
    })
  }

  return (
    <>
      <div className="die-container">
        {allDice.map(item => {
          return <button key={item.key}
                         className={`die-bt ${item.isHeld ? "is-held" : ""}`} 
                         id="dieBt"
                         onClick={(event)=>{hold(item.key)}}>
                          {item.value}
                 </button>
        })}
      </div>

      <button onClick={roll} className="roll-btn" id="rollBtn">Roll</button>
    </>
  )
}