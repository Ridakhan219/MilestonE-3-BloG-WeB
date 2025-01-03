 'use client'; // Ensure this file is treated as a client-side component

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const RecipeDetail = () => {
  return (
    <div className="bg-gray-50 font-sans leading-normal">

      {/* Recipe Container */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-20">

        {/* Recipe Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">5-Ingredient Chicken Stir-Fry</h1>
          <p className="text-xl text-gray-600 mb-4">A quick and delicious chicken stir-fry made with just five simple ingredients!</p>
          <Image src="https://media.istockphoto.com/id/157439126/photo/chicken-and-vegetable-stir-fry.jpg?s=1024x1024&w=is&k=20&c=8OCyxxJH3Dob-eCyn2wTVfeTMt1fl60WMOP1RTc8cEQ=" alt="Chicken Stir-Fry" 
          height={72}
          width={141}
          className="object-cover rounded-lg shadow-md mb-6" />

        </header>

        {/* Recipe Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why You&apos;ll Love This Recipe</h2>
          <p className="text-lg text-gray-700">
            This Chicken Stir-Fry is perfect for busy nights when you want a healthy, delicious meal without spending hours in the kitchen. It&apos;s quick, easy, and made with just 5 ingredients! All you need is chicken 
            breast, bell peppers, soy sauce, garlic, and honey. Ready in 20 minutes!
          </p>
        </section>

        {/* Ingredients List */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ingredients</h2>
          <ul className="list-inside list-disc space-y-4 text-lg text-gray-700">
            <li>2 Chicken Breasts (sliced thinly)</li>
            <li>1 Red Bell Pepper (sliced)</li>
            <li>1 Yellow Bell Pepper (sliced)</li>
            <li>2 tbsp Soy Sauce</li>
            <li>1 tbsp Honey</li>
          </ul>
        </section>

        {/* Instructions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">How to Make It</h2>
          <ol className="list-decimal pl-8 space-y-4 text-lg text-gray-700">
            <li>In a large pan, heat a little oil over medium heat.</li>
            <li>Add the sliced chicken breast to the pan and cook until browned and cooked through (about 5-7 minutes).</li>
            <li>Add the sliced bell peppers and cook for another 2-3 minutes until tender.</li>
            <li>In a small bowl, whisk together soy sauce and honey. Pour the sauce over the chicken and peppers.</li>
            <li>Stir to combine and cook for an additional 2 minutes to let the sauce thicken.</li>
            <li>Serve hot over rice or noodles, and enjoy your quick and easy stir-fry!</li>
          </ol>
        </section>

        {/* Tips & Tricks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tips and Tricks</h2>
          <p className="text-lg text-gray-700">
            Looking to take this dish to the next level? Here are some simple tips:
          </p>
          <ul className="list-inside list-disc space-y-4 text-lg text-gray-700">
            <li><strong>Swap for Tofu:</strong> If you&apos;re vegetarian or vegan, swap the chicken for tofu or tempeh!</li>
            <li><strong>Additional Vegetables:</strong> Feel free to add other veggies like broccoli, carrots, or snap peas for more color and crunch.</li>
            <li><strong>Spice It Up:</strong> Add a pinch of red pepper flakes or chili paste if you like a little heat.</li>
            <li><strong>Meal Prep:</strong> This stir-fry stores well in the fridge for up to 3 days, making it perfect for meal prepping!</li>
          </ul>
        </section>

        {/* Step-by-Step Cooking Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Step-by-Step Cooking Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image src="https://mamiyarskitchen.com/wp-content/uploads/2022/02/breast-510x340.jpg" alt="Sliced Chicken"
           height={64}
           width={64}
            className="rounded-lg shadow-md" />
           
            <Image src="https://www.haxnicks.co.uk/cdn/shop/articles/grow-at-home-sweet-bell-pepper-capsicum.jpg?v=1606296304&width=1903" alt="Bell Peppers" height={64}
           width={64} className="rounded-lg shadow-md" />

            <Image src="https://www.bhg.com/thmb/DLxH0Q0NBt49pPaNcq-46R9Rt2M=/1866x0/filters:no_upscale():strip_icc()/bowl-of-soy-sauce-014063e26216479199f0572694d24fbd.jpg" alt="Soy Sauce" 
            height={64}
            width={64}
            className="rounded-lg shadow-md" />
          </div>
        </section>

        {/* Print Recipe Button */}
        <section className="text-center mb-10">
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
            onClick={() => window.print()}
          >
            Print Recipe
          </button>
        </section>

        <Link href="/" 
  className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
  Back to Home
</Link>

      </div>

    </div>
  );
};

export default RecipeDetail;
