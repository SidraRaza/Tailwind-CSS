import React from 'react'
import About from './components/About';
import Project from './components/Projects';

const page = () => {
  return (
    <>
<<<<<<< HEAD
  
    <div className='bg-image h-[600px] sm:h-[550px] md:h-[600px] bg-cover bg-center bg-no-repeat relative'>
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
=======
    <div className="bg-green p-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between">

        <h1 className="text-black text-3xl font-bold lg:text-3xl font-['Geist_Sans']">
          Portfolio
        </h1>


        <div className="lg:mt-0 flex lg:space-x-4 space-x-2 relative">
      
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

     
          <label
            htmlFor="menu-toggle"
            className="text-red-500 text-3xl cursor-pointer absolute right-6 lg:-top-5  md:-top-5 -top-10 bottom-2"
          >
            &#9776; 
          </label>

       
          <ul className=" flex-col list-none lg:bg-transparent w-full bg-yellow text-black absolute right-0 top-[70px] sm:w-[600px] md:w[800px] lg:w-[1200px] mx-auto p-1 lg:p-0 rounded-md lg:rounded-none  hidden peer-checked:flex">
  <li className="pl-2 lg:pl-0">
    <Link href="/home" className="block text-black px-2 lg:px-4 lg:py-10 py-6 lg:hover:bg-yellowLight hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg">
      Home
    </Link>
  </li>
  <li className="pl-2 lg:pl-0">
    <Link href="/About" className="block text-black px-2 lg:px-4 lg:py-10 py-6 lg:hover:bg-yellowLight hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg">
      About
    </Link>
  </li>
  <li className="pl-2 lg:pl-0">
    <Link href="/Project" className="block text-black px-2 lg:px-4 lg:py-10 py-6 lg:hover:bg-yellowLight hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg">
      Projects
    </Link>
  </li>
</ul>

        </div>
      </div>
    </div>

    

    <div className='bg-yellow lg:h-[550px] h-[650px]'>

>>>>>>> 1765f965ac8d328848be2af45cec8fca8af6b9ef

export default page