// imports
import "./App.css"
import Die from "./components/Die"

export default function App(){
  return (
    <main className="main-container">
      <div className="die-container">
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
      </div>
    </main>
  )
}