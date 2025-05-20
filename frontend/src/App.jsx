import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import './index.css'

import Layout from './page/Layout'
import Home from './page/Home'
import Trash from './page/Trash'


function App() {

  return ( 
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='trash' element={<Trash />} />

        </Route>

      </Routes>

    </>
  )
}

export default App
