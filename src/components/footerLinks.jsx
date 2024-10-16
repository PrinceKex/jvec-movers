import { NavLink } from 'react-router-dom'

export const FooterLinks = () => {
  const FooterItems = [
    {
      href: '#',
      title: 'Residential Moving',
    },
    {
      href: '#',
      title: 'Complete Packing',
    },
    {
      href: '#',
      title: 'Loading and Unloading',
    },
    {
      href: '#',
      title: 'Transportation',
    },
    {
      href: '#',
      title: 'Unpacking Services',
    },
    {
      href: '#',
      title: 'Commercial Moving',
    },
    {
      href: '#',
      title: 'Office and Business Relocations',
    },
    {
      href: '#',
      title: 'Packing and Transportation',
    },
    {
      href: '#',
      title: 'Setup Services',
    },
    {
      href: '#',
      title: 'Specialty Moves',
    },
    {
      href: '#',
      title: 'Delicate Items',
    },
    {
      href: '#',
      title: 'Cleaning Services',
    },
  ]
  return (
    // <aside className='bg-gray-100 w-full md:w-60'>
    <nav className='bg-slate-950 text-white w-5/12 ml-0'>
      <ul className='flex flex-col justify-start align-middle'>
        {FooterItems.map(({ href, title }) => (
          <li className='m-2' key={title}>
            <NavLink to={href}>
              <p className='text-white text-sm text-nowrap hover:text-red-700 current:text-red-700 hover:underline hover:underline-offset-[15px] hover:decoration-2'>
                {title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    // </aside>
  )
}
