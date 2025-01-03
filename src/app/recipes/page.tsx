import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Recipes = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal">
      <div className="container mx-auto py-12 px-6 sm:px-8 lg:px-12">
        
        {/* Page Title */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Delicious Recipes for You</h1>
          <p className="text-lg text-gray-600 mt-2">Try these easy and tasty recipes to add some flavor to your meals!</p>
        </header>

        {/* Recipe 1: Avocado Toast with Eggs */}

        <div className="recipe-card bg-white shadow-lg rounded-lg mb-16"> 
        <div className="relative w-full h-64">
    <Image
      src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Spaghetti Aglio e Olio"
      layout="fill"      
      objectFit="cover"        
      className="rounded-t-lg"  
    />
  </div>


      
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Avocado Toast with Eggs</h2>
            <p className="text-lg text-gray-700 mb-6">A quick and nutritious breakfast option that&apos;s packed with healthy fats and protein.</p>

            {/* Ingredients */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>2 slices of whole-grain bread</li>
              <li>1 ripe avocado</li>
              <li>2 eggs</li>
              <li>Salt & pepper to taste</li>
              <li>Red pepper flakes (optional)</li>
            </ul>

            {/* Instructions */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h3>
            <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
              <li>Toast the bread slices until golden brown.</li>
              <li>While the bread is toasting, mash the avocado in a bowl and season with salt and pepper.</li>
              <li>In a pan, fry the eggs sunny-side up or to your preferred doneness.</li>
              <li>Spread the mashed avocado onto the toasted bread slices.</li>
              <li>Place one fried egg on each slice of avocado toast.</li>
              <li>Sprinkle with red pepper flakes for a little extra flavor (optional).</li>
            </ol>
          </div>
        </div>

        {/* Recipe 2: Spaghetti Aglio e Olio */}
        <div className="recipe-card bg-white shadow-lg rounded-lg mb-16">
       
  <div className="relative w-full h-64"> 
    <Image
      src="https://plus.unsplash.com/premium_photo-1705404737951-6b290b0892a7?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Spaghetti Aglio e Olio"
      layout="fill"       
      objectFit="cover"        
      className="rounded-t-lg"  
    />
  </div>


       
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Spaghetti Aglio e Olio</h2>
            <p className="text-lg text-gray-700 mb-6">A classic Italian pasta dish made with garlic, olive oil, and chili flakes  simple yet packed with flavor.</p>

            {/* Ingredients */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>200g spaghetti</li>
              <li>4 cloves garlic, thinly sliced</li>
              <li>1/4 cup olive oil</li>
              <li>1 tsp red pepper flakes</li>
              <li>Fresh parsley for garnish</li>
            </ul>

            {/* Instructions */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h3>
            <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
              <li>Boil the spaghetti in salted water according to the package instructions. Reserve 1 cup of pasta water before draining.</li>
              <li>In a large pan, heat olive oil over medium heat. Add garlic and cook until golden and fragrant, about 2 minutes.</li>
              <li>Add the red pepper flakes and a pinch of salt. Stir well.</li>
              <li>Add the drained spaghetti to the pan, along with a bit of the reserved pasta water. Toss to combine, letting the pasta absorb the garlic oil.</li>
              <li>Top with freshly chopped parsley and serve immediately.</li>
            </ol>
          </div>
        </div>

        {/* Recipe 3: Grilled Chicken with Lemon */}
       
        <div className="recipe-card bg-white shadow-lg rounded-lg mb-16">
  <div className="relative w-full h-64">
    <Image
      src="https://gimmesomegrilling.com/wp-content/uploads/2022/05/Grilled-Lemon-Chicken-Square.jpg"
      alt="Grilled Chicken with Lemon"
      layout="fill"            
      objectFit="cover"        
      className="rounded-t-lg"  
    />
  </div>


        
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Grilled Chicken with Lemon</h2>
            <p className="text-lg text-gray-700 mb-6">A healthy and flavorful dish made with tender grilled chicken, lemon, and herbs.</p>

            {/* Ingredients */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>4 chicken breasts</li>
              <li>1 lemon, juiced</li>
              <li>2 tbsp olive oil</li>
              <li>1 tbsp fresh thyme</li>
              <li>Salt and pepper to taste</li>
            </ul>

            {/* Instructions */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h3>
            <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
              <li>Preheat the grill to medium-high heat. Season chicken breasts with salt, pepper, and fresh thyme.</li>
              <li>Drizzle olive oil and lemon juice over the chicken.</li>
              <li>Grill the chicken for 6-8 minutes on each side or until fully cooked and golden brown.</li>
              <li>Remove from the grill and let the chicken rest for a few minutes before serving.</li>
              <li>Serve with a side of grilled vegetables or a fresh salad.</li>
            </ol>
          </div>
        </div>
        <Link href="/" 
  className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
  Back to Home
</Link>

      </div>
    </div>
  );
};

export default Recipes;

