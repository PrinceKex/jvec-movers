import blogImg from '../assets/blog.png'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CommonButton from './common-button'

export default function BlogSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 'md',
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 'sm',
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div className='!w-64 h-full mx-4 p-1 border-2 border-white border-spacing-2 rounded-md'>
          <img
            src={blogImg}
            alt='blog'
            className='object-contain w-full overflow-hidden mb-4'
          />
          <h3 className='text-base text-left text-white'>JULY 10, 2024</h3>
          <h3 className='text-lg text-left text-white'>
            Settling into a new home:
          </h3>
          <h3 className='text-sm text-left text-white text-wrap mb-4'>
            Strategies for an effortless movement, hassle free
          </h3>
          <CommonButton btnText='Read More' btnType='button' />
        </div>
        <div className='!w-64 h-full mx-4 p-1 border-2 border-white border-spacing-2 rounded-md invisible lg:visible'>
          <img
            src={blogImg}
            alt='blog'
            className='object-contain w-full overflow-hidden mb-4'
          />
          <h3 className='text-base text-left text-white'>JULY 10, 2024</h3>
          <h3 className='text-lg text-left text-white'>
            Settling into a new home:
          </h3>
          <h3 className='text-sm text-left text-white text-wrap mb-4'>
            Strategies for an effortless movement, hassle free
          </h3>
          <CommonButton btnText='Read More' btnType='button' />
        </div>
        <div className='!w-64 h-full mx-3 p-1 border-2 border-white border-spacing-2 rounded-md'>
          <img
            src={blogImg}
            alt='blog'
            className='object-contain w-full overflow-hidden mb-4'
          />
          <h3 className='text-base text-left text-white'>JULY 10, 2024</h3>
          <h3 className='text-lg text-left text-white'>
            Settling into a new home:
          </h3>
          <h3 className='text-sm text-left text-white text-wrap mb-4'>
            Strategies for an effortless movement, hassle free
          </h3>
          <CommonButton btnText='Read More' btnType='button' />
        </div>
        <div className='!w-64 h-full mx-3 p-1 border-2 border-white border-spacing-2 rounded-md invisible lg:visible'>
          <img
            src={blogImg}
            alt='blog'
            className='object-contain w-full overflow-hidden mb-4'
          />
          <h3 className='text-base text-left text-white'>JULY 10, 2024</h3>
          <h3 className='text-lg text-left text-white'>
            Settling into a new home:
          </h3>
          <h3 className='text-sm text-left text-white text-wrap mb-4'>
            Strategies for an effortless movement, hassle free
          </h3>
          <CommonButton btnText='Read More' btnType='button' />
        </div>
        <div className='!w-64 h-full mx-3 p-1 border-2 border-white border-spacing-2 rounded-md'>
          <img
            src={blogImg}
            alt='blog'
            className='object-contain w-full overflow-hidden mb-4'
          />
          <h3 className='text-base text-left text-white'>JULY 10, 2024</h3>
          <h3 className='text-lg text-left text-white'>
            Settling into a new home:
          </h3>
          <h3 className='text-sm text-left text-white text-wrap mb-4'>
            Strategies for an effortless movement, hassle free
          </h3>
          <CommonButton btnText='Read More' btnType='button' />
        </div>
        <div className='!w-64 h-full mx-3 p-1 border-2 border-white border-spacing-2 rounded-md invisible lg:visible'>
          <img
            src={blogImg}
            alt='blog'
            className='object-contain w-full overflow-hidden mb-4'
          />
          <h3 className='text-base text-left text-white'>JULY 10, 2024</h3>
          <h3 className='text-lg text-left text-white'>
            Settling into a new home:
          </h3>
          <h3 className='text-sm text-left text-white text-wrap mb-4'>
            Strategies for an effortless movement, hassle free
          </h3>
          <CommonButton btnText='Read More' btnType='button' />
        </div>
      </Slider>
    </div>
  )
}
