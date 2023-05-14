import { useState, useRef } from 'react'
import '../css/App.css'

function App() {
  const [connection_test, setConnectionTest] = useState('')
  const [bvh_test_data, setBvhTestData] = useState('')
  const [BACKEND_ROUTE] = useState(`http://localhost:5000/`)
  const [CONNECTION_TEST_FUNCTION] = useState('test/test_function')
  const [BVH_TEST_DATA_FUNCTION] = useState('api/bvh_test_data')

  const getBackendConnectionTest = () => {
    fetch(BACKEND_ROUTE + CONNECTION_TEST_FUNCTION).
    then((response) => response.json()).
    then((data) => setConnectionTest(data)).
    catch(error => {
      console.error('Error fetching posts:', error);
    })
  }

  const getBackendBvhTestData = () => {
    fetch(BACKEND_ROUTE + BVH_TEST_DATA_FUNCTION).
    then((response) => response.json()).
    then((data) => setBvhTestData(data)).
    catch(error => {
      console.error('Error fetching posts:', error);
    })
  }

  return (
    <>
      <div className='card'>
        <h1>connection test</h1>
        <button onClick={() => getBackendConnectionTest()}>PRUEBA DE CONEXION AL BACKEND</button>
        <h2>
          { connection_test }
        </h2>
      </div>
      <div className='card'>
        <h1>bvh data test</h1>
        <button onClick={() => getBackendBvhTestData()}>PRUEBA GET_BVH_DATA</button>
        <h2>
          {
            bvh_test_data == '' ?
            <></> : 
              <div className='card'>
                {
                  bvh_test_data.map((data, i) => 
                    <div key={i}>
                      <h3>Root: { data.root }</h3>
                      <h3>Total frames: { data.total_frames }</h3>
                      <h3>Time of frames (s): { data.frame_time }</h3>
                    </div>
                  )
                }
              </div> 
          }
        </h2>
      </div>
    </>
  )
}

export default App
