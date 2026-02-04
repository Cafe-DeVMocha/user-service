import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-amber-600 font-bold flex-col bg-blue-950'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold'>Vite + React</h1>
      <div >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p >
        Click on the Vite and React logos to learn more
      </p>
      <button className="rounded-lg border border-transparent border-radius px-4 py-2 bg-amber-400 text-base font-medium hover:border">
        Click me
      </button>
    </>
  )
}

export default App
