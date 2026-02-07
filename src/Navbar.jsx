// Navbar.jsx
import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ cartCount = 0 }) {
  const [toggle, SetToggle] = useState(false)
  const handleClick = () => SetToggle(!toggle)

  return (
    <nav className='container mx-auto sticky top-0 z-50 bg-white shadow-md'>
      <div className='relative bg-gradient-to-r from-green-300 to-cyan-400 p-4 flex justify-between items-center px-6 lg:px-12'>
        <Link to="/" className='font-bold text-2xl md:text-3xl text-gray-900'>
          Appu's <span className='font-semibold text-green-700'>Aquarium</span>
        </Link>

        {/* Desktop Menu */}
        <ul className='md:flex space-x-8 hidden text-md font-semibold items-center'>
          <li className='hover:text-blue-700 transition'><Link to="/">Home</Link></li>
          <li className='hover:text-blue-700 transition'><Link to="/about">About Us</Link></li>
          <li className='hover:text-blue-700 transition'><Link to="/services">Services</Link></li>
          <li className='hover:text-blue-700 transition'><Link to="/products">Products</Link></li>
          {/* <li className='hover:text-blue-700 transition'><Link to="/care-guide">Care Guide</Link></li> */}
          <li className='hover:text-blue-700 transition'><Link to="/care-guide">Care Guide</Link></li>
          <li className='hover:text-blue-700 transition'><Link to="/conservation">Conservation</Link></li>
          <li className='hover:text-blue-700 transition'><Link to="/contact">Contact</Link></li>

          {/* Cart Icon */}
          <li className='relative'>
            <Link to="/cart" className='flex items-center space-x-1 text-gray-900 hover:text-blue-800 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center space-x-4'>
          {/* Mobile Cart Link */}
          <Link to="/cart" className='relative text-gray-900 mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <div onClick={handleClick} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className='absolute top-full right-0 w-64 bg-cyan-600 shadow-xl z-50 rounded-bl-lg'>
            <ul className='grid space-y-4 p-6 text-white font-semibold text-lg'>
              <li className='hover:text-gray-200 cursor-pointer border-b border-cyan-500 pb-2'><Link to="/" onClick={() => SetToggle(false)}>Home</Link></li>
              <li className='hover:text-gray-200 cursor-pointer border-b border-cyan-500 pb-2'><Link to="/about" onClick={() => SetToggle(false)}>About Us</Link></li>
              <li className='hover:text-gray-200 cursor-pointer border-b border-cyan-500 pb-2'><Link to="/services" onClick={() => SetToggle(false)}>Services</Link></li>
              <li className='hover:text-gray-200 cursor-pointer border-b border-cyan-500 pb-2'><Link to="/products" onClick={() => SetToggle(false)}>Products</Link></li>
              {/* <li className='hover:text-gray-200 cursor-pointer border-b border-cyan-500 pb-2'><Link to="/care-guide" onClick={() => SetToggle(false)}>Care Guide</Link></li> */}
              <li className='hover:text-gray-200 cursor-pointer border-b border-cyan-500 pb-2'><Link to="/conservation" onClick={() => SetToggle(false)}>Conservation</Link></li>
              <li className='hover:text-gray-200 cursor-pointer pb-2'><Link to="/contact" onClick={() => SetToggle(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar