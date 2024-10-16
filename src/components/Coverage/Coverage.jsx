import homeImg from '../../assets/weserve/homeowners.svg'
import rentersImg from '../../assets/weserve/renters.svg'
import businessImg from '../../assets/weserve/business.svg'
import propertyImg from '../../assets/weserve/property.svg'
function Coverage() {
  return (
    <section className='bg-coverage bg-contain  bg-center flex flex-col text-white h-auto'>
      <div className='w=full h-auto bg-white/85'>
        <div className='relative w-full h-screen pt-16 md:pl-32'>
          <h2 className='text-3xl font-bold tracking-wider mb-16 text-black text-center'>
            GEOGRAPHICAL COVERAGE
          </h2>
          <div className=' md:absolute top-40 w-[400px] md:w-2/5 border-solid mb-20 border-2 shadow-md shadow-black bg-white pl-3 py-2 pr-8 mx-auto'>
            <p className='text-left text-lg font-medium text-black'>
              <span className='font-bold text-xl'>LOCAL: </span>Serving the
              Tri-Cities area and other cities in Tennessee
            </p>
          </div>
          <div className='md:absolute top-80 left-96 w-[400px] md:w-3/5 border-solid border-2 shadow-md shadow-black bg-white pl-3 py-2 pr-8 mx-auto'>
            <p className='text-left text-lg font-medium text-black'>
              <span className='font-bold text-xl'>LONG-DISTANCE: </span>Covering
              moves to Virginia, North-Carolina, South-Carolina, Atlanta,
              Kentucky and Washington DC
            </p>
          </div>
        </div>
        <div className='w-full h-screen bg-white'>
          <div className='my-auto p-8'>
            <h2 className='text-4xl font-bold tracking-wider text-black text-center pb-4'>
              CLIENTS WE SERVE
            </h2>
            <h2 className='text-2xl font-bold text-black text-center'>
              OUR SERVICES CATER TO
            </h2>
          </div>
          <div className='flex flex-row mt-8 mb-10 gap-6'>
            <div className='flex flex-col gap-4 bg-pink-50 p-3 shadow-md shadow-slate-800 w-1/4'>
              <h4 className='text-lg font-medium text-black text-left'>
                HOMEOWNERS
              </h4>
              <img src={homeImg} alt='HomeOwners' className='w-40' />
              <p className='text-sm font-medium text-black'>
                Whether moving out of town or to a new state, we help home
                owners to transition smoothly.
              </p>
            </div>
            <div className='flex flex-col gap-4 bg-pink-50 p-3 shadow-md shadow-slate-800 w-1/4'>
              <h4 className='text-lg font-medium text-black text-left'>
                RENTERS
              </h4>
              <img src={rentersImg} alt='HomeOwners' className='w-40' />
              <p className='text-sm font-medium text-black'>
                We assist renters with their moves, ensuring they leave their
                rental properties clean and in good condition
              </p>
            </div>
            <div className='flex flex-col gap-4 bg-pink-50 p-3 shadow-md shadow-slate-800 w-1/4'>
              <h4 className='text-lg font-medium text-black text-left'>
                BUSINESSES
              </h4>
              <img src={businessImg} alt='HomeOwners' className='w-40' />
              <p className='text-sm font-medium text-black'>
                Our commercial moving services help businesses relocate with
                minimal disruption.
              </p>
            </div>
            <div className='flex flex-col gap-4 bg-pink-50 p-3 shadow-md shadow-slate-800 w-1/4'>
              <h4 className='text-lg font-medium text-black text-left'>
                PROPERTY MANAGERS
              </h4>
              <img src={propertyImg} alt='HomeOwners' className='w-40' />
              <p className='text-sm font-medium text-black'>
                We partner with property managers to offer seamless moving
                services for their tenants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coverage
