// Navbar.jsx - Update the navigation links
import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [toggle, SetToggle] = useState(false)
  const handleClick = () => SetToggle(!toggle)

  return (
    <nav className='container mx-auto'>
      <div className='relative bg-gradient-to-r from-green-300 to-cyan-400 p-4 flex justify-between items-center'>
        <Link to="/" className='font-bold text-2xl md:text-3xl text-gray-900 ml-4 md:ml-10'>
          Appu's <span className='font-semibold text-green-700'>Aquarium</span>
        </Link>

        <ul className='md:flex space-x-8 hidden text-md ml-110 font-semibold'>
          <li className='hover:underline hover:decoration-blue-600 decoration-transparent transition duration-600 decoration-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:underline hover:decoration-blue-600 decoration-transparent transition duration-600 decoration-4'>
            <Link to="/#about">About Us</Link>
          </li>
          <li className='hover:underline hover:decoration-blue-600 decoration-transparent transition duration-600 decoration-4'>
            <Link to="/#services">Services</Link>
          </li>
          <li className='hover:underline hover:decoration-blue-600 decoration-transparent transition duration-600 decoration-4'>
            <Link to="/products">Products</Link>
          </li>
          <li className='hover:underline hover:decoration-blue-600 decoration-transparent transition duration-600 decoration-4'>
            <Link to="/conservation">Conservation</Link>
          </li>
        </ul>

        <div className='md:hidden'>
          <div onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          {toggle && (
            <ul className='md:hidden border-none grid space-y-6 w-[200px] justify-center bg-cyan-600 border-2 absolute right-0 mt-3 p-4 z-50'>
              <li className='hover:underline hover:decoration-blue-800 decoration-transparent transition duration-600 decoration-4 text-white'>
                <Link to="/" onClick={() => SetToggle(false)}>Home</Link>
              </li>
              <li className='hover:underline hover:decoration-blue-800 decoration-transparent transition duration-600 decoration-4 text-white'>
                <Link to="/#about" onClick={() => SetToggle(false)}>About Us</Link>
              </li>
              <li className='hover:underline hover:decoration-blue-800 decoration-transparent transition duration-600 decoration-4 text-white'>
                <Link to="/#services" onClick={() => SetToggle(false)}>Services</Link>
              </li>
              <li className='hover:underline hover:decoration-blue-800 decoration-transparent transition duration-600 decoration-4 text-white'>
                <Link to="/products" onClick={() => SetToggle(false)}>Products</Link>
              </li>
              <li className='hover:underline hover:decoration-blue-800 decoration-transparent transition duration-600 decoration-4 text-white'>
                <Link to="/conservation" onClick={() => SetToggle(false)}>Conservation</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar