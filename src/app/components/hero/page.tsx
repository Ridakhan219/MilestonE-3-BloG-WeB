import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white p-8 rounded-lg shadow-xl mb-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              {/* Image Section */}
              <div className="flex-shrink-0 md:w-1/2 lg:w-1/3">
               
                <Link href="/recipeInDetail" target='main'> <Image src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="picture" 
                height={800}
                width={800}
                className=" rounded-lg shadow-md" /></Link>
              </div>

              {/* Text Content Section */}
              <div className="md:w-1/2 lg:w-2/3 space-y-6">
                <h2 className="text-3xl font-semibold text-gray-900">Quick and Easy 5 Ingredient Recipes</h2>
                <p className="text-lg text-gray-700 ml-4">
                  We all love delicious food, but sometimes we don&apos;t have the time or ingredients for complex recipes.
                  Here&apos;s a quick guide to some simple, 5-ingredient recipes that are perfect for busy days! Whether you&apos;re a beginner cook or someone with limited time, these recipes will help you enjoy tasty meals with minimal ingredients and effort.
                </p>

                {/* Benefits List */}
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <span><strong><u>Time Saving and Easy to Follow</u></strong>: Each recipe has been designed to take no longer than 30 minutes, making them perfect for busy evenings, last-minute meals, or when you want something quick but satisfying.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <span><strong><u>Minimal Ingredients</u></strong>: You don&apos;t need a huge pantry full of exotic ingredients to create delicious meals. All of these recipes use just five common ingredients you likely already have at home.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <span><strong><u>Healthy Options</u></strong>: Many of these 5-ingredient recipes can be adapted to suit different dietary preferences, including vegan, gluten free, and dairy free. Plus, they&apos;re packed with flavor without any unnecessary calories or added preservatives.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <span><strong><u>Perfect for Meal Prep</u></strong>: These easy recipes are great for meal prepping ahead of time. You can cook them in bulk and store them in the fridge for several days, making lunch and dinner easy throughout the week.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <span><strong><u>Budget-Friendly</u></strong>: Save money without sacrificing taste! With just five ingredients, you can make filling meals without breaking your budget.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <span><strong><u>Kid Friendly</u></strong>: Most of these recipes are super easy to prepare and perfect for getting kids involved in the kitchen. Even picky eaters will love these simple dishes!</span>
                  </li>
                </ul>

                {/* Call to Action Button */}
                <div className="mt-8">
                  <Link href="./recipes" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Explore Recipes</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hero;
