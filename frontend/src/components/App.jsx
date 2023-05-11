import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState('')
  const [BACKEND_ROUTE] = useState(`http://localhost:5000/test/test_function`)

  const fetchBackendRequest = () => {
    fetch(BACKEND_ROUTE).
    then((response) => response.json()).
    then((data) => setTest(data)).
    catch(error => {
      console.error('Error fetching posts:', error);
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'>
      <button onClick={() => fetchBackendRequest()}>
          llamar al backend!
      </button>
        <h1>{test}</h1>
      </div>
      +3.2601
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
