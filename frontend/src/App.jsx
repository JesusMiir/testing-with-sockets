import AnimatedAlert from "./components/AnimatedAlert.jsx"
import { useState } from "react"
import Chat from "./components/Chat.jsx"

function App() {

  const [alertShown, setAlertShown] = useState(false)

  return (
    <>
      {/* <AnimatedAlert
        isShown={alertShown}
        message="I'm an alert!"
        closeFn={() => setAlertShown(false)}
      /> */}
      {/* <button onClick={() => setAlertShown(true)}>
        Show alert
      </button> */}
      <Chat />
    </>
  )
}

export default App