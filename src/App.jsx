import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
import CreateProject from './pages/CreateProject'

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Dashboard/>}/>
      <Route path = "/projects/:id" element={<ProjectDetails/>}/>
      <Route path = "/create-project" element = {<CreateProject/>} />
    </Routes>
    </>
  )
}

export default App
