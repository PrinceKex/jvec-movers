import { FaPhoneAlt } from 'react-icons/fa'
import { Navbar } from './navbar'
import logo from '../assets/logo.png'
import CommonButton from './common-button'

function Header() {
  return (
    <div className='flex flex-row gap-2 mx-4 my-4 justify-between'>
      <img src={logo} alt='logo' className='inline-block w-20 ml-10 mr-10' />
      <Navbar />
      <div className='hidden md:mr-10' />
      <div className='hidden md:mr-10' />
      <div className='flex flex-row justify-center align-middle gap-4 text-white w-72'>
        <span className='flex flex-row text-nowrap justify-start align-bottom gap-2 m-auto hover:text-red-700'>
          {/* icon */}
          <FaPhoneAlt />
          {/* number */}
          0814-097-9054
        </span>
        <CommonButton btnText='Free Quote' btnType='button' />
      </div>
    </div>
  )
}

export default Header
