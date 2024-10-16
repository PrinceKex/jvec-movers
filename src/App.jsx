import { Route, Routes } from 'react-router-dom'
import CommonLayout from './components/CommonLayout/common-layout'

import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import More from './pages/more'
import Contact from './pages/contact'
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
