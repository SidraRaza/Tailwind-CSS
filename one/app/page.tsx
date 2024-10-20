

import Footer from '@/components/Footer'
import HeaderMain from '@/components/HeaderMain'
import HeaderTop from '@/components/HeaderTop'
import Hero from '@/components/Hero (2)'
import Navbar from '@/components/Navbar'
import NewProducts from '@/components/NewProducts'
import React from 'react'

export default async function Index() {
  return (
    <>
    
         <HeaderTop/>
         <HeaderMain/>
         <Hero/>
          <NewProducts/>
          <br />
          
      <Footer/>
    </>
  );
}
