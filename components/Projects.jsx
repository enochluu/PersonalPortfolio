import React from 'react';
import ProjectItem from './ProjectItem';
import tripcollabImg from '../public/assets/projects/tripcollab.png';
import webportfolioImg from '../public/assets/projects/webportfolio.png';

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
            projectDetails='Chakra UI'
          />
          <ProjectItem 
            title='Web Portfolio'
            backgroundImg={webportfolioImg}
            projectUrl='https://github.com/enochluu/PersonalPortfolio'
            projectDetails='NextJS, Tailwind CSS'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects