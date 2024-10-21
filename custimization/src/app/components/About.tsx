import React from 'react';
import Image from 'next/image';

const Page = () => {
  return ( 
    <div className="max-w-[1320px] mx-auto md:py-[80] py-5 flex lg:pl-8 pt-10 flex-col sm:flex-row  items-center text-white min-h-[550px] bg-yellow ">
    <div className="basis-[30%] hover:scale-105 duration-300 border-green-500 ml-8">
      <Image src="/me2.jpg" alt="About Us" className="w-full rounded-full hover:shadow-2xl shadow-orange-500" width={300} height={300} />
    </div>
    <div className="basis-[60%] px-5 lg-mt-0 mt-10">
    <div className="relative lg:text-3xl text-xl text-center text-black font-bold">
  <h2 className="relative z-10 inline-block bg-green px-4 py-2 -skew-y-3 font-serif">
    About Us
  </h2>
</div>
      <p className="sm:text-lg ss:text-md md:text-1xl text-black lg:ml-12 ml-4 pt-4 md:pt-10 text-justify font-serif">
       &quot;Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
       With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries
       of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection 
       of technology and innovation together!&quot;
      </p>
    </div>
  </div>
  );
};

export default Page;
