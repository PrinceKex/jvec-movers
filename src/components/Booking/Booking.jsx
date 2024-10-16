import { BiRightArrowAlt } from 'react-icons/bi'
import downloadImg from '../../assets/download.png'
function Booking() {
  return (
    <section className='bg-black/80 flex flex-col text-white h-auto md:h-screen w-full'>
      <div className='w-10/12 h-4/5 flex flex-col md:flex-row align-center justify-between mx-auto gap-14'>
        <div className='w-full md:w-1/3 mx-auto my-auto'>
          <h2 className='text-3xl font-semibold tracking-wide mb-4 text-white text-wrap'>
            READY FOR A STRESSLESS MOVE? GET YOUR FREE QUOTE
          </h2>
          <p className='text-wrap mb-10 text-white text-sm font-medium'>
            Fill out our online booking form to schedule your move with JVEC
            MOVERS.Provide details about your move, and we&apos;ll get back to
            you with a customized plan and quote.
          </p>
        </div>
        <div className='w-2/3 mx-auto my-auto flex flex-col justify-between align-middle gap-8'>
          <div className='flex flex-row justify-between w-full mb-5 md:mb-10'>
            <h2 className='text-5xl font-semibold tracking-widest mb-4 text-red-700 text-wrap'>
              Free Quote
            </h2>
            <BiRightArrowAlt className='text-7xl text-red-700' />
          </div>
          <div className='w-full border-b-2 border-b-red-700'></div>
        </div>
      </div>
      <div className='w-full h-1/5 bg-black flex flex-col items-center justify-center '>
        <div className='w-full md:w-4/5 h-full mx-auto my-auto flex flex-col md:flex-row items-center justify-between gap'>
          <h2 className='text-3xl font-semibold tracking-widest mb-4 text-white text-wrap'>
            DOWNLOAD THE APP
          </h2>
          <div className='w-full md:w-1/2 flex flex-row justify-evenly md:justify-between gap-4'>
            <img src={downloadImg} alt='download' className='w-44' />
            <img src={downloadImg} alt='download' className='w-44' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
