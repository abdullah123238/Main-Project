import React from 'react'
import { Hero } from './Components/Hero'
import { Testimonials } from './Components/Testimonials'
import { Faq } from './Components/faq'
import { useTitle } from '../../Hooks/useTitle'
import { FeaturedProducts } from './components/FeaturedProducts'

export const HomePage = () => {
    useTitle("Access Latest Computer Science eBooks")
  return (
    <main>
        
        <Hero/>
        <FeaturedProducts/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}


