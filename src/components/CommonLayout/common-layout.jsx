import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
export default function CommonLayout() {
  return (
    <div className='min-h-screen flex flex-col w-11/12 sm:w-10/12 mx-auto bg-slate-950'>
      <div className='flex flex-col flex-1 w-full m-auto'>
        <Header />
        <main className={'flex-1'}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
