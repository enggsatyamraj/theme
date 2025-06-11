"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import FooterTwo from '../componets/Footer/footerTwo'
import Switcher from '../componets/switcher'
import CookieModal from '../componets/cookieModal'
import ClientsOne from '../componets/clientsOne'

import {Lightbox} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen} from "yet-another-react-lightbox/plugins";


import * as Icon from 'react-feather';
import {MdKeyboardArrowRight} from "react-icons/md"
import { FaArrowRight } from 'react-icons/fa'

import { gymServices,blogData } from '../Data/data';

import { exersiceData,gymImage,gymTeam } from '../Data/dataThree'

interface Services{
    iconImage: string;
    image: string;
    title: string;
    desc: string;
}

interface BlogData{
    id: number;
    Image: string;
    title: string;
    desc: string;
    date: string;
}

interface ExersiceData{
    dataGroup: string;
    image: string;
    name: string;
    time: string;
}

interface TeamData{
    image: string;
    name: string;
    title: string;
}

export default function Page(){
    let [selectedGroup, setSelectedGroup] = useState<string>('all');
    const [isOpen, setOpen] = useState<boolean | undefined>(false)
    let [lightBox, setLightbox] = useState<boolean>(false);
    let [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('dark');
        }
      }, []);

    function filterItems(e: React.MouseEvent<HTMLLIElement, MouseEvent>, group: string): void {
        let items = document.querySelectorAll<HTMLElement>('.picture-item-gym');

        setSelectedGroup(group);

        items.forEach((item) => {
            let dataGroups = item.getAttribute('data-groups');
            if (dataGroups) {
                let groups: string[] = JSON.parse(dataGroups);

                if (group === 'all' || groups.includes(group)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }
   
    let handleImageClick = (index:number) => {
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    let currentImage = gymImage.map((img) => ({ src: img }))
 return(
    <>
    <Navbar navClass="nav-light" navJustify={undefined}/>

    <section className="flex md:h-screen py-36 items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/gym/bg1.jpg')"}}>
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Build Your Body Strong</h3>

                <p className="text-slate-300 text-lg max-w-xl mx-auto">Push your fitness further with our mix of facilities and We will support you with advice on new and better ways to train.</p>

                <div className="mt-8">
                    <Link href="#" onClick={()=>setOpen(!isOpen)} data-type="youtube" data-id="S_CGed6E610" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox p-1 ps-4">3:07 Min video <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full ms-2"><i className="mdi mdi-play"></i></span></Link>
                </div>
            </div>
        </div>
    </section>
    {isOpen && 
        <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-1 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-1 md:p-1 space-y-4">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                    </div>
                </div>
            </div>
        </div>
    }


    <section className="relative md:py-24 py-16">

        <div className="container relative">
            <div className="grid grid-cols-1 justify-center">
                <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                        {gymServices.map((item:Services,index:number)=>{
                            return(
                            <div key={index} className="group relative overflow-hidden p-6 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out border-t-8 border-indigo-600/50">
                                <Image src={item.iconImage} width={64} height={64} className="w-16 h-16 mx-auto" alt="" />
    
                                <div className="content mt-7">
                                    <h2 className="title text-xl font-semibold">{item.title}</h2>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
    
                                <div className="hidden group-hover:block">
                                    <div className="absolute inset-0">
                                        <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                                    </div>
    
                                    <div className="absolute bottom-0 start-0 end-0 mb-6">
                                        <Link href="#" className="text-white text-xl font-bold">{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-5">
                    <div className="relative">
                        <div className="pe-12">
                            <Image src="/images/gym/about01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                        </div>

                        <div className="absolute bottom-16 end-0">
                            <Image src="/images/gym/about02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-md !w-48 h-48" alt="" />
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" scroll={false} onClick={()=>setOpen(!isOpen)} data-type="youtube" data-id="S_CGed6E610" className="lightbox size-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-4">
                        <h5 className="font-semibold text-base text-indigo-600 mb-2">Gym & Fitness</h5>
                        <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Introducing Techwind, <br /> A Fitness Center</h4>
                        <p className="text-slate-400 max-w-xl">Push your fitness further with our mix of facilities and We will support you with advice on new and better ways to train.</p>
                        <p className="text-slate-400 max-w-xl mt-3">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        <div className="mt-6">
                            <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Read More<MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h5 className="font-semibold text-base text-indigo-600 mb-2">Gallery</h5>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Take a Sneak Peek Inside</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and We will support you with advice on new and better ways to train.</p>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-2 justify-center mx-auto mt-8">
                {
                    gymImage.map((data:string,index:number) => {
                        return (

                            <div className="group relative block overflow-hidden transition-all duration-500" key={index} onClick={() => handleImageClick(index)} >
                                <Link href="#" onClick={() => handleImageClick(index)}  className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                    <Image src={data} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="transition-all duration-500 group-hover:scale-105" alt="Gym Images" />
                                </Link>
                            </div>
                        )
                    })
                }
                {lightBox && (
                    <Lightbox
                        open={lightBox}
                        close={() => setLightbox(false)}
                        index={currentImageIndex}
                        slides={currentImage}
                        plugins={[Fullscreen]} // Optional plugins
                    />
                )}

            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h5 className="font-semibold text-base text-indigo-600 mb-2">Timetable</h5>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Gym Schedule</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and We will support you with advice on new and better ways to train.</p>
            </div>

            <div className="grid grid-cols-1 items-center mt-8">
                <div className="filters-group-wrap text-center">
                    <div className="filters-group">
                        <ul className="mb-0 list-none container-filter filter-options">
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'all' ? 'active' : ''}`} 
                            data-group="all"
                            onClick={(e) => filterItems(e,'all')}>All</li>
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'monday' ? 'active' : ''}`} data-group="monday" onClick={(e) => filterItems(e,'monday')}>Monday</li>
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'tuesday' ? 'active' : ''}`} data-group="tuesday" onClick={(e) => filterItems(e,'tuesday')}>Tuesday</li>
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'wednesday' ? 'active' : ''}`} data-group="wednesday" onClick={(e) => filterItems(e,'wednesday')}>Wednesday</li>
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'thursday' ? 'active' : ''}`} data-group="thursday" onClick={(e) => filterItems(e,'thursday')}>Thursday</li>
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'friday' ? 'active' : ''}`} data-group="friday" onClick={(e) => filterItems(e,'friday')}>Friday</li>
                            <li className={`inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 ${selectedGroup === 'saturday' ? 'active' : ''}`} data-group="saturday" onClick={(e) => filterItems(e,'saturday')}>Saturday</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="grid" className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 mt-2 gap-[27px]">
                {
                    exersiceData.map((data:ExersiceData,index:number) => {
                        return (
                            <div className="picture-item-gym p-2" data-groups={data.dataGroup} key={index}>
                                <div className="text-center p-6 shadow-sm dark:shadow-gray-800 rounded-md">
                                    <Image src={data.image} width={64} height={64} className="size-16 mx-auto" alt="" />

                                    <div className="content mt-6">
                                        <h5 className="font-semibold text-lg">{data.name}</h5>
                                        <small className="text-slate-400 mb-0">{data.time}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h5 className="font-semibold text-base text-indigo-600 mb-2">Team</h5>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Gym Trainer</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and We will support you with advice on new and better ways to train.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {gymTeam.map((item:TeamData,index:number)=>{
                    return(
                        <div className="group relative rounded-md overflow-hidden shadow-sm text-center" key={index}>
                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black transition duration-300 ease-in"></div>

                        <div className="content absolute bottom-0 group-hover:bottom-6 start-0 end-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                            <h4 className="text-lg font-medium text-white">{item.name}</h4>
                            <p className="text-white/50 relative -bottom-5 group-hover:bottom-0 transition-all duration-500">{item.title}</p>

                            <ul className="list-none relative -bottom-12 group-hover:bottom-0 transition-all duration-500 mt-4 flex justify-center space-x-1">
                                <li><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                <li><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                <li><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><Icon.Twitter className="size-4"></Icon.Twitter></Link></li>
                                <li><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                            </ul>
                        </div>
                    </div>

                    )
                })}
            </div>
        </div>
    </section>
    
    <section className="py-20 w-full table relative bg-center bg-no-repeat bg-fixed bg-cover" style={{backgroundImage:"url('/images/gym/cta.jpg')"}}>
        <div className="absolute inset-0 bg-slate-900/75"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Get Membership for Speak Fitness</h3>

                <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                <div className="mt-6">
                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Buy Membership</Link>
                </div>

                <Link href="#" onClick={()=>setOpen(!isOpen)} scroll={false} className="lightbox size-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link>
            </div>
        </div>
    </section>

    <section className="relative md:py-24 py-16">
        <ClientsOne title={true} clients="Happy Clients"/>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h5 className="font-semibold text-base text-indigo-600 mb-2">Blogs</h5>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Blogs or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and We will support you with advice on new and better ways to train.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                {blogData.slice(6,9).map((item:BlogData,index:number)=>{
                    return(
                        <div className="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden" key={index}>
                        <Image src={item.Image} height={0} width={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />

                        <div className="content p-6">
                            <Link href={`/blog-detail/${item.id}`} className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                            <p className="text-slate-400 mt-3">{item.desc}</p>

                            <div className="mt-4">
                                <Link href={`/blog-detail/${item.id}`} className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
    <Switcher/>
    <FooterTwo/>
    <CookieModal/>
    </>
 )
}