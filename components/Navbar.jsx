import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import logo from '../public/assets/icons/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('rgb(5, 8, 22, 0.6)');
  const [linkColor, setLinkColor] = useState('#ffffff');
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/potato'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('rgb(5, 8, 22, 0.6)')
      setLinkColor('#ffffff')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className='fixed w-full h-20 z-[100]'
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <div className='bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
            <Link href='/'>
              <Image 
                src={logo}
                alt='logo' 
                width='40'
                height='40'
                className='hover:scale-110 ease-in duration-300'
              />
            </Link>
          </div>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }}className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div 
        className={nav ? 'md:hidden fixed right-0 top-0 w-full h-screen ease-in duration-500 bg-black/70' : ''}
      >
        <div 
          className={
            nav 
              ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#050816] p-10 ease-in duration-500' 
              : 'fixed right-[-200%] top-0 ease-in duration-500'
          } 
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div className='bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                <Link href='/'>
                  <Image 
                    src={logo}
                    alt='logo' 
                    width='40'
                    height='40'
                    className='hover:scale-110 ease-in duration-300'
                  />
                </Link>
              </div>
              <div onClick={handleNav} className='p-1 cursor-pointer'>
                <TfiClose size={20} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Welcome to my portfolio!</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul>
              <Link href='/'>
                <li onClick={() => setNav(false)}className='py-4 text-sm hover:border-b'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)}className='py-4 text-sm hover:border-b'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)}className='py-4 text-sm hover:border-b'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)}className='py-4 text-sm hover:border-b'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)}className='py-4 text-sm hover:border-b'>Contact</li>
              </Link>
            </ul>
            <div className='absolute bottom-0 left-0 w-full'>
              <div className='pt-40 px-8'>
                <p className='uppercase tracking-widest text-[#915eff]'>
                  Let's Connect
                </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <a
                    href='https://www.linkedin.com/in/enochluu/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='items-center justify-center'>
                      <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                        <div className='rounded-full bg-gray-800 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
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
                        <div className='rounded-full bg-gray-800 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                          <FaGithub />
                        </div>
                      </div>
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div className='items-center justify-center' onClick={() => setNav(!nav)}>
                      <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                        <div className='rounded-full bg-gray-800 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                          <AiOutlineMail />
                        </div>
                      </div>
                    </div>
                    </Link>
                  <a
                    href='Resume - Enoch Luu.pdf'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='items-center justify-center' onClick={() => setNav(!nav)}>
                      <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                        <div className='rounded-full bg-gray-800 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                          <BsFillPersonLinesFill />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;