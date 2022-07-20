import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutMaster from './layouts/LayoutMaster'
import Curriculum from './paginas/Curriculum'
import Habilidades from './paginas/Habilidades'
import Principal from './paginas/Principal'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMaster />}>
          <Route index element={<Principal />}/>
          <Route path='habilidades' element={ <Habilidades /> }/>
          <Route path='curriculum' element={ <Curriculum /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
