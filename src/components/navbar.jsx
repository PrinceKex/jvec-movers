import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const NavbarItems = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: 'about',
      title: 'About',
    },
    {
      href: 'services',
      title: 'Services',
    },
    {
      href: 'more',
      title: 'More',
    },
    {
      href: 'contact',
      title: 'Contact',
    },
  ]
  return (
    // <aside className='bg-gray-100 w-full md:w-60'>
    <nav className='bg-slate-950 text-white w-5/12 ml-0'>
      <ul className='hidden lg:flex lg:flex-row justify-start align-middle'>
        {NavbarItems.map(({ href, title }) => (
          <li className='m-2' key={title}>
            <NavLink to={href}>
              <p className='text-white text-base tracking-wide hover:text-red-700 current:text-red-700 hover:underline hover:underline-offset-[15px] hover:decoration-2'>
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
