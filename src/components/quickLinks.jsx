import { NavLink } from 'react-router-dom'

export const QuickLinks = () => {
  const QuickItems = [
    {
      href: '#',
      title: 'About Us',
    },
    {
      href: '#',
      title: 'FAQ',
    },
    {
      href: '#',
      title: 'Blog',
    },
    {
      href: '#',
      title: 'Privacy Policy',
    },
    {
      href: '#',
      title: 'Terms of Service',
    },
    {
      href: '#',
      title: 'SiteMaps',
    },
  ]
  return (
    // <aside className='bg-gray-100 w-full md:w-60'>
    <nav className='bg-slate-950 text-white w-5/12 ml-0'>
      <ul className='flex flex-col justify-start align-middle'>
        {QuickItems.map(({ href, title }) => (
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
