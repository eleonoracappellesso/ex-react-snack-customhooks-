import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";

export default function App() {

  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🤪");

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
      <div>
        <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
        {customPointer}
      </div>
    </>
  )
}