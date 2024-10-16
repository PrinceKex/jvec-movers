import representImg from '../../assets/representImg.jpg'
import CommonButton from '../common-button'
function WeRepresent() {
  return (
    <section className='flex flex-col bg-pink-50 text-white h-auto md:h-screen'>
      <div className='md:relative h-3/4 w-full md:w-4/5 m-auto flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-3/5'>
          <img
            src={representImg}
            alt='We Represent'
            className='w-full object-contain'
          />
        </div>
        <div
          className='md:absolute left-[22.3rem] top-14 w-full md:w-[55%] my-auto flex flex-col justify-center items-center bg-stone-700 p-6 gap-4
         mx-auto z-10'
        >
          <h2 className='text-2xl font-bold tracking-wider text-white'>
            WHAT WE REPRESENT
          </h2>
          <h4 className='text-xl font-medium text-white'>
            STRESS-FREE MOVES, PERFECT CLEAN
          </h4>
          <p className='text-center text-xs font-medium text-white'>
            Our team comprises highly trained professionals who can handle moves
            of all sizes, from small apartments to large commercial relocations.
            Led by our founder and CEO, Joshua. Wea re commited to excellence in
            every move. Our staff undergoes rigorous training in moving
            techniques, safety protocols, and customer service standards to
            ensure your belongings are handled with the utmost care and
            professionalism
          </p>
          <CommonButton btnType='button' btnText='Learn More' />
        </div>
      </div>
    </section>
  )
}

export default WeRepresent
