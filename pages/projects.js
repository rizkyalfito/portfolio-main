import {FiExternalLink, FiGithub} from 'react-icons/fi'
import Image from 'next/image'
import Head from 'next/head'

const projects = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
            <Head>
                <title>Projects | Rizky Alfito</title>
            </Head>
            <h1 className='font-bold text-3xl text-center'></h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Easter - Restaurant Catalog</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <Image src='/images/project-images/easter.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            Easter is a dynamic website built using Progressive Web Apps, 
                            built with vanilla js and using IndexedDB and workbox implementation. 
                            Using the Free API from coding and using fetching techniques in retrieving data from the API.
                            
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Javascript, HTML, CSS, IndexedDB, WorkBox, API, PWA
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div className='flex space-x-4'>
                                    <a href='https://github.com/rizkyalfito/easter' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                    <a href='https://easter-restaurant.vercel.app/' target='_blank' rel='noopner noreferrer'>
                                        <FiExternalLink size='30px'/>
                                    </a>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Soulution - Stress Checker</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-4 aspect-h-3'>
                            <Image src='/images/project-images/soulution.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            Solution is a website that measures stress levels using the Perceived Stress Scale method, applying JavaScript technology,
                            Progressive Web Apps. 
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Javascript, HTML, CSS, Express, PWA
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/rizkyalfito/soulution' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Holistic Education Craft</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-4 aspect-h-3'>
                            <Image src='/images/project-images/educraft.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            Holistic Education Craft is an innovative project designed to provide interactive learning modules for children. 
                            Built using Vite and React JS, this project ensures fast and efficient web application development. 
                            To guarantee security and user management, Holistic Education Craft integrates Firebase Authentication, 
                            simplifying the login process and protecting user data. With a focus on holistic education, this project aims to create a 
                            comprehensive and enjoyable learning environment that promotes the intellectual, emotional, and social development of children. 
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Javascript, ReactJS, Vite, Firebase
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4 flex-row'>
                                <div className='flex space-x-4'>
                                    <a href='https://github.com/rizkyalfito/HolisticEducationCraft' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                    <a href='https://holisticeducraft.vercel.app/' target='_blank' rel='noopner noreferrer'>
                                        <FiExternalLink size='30px'/>
                                    </a>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default projects
