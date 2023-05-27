import Image from 'next/image';
import React from 'react';

const Skills = () => {

  const images = [
    '/assets/skills/HTML.png',
    '/assets/skills/CSS.png',
    '/assets/skills/Javascript.svg',
    '/assets/skills/ReactJS.png',
    '/assets/skills/NodeJS.png',
    '/assets/skills/PostgreSQL.svg',
    '/assets/skills/Python.png',
    '/assets/skills/Java.png',
  ];
  

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#915eff]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {images.map((image, index) => {
            const fileName = image.substring(image.lastIndexOf('/') + 1, image.lastIndexOf('.'));
            return (
              <div key={index} className='rounded-xl bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
              <div className='p-6 bg-gray-800 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto w-12 h-12 relative'>
                    <Image className='contain' fill sizes='sm 100vw' src={image} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{fileName}</h3>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
        <p className='py-6 text-xl'>
          And much more...
        </p>
      </div>
    </div>
  )
}

export default Skills