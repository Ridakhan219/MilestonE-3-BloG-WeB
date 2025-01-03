import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
<footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <p className="text-gray-400">Have any questions? We&apos;d love to hear from you!</p>
                <ul className="text-gray-400">
                    <li>Email: <a href="mailto:info@foodblog.com" className="text-blue-400 hover:underline">info@foodblog.com</a></li>
                    <li>Phone: <a href="tel:+123456789" className="text-blue-400 hover:underline">+1 234 567 89</a></li>
                    <li>Address: 123 Recipe St, Food City, FC 12345</li>
                </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#recipes" className="hover:text-blue-400">Recipes</a></li>
                    <li><a href="#about" className="hover:text-blue-400">About</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex space-x-6">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <i className="fab fa-facebook-f fa-lg"></i> Facebook
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <i className="fab fa-twitter fa-lg"></i> Twitter
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <i className="fab fa-instagram fa-lg"></i> Instagram
                    </Link>
                    <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <i className="fab fa-pinterest fa-lg"></i> Pinterest
                    </Link>
                </div>
            </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2024 Food Blog. All Rights Reserved.</p>

        </div>

   
    </div>


</footer>

    </div>
  )
}

export default Footer
