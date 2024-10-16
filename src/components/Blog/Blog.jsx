import BlogSlider from '../blog-slide-show'

function Blog() {
  return (
    <section className='bg-slate-700 bg-cover bg-center flex flex-col text-white h-auto w-full py-10'>
      <div className='flex flex-col items-center justify-center w-3/6 mx-auto'>
        <h2 className='text-4xl font-bold tracking-widest mb-4 text-white text-center'>
          THE SMOOTH MOVE BLOG
        </h2>
        <h3 className='text-2xl font-bold tracking-wide mb-6 text-white text-center text-wrap'>
          MOVING AND RELOCATION TIPS AND EVERYTHING IN BETWEEN
        </h3>
        <h6 className='text-lg font-medium mb-6 text-white text-center text-wrap'>
          Check out our blog for helpful tips and guides on making your move as
          smooth as possible. Topics include packing tips, moving checklists and
          more
        </h6>
      </div>
      <BlogSlider />
    </section>
  )
}

export default Blog
