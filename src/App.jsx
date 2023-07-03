import React from 'react'
import { useContextData } from './Context/ContextData';

const App = () => {
const [data] = useContextData()
console.log(data);

  return (
    <div>App</div>
  )
}

export default App