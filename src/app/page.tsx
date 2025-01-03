import React from 'react'


 import Footer from './components/footer'
import CommentsSection from './components/comment/page'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import MiddlePage from './components/middlePage/page'

const page = () => {
  return (
    <div>
     
     <Navbar/>
     <Hero/>
     <MiddlePage/>


     <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Comments Section</h1>
       
        <CommentsSection/>
      </div> 
      
     <Footer/>
    </div>
  )
}

export default page
