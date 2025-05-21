import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppBar from './components/Appbar'
import { Suspense } from 'react'

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={'Loading...'}>
            <Dashboard />
          </Suspense>} />

          <Route path='/'
            element={<Suspense fallback={'Loading...'}>
              <Landing />
            </Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
