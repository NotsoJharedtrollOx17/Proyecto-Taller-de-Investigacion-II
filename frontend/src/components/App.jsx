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
      <div className='card'>
        <Visualizer/>

      </div>
      <RomLabels/>
    </>
  )
}

export default App
