

import CategorySection from '@/components/CategorySection'
import ExploreProduct from '@/components/ExploreProduct'
import Hero from '@/components/Hero'
import MusicExperience from '@/components/MusicExperience'
import Newarrival from '@/components/Newarrival'
import SaleCard from '@/components/SaleCard'
import SellingProduct from '@/components/SellingProduct'
import Service from '@/components/Service'
import React from 'react'

const Home = () => {
  return (
    <div>

     <Hero/>
     {/* <Sale/> */}
     
      <SaleCard/>
     <CategorySection/>
     <SellingProduct/>
     <MusicExperience/>
     <ExploreProduct/>
     <Newarrival/>
     <Service/> 
    </div>
  )
}

export default Home