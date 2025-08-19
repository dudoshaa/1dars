import React from 'react'
import Desserts from './components/Desserts'
import YourCart from './components/YourCart'
import { useFetch } from './hooks/useFetch'

function App() {
  const {data,error,isPending}=useFetch( "https://json-api.uz/api/project/dessertss/desserts")
  return (
    <div className='container'>
      {isPending && <div style={{width:"70%"}}>
        <h1 className="title">Loading...</h1>
      </div>}
     {data &&  <Desserts desserts={data.data}/>}
      <YourCart/>
    </div>
  )
}

export default App