import heroImg from '../../assets/heroImg.png'
import move from '../../assets/choose/gps.svg'
function Hero() {
  return (
    <section className='flex flex-col md:flex-row text-white h-auto'>
      <div className='w-full md:w-1/2 bg-slate-950 flex flex-col items-center ml-0 md:ml-10'>
        <div className='md:relative mx-auto my-auto'>
          <div className='flex flex-col gap-0'>
            <img src={move} alt='moveImg' className='w-16' />
            <h1 className='text-6xl font-bold italic'>
              <span className='text-red-700'>MOVE</span> WITH
            </h1>
          </div>
          <h1 className='text-5xl tracking-wide font-bold'>CONFIDENCE</h1>
          <h4 className='text-4xl tracking-widest'>Smooth Move Starts Here</h4>
        </div>
      </div>
      <div className='w-fit md:w-1/2 ml-0 md:ml-10 p-0 border-0'>
        <img
          src={heroImg}
          alt='heroImg'
          className='w-fit object-contain h-screen'
        />
      </div>
    </section>
  )
}

export default Hero
