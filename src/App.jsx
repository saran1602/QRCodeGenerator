import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QRCode } from './QRCode'
import "./qrcode.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QRCode/>
    </>
  )
}

export default App
