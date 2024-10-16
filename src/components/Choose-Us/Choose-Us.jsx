import CommonButton from '../common-button'
import gpsIcon from '../../assets/choose/gps.svg'
import customerIcon from '../../assets/choose/ccustomer.svg'
import pricingIcon from '../../assets/choose/cpricing.svg'
import servicesIcon from '../../assets/choose/cservices.svg'
// import chooseBackground from '../../assets/chooseBackground.png'
function ChooseUs() {
  return (
    <section className='bg-choose bg-slate-200 bg-cover bg-center flex flex-col p-2 lg:flex-row text-white lg:h-screen h-auto w-full'>
      <div className='w-full md:w-2/6 flex flex-col pl-9 mb-4'>
        <div className='relative mx-auto my-auto'>
          <h2 className=' text-nowrap text-4xl font-bold tracking-wider mb-6 text-gray-900'>
            WHY CHOOSE US
          </h2>
          <h4 className='text-2xl font-medium text-black'>YOUR PERSONALISED</h4>
          <h4 className='text-2xl font-medium mb-6 text-black'>
            MOVING SOLUTION
          </h4>
          <p className='text-wrap mb-10 text-gray-950 text-sm font-medium'>
            Our mission is to provide stress-free, efficient, and courteous
            moving and cleaning services, ensuring seamless transitions for both
            residential and commercial clients. Explore our services and see how
            we can make your next move effortless.
          </p>
          <CommonButton btnText='Learn More' type='button' />
        </div>
      </div>
      <div className='w-full md:w-4/6 flex flex-col items-center justify-center'>
        <div className='w-5/6 h-[70%] rounded-3xl shadow-md bg-white grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
          <div className='w-full grid grid-cols-1 mx-auto my-auto p-0'>
            <div className='w-4/5 mx-auto flex flex-row gap-0'>
              <div className='w-1/5 mt-2 mr-0 border-0'>
                <img src={customerIcon} alt='moveImg' className='w-8' />
              </div>
              <div className='w-4/5 ml-0 border-0'>
                <h6 className='text-lg font-medium text-black'>EXCEPTIONAL</h6>
                <h6 className='text-lg font-medium text-black'>
                  CUSTOMER SERVICE
                </h6>
                <p className='text-wrap mb-6 text-gray-950 text-xs font-medium'>
                  We Prioritize customer satisfaction by offering friendly,
                  professional service. Our team is dedicated to making your
                  moving experience as stress-free as possible.
                </p>
              </div>
            </div>
            <div className='w-4/5 mx-auto flex flex-row gap-0'>
              <div className='w-1/5 mt-2 mr-0 border-0'>
                <img src={gpsIcon} alt='moveImg' className='w-8' />
              </div>
              <div className='w-4/5 ml-0 border-0'>
                <h6 className='text-lg font-medium text-black'>GPS</h6>
                <h6 className='text-lg font-medium text-black'>TRACKING</h6>
                <p className='text-wrap mb-6 text-gray-950 text-xs font-medium'>
                  We provide real-time tracking of your belongings, giving you
                  peace of mind during the moving process
                </p>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-1 mx-auto my-auto'>
            <div className='w-4/5 mx-auto flex flex-row gap-0'>
              <div className='w-1/5 mt-2 mr-0 border-0'>
                <img src={pricingIcon} alt='moveImg' className='w-8' />
              </div>
              <div className='w-4/5 ml-0 border-0'>
                <h6 className='text-lg font-medium text-black'>COMPETITIVE</h6>
                <h6 className='text-lg font-medium text-black'>PRICING</h6>
                <p className='text-wrap mb-6 text-gray-950 text-xs font-medium'>
                  We offer competitive rates for our services without
                  compromising on quality. Get a high-value service at a price
                  that fits your budget
                </p>
              </div>
            </div>
            <div className='w-4/5 mx-auto flex flex-row gap-0'>
              <div className='w-1/5 mt-2 mr-0 border-0'>
                <img src={servicesIcon} alt='moveImg' className='w-8' />
              </div>
              <div className='w-4/5 ml-0 border-0'>
                <h6 className='text-lg font-medium text-black'>
                  COMPREHENSIVE
                </h6>
                <h6 className='text-lg font-medium text-black'>SERVICES</h6>
                <p className='text-wrap mb-6 text-gray-950 text-xs font-medium'>
                  In addition to moving, we provide cleaning services to ensure
                  your new space is spotless and ready for you to move into
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
