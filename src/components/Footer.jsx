import logo from '../assets/logo.png'
import CommonButton from './common-button'
import { FooterLinks } from './footerLinks'
import { QuickLinks } from './quickLinks'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-footer bg-cover bg-center flex flex-col text-white h-auto md:h-screen w-full'>
      <div className='grid  grid-cols-2 md:grid-cols-4 w-11/12 gap-2 mx-auto py-4'>
        <div className='w-full flex flex-col gap-8'>
          <div className='gap-2 w-full'>
            <img src={logo} alt='logo' className='w-32 object-cover' />
            <p className='text-sm text-white'>Copyright &copy; 2024</p>
            <p className='text-sm text-white text-wrap'>
              JVEC Movers. All Rights Reserved
            </p>
          </div>
          <div className='w-full flex flex-col gap-4 items-stretch'>
            <p className='text-sm text-white text-wrap'>
              Book Now - Schedule Your Move
            </p>
            <div>
              <CommonButton btnText='Free Quote' btnType='button' />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <p className='text-lg font-medium text-red-700'>SERVICES</p>
          <FooterLinks />
        </div>
        <div className='w-full flex flex-col'>
          <p className='text-lg font-medium text-red-700'> QUICK LINKS</p>
          <QuickLinks />
        </div>

        <div className='w-full flex flex-col gap-8'>
          <div className='gap-2 w-full'>
            <p className='text-lg font-medium text-red-700'> CONTACT US</p>
            <p className='text-sm text-white text-wrap'>
              12 Rev, Oguniyi Street, off Oba Akinjobi, Ikeja GRA, Lagos,
              Nigeria
            </p>
            <p className='text-sm text-white text-wrap'>
              Phone: <span className='text-red-700'>0814-097-9054</span>
            </p>
            <p className='text-sm text-white text-wrap'>
              Email: <span className='text-red-700'>hello@jvecmovers.com</span>
            </p>
          </div>
          <div className='w-full flex flex-col gap-2 justify-start'>
            <p className='text-lg font-medium text-red-700'> FOLLOW US</p>
            <p className='text-sm text-white text-wrap'>
              Stay connected with us on social media for updates and promotions
            </p>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-2'>
                <FaWhatsapp className='text-lg text-white hover:text-red-700 hover:font-medium' />
                <p className='text-sm text-white text-wrap hover:text-red-700 hover:font-medium'>
                  WhatsApp
                </p>
              </div>
              <div className='flex flex-row gap-2'>
                <FaFacebook className='text-lg text-white hover:text-red-700 hover:font-medium' />
                <p className='text-sm text-white text-wrap hover:text-red-700 hover:font-medium'>
                  Facebook
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
