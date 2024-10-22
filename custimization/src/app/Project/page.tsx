import React from 'react'
import Project from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div>
      <Header/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default page