import mtechImg from '../../assets/team/mtechniques.svg'
import protocolImg from '../../assets/team/sprotocols.svg'
import serviceImg from '../../assets/team/cservice.svg'
import CommonButton from '../common-button'
function OurTeam() {
  return (
    <section className='bg-team bg-contain bg-center  h-auto'>
      <div className='bg-black/95 flex flex-col text-white w-full h-full p-8'>
        <div className='w-4/5 mx-auto my-auto flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <h2 className='text-4xl font-bold tracking-wider mb-2 text-red-700'>
              OUR TEAM
            </h2>
            <h4 className='text-2xl font-medium text-white'>
              HIGHLY TRAINED PROFESSIONALS IN
            </h4>
          </div>
          <div className='flex flex-row gap-8 items-center justify-center'>
            <div className='w-1/3 h-full flex flex-col gap-2 items-center justify-center'>
              <img
                src={mtechImg}
                alt='moving techniques'
                className='bg-white w-full rounded-lg p-8'
              />
              <h4 className='text-2xl font-medium text-white'>
                Moving Techniques
              </h4>
            </div>
            <div className='w-1/3 h-full flex flex-col gap-2 items-center justify-center'>
              <img
                src={protocolImg}
                alt='moving techniques'
                className='bg-white w-full rounded-lg p-8'
              />
              <h4 className='text-2xl font-medium text-white'>
                Safety Protocols
              </h4>
            </div>
            <div className='w-1/3 h-full flex flex-col gap-2 items-center justify-center'>
              <img
                src={serviceImg}
                alt='moving techniques'
                className='bg-white w-full rounded-lg p-8'
              />
              <h4 className='text-2xl font-medium text-white'>
                Customer Service
              </h4>
            </div>
          </div>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <p className='text-center text-base font-medium'>
              Our team comprises highly trained professionals who can handle
              moves of all sizes, from small apartments to large commercial
              relocations. Led by our founder and CEO, Joshua. Wea re commited
              to excellence in every move. Our staff undergoes rigorous training
              in moving techniques, safety protocols, and customer service
              standards to ensure your belongings are handled with the utmost
              care and professionalism
            </p>
            <CommonButton btnType='button' btnText='Learn More' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
