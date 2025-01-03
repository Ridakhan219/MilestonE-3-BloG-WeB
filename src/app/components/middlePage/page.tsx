import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MiddlePage = () => {
  return (
    <div>
      {/* Recipe Highlights Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Featured 5 Ingredient Recipes
          </h3>
          <p className="text-lg text-gray-600 mb-12">
            Looking for simple, delicious meals to whip up in a jiffy? Check out our top rated recipes that are perfect for any occasion. All of these are 5 ingredient wonders!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="https://images.unsplash.com/photo-1642689690565-bf0afb7eb41e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Recipe 1" 
               width={500}
               height={100}  
               className=" object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Avocado Toast with Eggs</h4>
              <p className="text-gray-700 mb-4">A simple breakfast with just 5 ingredients, perfect for busy mornings.</p>
              <Link href="/recipes" className="text-blue-600 hover:text-blue-800">Try this recipe</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="https://images.unsplash.com/photo-1673442635965-34f1b36d8944?q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Recipe 2"  width={500} height={100} className=" object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Spaghetti Aglio e Olio</h4>
              <p className="text-gray-700 mb-4">A classic Italian pasta dish that&apos;s quick, tasty, and uses just 5 ingredients.</p>
              <Link href="/recipes" className="text-blue-600 hover:text-blue-800">Try this recipe</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1469&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Recipe 3"  width={500} height={100}
              className=" object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Grilled Chicken with Lemon</h4>
              <p className="text-gray-700 mb-4">A healthy, delicious chicken dish with just five ingredients. Perfect for lunch or dinner.</p>
              <Link href="./recipes" className="text-blue-600 hover:text-blue-800">Try this recipe</Link>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Started Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            How to Get Started with 5-Ingredient Recipes
          </h3>
          <p className="text-lg text-gray-600 mb-12">
            Don&apos;t let the simplicity fool you—these recipes are packed with flavor! Here&apos;s a quick guide to help you get started in the kitchen with minimal fuss.
          </p>

          <div className="space-y-12">
            {/* Step 1: Gather Your Ingredients */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 md:space-y-0">
              <div className="md:w-1/2">
                <Image src="https://images.pexels.com/photos/5569543/pexels-photo-5569543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gather Ingredients"
                height={100}
                width={800}
                className="rounded-lg shadow-lg"/>
              </div>
              <div className="md:w-1/2 text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Step 1: Gather Your Ingredients</h4>
                <div className="text-gray-700">
                  <p>Before you start cooking, it&apos;s helpful to stock up on some pantry staples that will give you the flexibility to make a variety of meals. Here are the basics to get you started:</p>
                  <ul>
                    <li><strong>1: Olive Oil</strong>  A must-have for sautéing, roasting, or drizzling over salads. Extra virgin olive oil adds great flavor to almost any dish.</li>
                    <li><strong>2: Garlic</strong>  Fresh garlic is a kitchen essential that adds depth to sauces, soups, and stir-fries. If fresh garlic isn&apos;t available, garlic powder or minced garlic paste can serve as a quick alternative.</li>
                    <li><strong>3: Fresh Herbs</strong>  Having a few fresh herbs like basil, parsley, rosemary, or thyme can instantly elevate any dish. Use them in pasta sauces, salads, soups, or roasted meats and vegetables.</li>
                    <li><strong>4: Pasta</strong>  Keep a variety of pasta shapes like spaghetti, penne, or fusilli. Pasta is a quick and easy base for meals, whether you&apos;re making a classic tomato sauce or a creamy alfredo sauce.</li>
                    <li><strong>5: Protein Options</strong>  Stock chicken, tofu, or canned beans for easy sources of protein. These can be used in stir-fries, tacos, salads, or served as a main dish.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: Pick a Recipe */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 md:space-y-0">
              <div className="md:w-1/2 text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Step 2: Pick a Recipe</h4>
                <div className="text-gray-700">
                  <p>Now that you have your ingredients ready, it&apos;s time to pick a recipe that suits your current craving and dietary needs. Whether you're in the mood for something quick and comforting or light and fresh, here are a few ideas to get you started:</p>
                  <ul>
                    <li><strong>1: Quick Pasta Dish</strong>  Perfect if you&apos;re craving something warm and comforting. You can create a simple pasta with olive oil, garlic, and parmesan, or go for something heartier like a bolognese or pesto pasta.</li>
                    <li><strong>2: Avocado Toast</strong>  A refreshing and healthy option, perfect for breakfast or a light snack. Simply mash avocado, season with salt, pepper, and lemon juice, then spread on your favorite toast.</li>
                    <li><strong>3: Stir-Fry</strong>  A great way to use up vegetables and protein like chicken or tofu. Stir-fries are quick, customizable, and full of flavor. Serve it with rice or noodles for a filling meal.</li>
                    <li><strong>4: Soup or Stew</strong>  If you&apos;re in the mood for something hearty and comforting, a simple soup or stew is the way to go. Use your canned tomatoes, garlic, and herbs to create a flavorful base.</li>
                    <li><strong>5: Salad Bowl</strong>  A light and nutritious meal. Combine fresh veggies, protein (like beans or chicken), and a simple dressing to create a balanced, satisfying salad.</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg" alt="Pick Recipe"
                height={100}
                width={800}
                 className="rounded-lg shadow-lg"/>
              </div>
            </div>

            {/* Step 3: Prep and Cook */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 md:space-y-0">
              <div className="md:w-1/2">
                <Image src="https://plus.unsplash.com/premium_photo-1679518569530-a2d8374b0f4b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Prep and Cook" 

height={100}
width={800}

                className="rounded-lg shadow-lg"/>
              </div>
              <div className="md:w-1/2 text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Step 3: Prep and Cook</h4>
                <p className="text-gray-700">
                  Prepping your ingredients ahead of time is key to a smooth and efficient cooking experience. By taking a few minutes to slice, chop, and measure everything before you begin, here&apos;s how you can prep and cook like a pro:
                </p>
                <ul>
                  <li><strong>1: Slice & Chop</strong>  Prepare all your vegetables, herbs, and proteins by slicing, dicing, or chopping them as needed. Having everything prepped will help you avoid scrambling during the cooking process.</li>
                  <li><strong>2: Measure Ingredients</strong>  For better accuracy and to avoid running back and forth to the pantry, measure out your ingredients beforehand. This ensures you have everything you need right at your fingertips.</li>
                  <li><strong>3: Preheat the Oven or Pan</strong>  Whether you&apos;re baking, sautéing, or grilling, preheating your cooking surface ensures even cooking and saves time in the long run. Set your oven to the desired temperature or heat up your pan while you prep the ingredients.</li>
                  <li><strong>4: Follow Recipe Instructions</strong>  Once your ingredients are prepped, follow your chosen recipe step by step. Don&apos;t rush, and give yourself time to enjoy the cooking process. This is the fun part!</li>
                  <li><strong>5: Stay Organized</strong>  Keep your workspace tidy and organized while you cook. This will help you stay on top of things and prevent any kitchen chaos. Clean as you go if needed!</li>
                </ul>
              </div>
            </div>

            {/* Step 4: Enjoy */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 md:space-y-0">
              <div className="md:w-1/2 text-left">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Step 4: Enjoy!</h4>
                <p className="text-gray-700">
                  After all the hard work of gathering ingredients, picking a recipe, and prepping your meal, it&apos;s finally time to sit down and enjoy your delicious creation. This is the reward for all your effort!
                </p>
                <ul>
                  <li><strong>1: Set the Table</strong>  Make your dining experience special by setting the table. Whether you&apos;re dining alone or with friends, a well-set table can make your meal feel more enjoyable.</li>
                  <li><strong>2: Take a Moment to Appreciate the Meal</strong>  Before diving in, take a moment to appreciate the colors, aromas, and flavors of your dish. You&apos;ve worked hard, and now it&apos;s time to savor the rewards.</li>
                  <li><strong>3: Dig In!</strong>  Now, the best part—eat! Enjoy every bite of your meal, knowing that you&apos;ve created something delicious and nourishing from scratch.</li>
                  <li><strong>4: Share with Loved Ones</strong>  If you&apos;ve prepared enough, share the joy by offering a plate to family or friends. Food tastes even better when shared with others.</li>
                  <li><strong>5: Relax and Savor</strong>  Take your time to eat, and don&apos;t rush. Allow yourself to relax and truly savor the flavors of the meal you&apos;ve just made.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Enjoy Your Meal" 
                height={100}
                width={800}
                className="rounded-lg shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
