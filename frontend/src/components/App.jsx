import { useState } from 'react'
import RomLabels from './RomLabels.jsx'
import Visualizer from './Visualizer.jsx'
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
        <h1>Análisis de ROM para Hang Clean y Power Clean por medio de archivos bvh</h1>
      </div>
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
      <Visualizer/>
      <RomLabels/>
    </>
  )
}

export default App
