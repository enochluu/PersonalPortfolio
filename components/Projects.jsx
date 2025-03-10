import React from 'react';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import tripcollabImg from '../public/assets/projects/tripcollab.png';
import crowdweaveImg from '../public/assets/projects/crowdweave.png';
import eventfulImg from '../public/assets/projects/eventful.png';
import webportfolioImg from '../public/assets/projects/webportfolio.png';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#915eff]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem 
            title='TripCollab'
            backgroundImg={tripcollabImg}
            projectUrl='https://github.com/enochluu/TripCollab'
            projectDetails='NextJS, Python (Flask), PostgreSQL, Redis, Postman, Docker'
          />
          <ProjectItem 
            title='CrowdWeave'
            backgroundImg={crowdweaveImg}
            projectUrl='https://github.com/enochluu/CrowdWeave'
            projectDetails='JavaScript, Python (Flask), PostgreSQL, NGINX, Jenkins'
          />
          <ProjectItem 
            title='EVENTful'
            backgroundImg={eventfulImg}
            projectUrl='https://github.com/enochluu?tab=repositories'
            projectDetails='ReactJS, Python (Flask), MySQL'
          />
          <ProjectItem 
            title='Web Portfolio'
            backgroundImg={webportfolioImg}
            projectUrl='https://github.com/enochluu/PersonalPortfolio'
            projectDetails='NextJS, Tailwind CSS'
          />
        </div>
      </div>
      <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
              <div className='rounded-full bg-gray-800 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp size={20}/>
              </div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Projects