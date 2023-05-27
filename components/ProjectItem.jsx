import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({title, backgroundImg, projectUrl, projectDetails}) => {
  return (
    <div>
      <div className='rounded-xl bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
        <div className='relative flex items-center justify-center h-80 w-full bg-gray-700 p-4 rounded-xl group hover:bg-gradient-to-r from-[#000000] to-[#1e1e1e]'>
          <Image className='rounded-xl ease-in duration-300 group-hover:opacity-10 contain' fill sizes='sm 100vw' src={backgroundImg} alt='/' priority/>
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-center'>{projectDetails}</p>
            <Link href={projectUrl} target='_blank' rel='noreferrer'>
              <div className='rounded-lg bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
              <p className='text-center py-3 rounded-lg bg-gray-700 font-bold text-lg cursor-pointer hover:scale-x-105 hover:scale-y-[1.1] ease-in duration-300'>
                More Info
              </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem