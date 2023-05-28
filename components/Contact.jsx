import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import portrait from '../public/assets/portraits/contactphoto.jpg';

const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  return new Promise((resolve, reject) => {
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        resolve();
      })
      .catch((error) => {
        console.log(error.text);
        reject();
      });
  });
};

const handleFormSubmit = (e) => {
  toast.promise(sendEmail(e), {
    pending: 'Sending email...',
    success: "Email sent successfully!",
    error: 'Email failed to send!',
  })
    .then(() => {
      console.log('Email sent successfully!');
      form.current.reset();
    })
    .catch(() => {
      console.log('Email failed to send!');
    });
};
  
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#915eff]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>

          <div className='col-span-3 lg:col-span-2 w-full h-full bg-gray-900 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-xl hover:scale-[1.03] ease-in duration-300' src={portrait} alt='/'/>
              </div>
              <div>
                <h2 className='py-4'>Enoch Luu</h2>
                <p>Software Engineer</p>
                <p className='py-4'>I am available for full-time positions. Contact me and let's talk.</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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
                  <Link href='/#contact'>
                    <div className='items-center justify-center'>
                      <div className='rounded-full bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                        <div className='rounded-full bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <AiOutlineMail />
                        </div>
                      </div>
                    </div>
                    </Link>
                    <a
                      href='Resume-Enoch-Luu.pdf'
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
          <div className='col-span-3 w-full h-auto bg-gray-900 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={form} onSubmit={handleFormSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input 
                      className='border-none rounded-lg bg-gray-800 p-3 flex focus:outline-none'
                      name='name'
                      type='text'
                      required
                      style={{borderColor: 'transparent', outlineColor: '#915eff'}}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input 
                      className='rounded-lg bg-gray-800 p-3 flex focus:outline-none'
                      name='number'
                      type='tel'
                      required
                      style={{borderColor: 'transparent', outlineColor: '#915eff'}}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input 
                    className='border-none rounded-lg bg-gray-800 p-3 flex focus:outline-none'
                    name='email'
                    type='email'
                    required
                    style={{borderColor: 'transparent', outlineColor: '#915eff'}} 
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input 
                    className='border-none rounded-lg bg-gray-800 p-3 flex focus:outline-none'
                    name='subject'
                    type='text'
                    required
                    style={{borderColor: 'transparent', outlineColor: '#915eff'}} 
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea 
                    className='border-none rounded-lg bg-gray-800 p-3 focus:outline-none'
                    name='message'
                    rows='10'
                    required
                    style={{borderColor: 'transparent', outlineColor: '#915eff'}}
                  />
                </div>
                <div className='rounded-xl mt-7 bg-gradient-to-r from-[#00ffa9] via-[#915eff] to-[#e404ff] p-0.5'>
                  <button 
                    className='w-full h-full p-6 group hover:scale-y-[1.1] hover:scale-x-[1.015] ease-in duration-300'
                  >
                    <input
                      type='submit'
                      value='Send Message'
                      className='uppercase group-hover:scale-x-110 group-hover:scale-y-105 ease-in duration-300'
                    />
                  </button>
                </div>
              </form>
            </div>
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
    </div>
  )
}

export default Contact