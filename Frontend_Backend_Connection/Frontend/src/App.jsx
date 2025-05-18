import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [avengers, setAveng] = useState([])

  useEffect(()=>{
    axios.get('/api/avengers')
    .then((response)=>{
      setAveng(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
      <h1>Sunny Babu created an App</h1>
      <p>AVENGERS : {avengers.length} </p>

      {
        avengers.map((avengers,index)=>(
          <div key={avengers.rank}>
            <h3>{avengers.name}</h3>
            <p>{avengers.speciality}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
