'use client'
// import React, { useState } from 'react';

const CommentsSection = () => {
 

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

      {/* Comments List */}
      <ul className="space-y-4">
       
            <button 
             
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
         
       
      </ul>

      {/* Add Comment Form */}
      <form className="mt-6 flex space-x-4">
        <input
          type="text"
          
         
          placeholder="Comment Here"
          className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;













