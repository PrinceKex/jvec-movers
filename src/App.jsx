import { Route, Routes } from 'react-router-dom'
import CommonLayout from './components/CommonLayout/common-layout'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import More from './pages/More'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='more' element={<More />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
