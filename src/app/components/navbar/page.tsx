import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
     
<div className="bg-gray-100 font-sans text-gray-800">

    {/*  Navbar  */}
    <nav className="bg-gray-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold">Quick Recipes Blog</h1>
            </div>
            <div className="hidden md:flex space-x-6">
                <Link href="#" className="hover:text-gray-200">Home</Link>
                <Link href="/recipes" className="hover:text-gray-200">Recipes</Link>
                <Link href="/about" className="hover:text-gray-200">About</Link>
                <Link href="/contact" className="hover:text-gray-200">Contact</Link>
            </div>

        </div>
        
        {/*  Mobile Menu */}
        <div id="mobileMenu" className="md:hidden bg-black">
            <Link href="/" className="block text-white py-2 px-6">Home</Link>
            <Link href="/recipes" className="block text-white py-2 px-6">Recipes</Link>
            <Link href="/about" className="block text-white py-2 px-6">About</Link>
            <Link href="/contact" className="block text-white py-2 px-6">Contact</Link>
        </div>
    </nav>


</div>

    </div>
  )
}

export default Navbar
