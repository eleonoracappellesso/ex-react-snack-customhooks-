import useSwitch from "./useSwitch";
import useDate from "./useDate";

export default function App() {

  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

  return (
    <>
      <h1>EX - Snack Custom Hooks</h1>
      <div>
        <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h2>Data e ora attuali:</h2>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  )
}