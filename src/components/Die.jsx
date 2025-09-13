import { useEffect, useState } from "react"

export default function Die(){

  // dice array and state
  const [allDice, setAllDice] = useState(generateAllDice())
  function generateAllDice(){
    const all = Array.from({length:10}, ()=>{
      return Math.floor(Math.random()*6) + 1
    })
    return all
  }

  // roll
  function roll(){
    setAllDice(generateAllDice())
  }


  return (
    <>
      <div className="die-container">
        {allDice.map(num => {
          return <button className="die-bt" id="dieBt">{num}</button>
        })}
      </div>

      <button onClick={roll} className="roll-btn" id="rollBtn">Roll</button>
    </>
  )
}