import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4'>
            Hi, I'm <span className='text-[#915eff]'>Enoch</span>
          </h1>
          <h1 className='py-2'>
            A Software Engineer
          </h1>
          <p className='py-4 max-w-[70%] m-auto'>A Computer Science graduate from UNSW Sydney who has a passion for coding.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/enochluu/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='items-center justify-center'>
                <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                  <div className='rounded-full bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </a>
            <a
              href='https://github.com/enochluu?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <div className='items-center justify-center'>
                <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                  <div className='rounded-full bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </div>
              </div>
            </a>
            <Link href="mailto:enochluu9@gmail.com">
              <div className='items-center justify-center'>
                <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                  <div className='rounded-full bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
              </Link>
            <a
              href='Resume_EnochLuu.pdf'
              target='_blank'
              rel='noreferrer'
            >
              <div className='items-center justify-center'>
                <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                  <div className='rounded-full bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main