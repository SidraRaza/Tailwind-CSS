import React from 'react'
import About from '../components/About';
import Project from '../components/Projects';
const page = () => {
  return (
    <>
    <div className='bg-image h-[500px] sm:h-[550px] md:h-[600px] bg-cover bg-center bg-no-repeat relative'>
    <div className="flex justify-center items-center text-center pt-28">
      <div className="flex justify-center items-center text-center bg-yellow bg-opacity-40 border-2 border-dashed border-orange-500 w-full max-w-[900px] mx-4 sm:mx-6 md:mx-8 p-4 sm:p-6 md:p-8"> 
        <div className="relative">
          <h1 className="pb-6 font-[oswald] text-xl sm:text-3xl md:text-4xl font-bold text-black pt-4">
            Hello, I Am Sidra Raza
          </h1>
          <p className="text-14px font-serif sm:text-lg md:text-2xl text-black pt-2 text-justify">
            &quot;Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
            With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries
            of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection 
            of technology and innovation together!&quot;
          </p>
        </div>
      </div>
    </div>  
  </div>
  <About/>
  <Project/>
 </>
  )
}

export default page