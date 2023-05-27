import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import portrait from '../public/assets/portraits/aboutphoto.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#915eff]'>Introduction</p>
          <h2 className='py-4'>Overview</h2>
          <p className='py-2'>Greetings,</p>
          <p className='py-2'>
            I'm Enoch Luu - a Computer Science graduate from UNSW Sydney looking for opportunities
            that will allow me to grow and learn new skills while pushing the limits of my current
            knowledge.
          </p>
          <p className='py-2'>
            My goal is to apply the concepts and abilities I have learned during my degree
            in a real-world environment within the industry. In doing so, I hope to support 
            initiatives and projects that improve the lives of people through creative
            and significant technical developments, leveraging technology as a vehicle for good change.
            I am excited about the idea of utilising my expertise to make a real impact in the world.
          </p>
          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer'>Check out some of my latest projects!</p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center mt-4 bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
          <div className='w-full h-auto m-auto rounded-xl hover:scale-[1.02] ease-in duration-300'>
            <Image className='rounded-xl' src={portrait} alt='/'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About