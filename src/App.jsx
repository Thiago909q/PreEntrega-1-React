import { useState } from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <NavBar/>
  <ItemListContainer greeting="Todos Los Productos"/>
  </>
  
  )
}

export default App
