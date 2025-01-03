import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Quick Recipes is all about making cooking simple, delicious, and stress-free with minimal ingredients.
        </p>
        <p className="text-gray-600 mt-4">
          We believe in creating flavorful dishes that can be cooked in no time, perfect for anyone with a busy schedule.
        </p>
      </div>
    </div>
    <Link href="/" 
  className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
  Back to Home
</Link>
    </div>
);
}

export default About;