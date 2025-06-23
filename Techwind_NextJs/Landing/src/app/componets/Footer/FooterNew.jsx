"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Icon from 'react-feather';

import { FaRegEnvelope, FaDribbble, FaLinkedin, FaFacebookF, FaInstagram, FaTwitter, FaRegFile, FaBehance } from 'react-icons/fa';
import { PiShoppingCart } from "react-icons/pi"
import { MdKeyboardArrowRight, MdAnalytics, MdDashboard, MdIntegrationInstructions } from "react-icons/md"
import { BiSupport, BiBook, BiChart } from "react-icons/bi"
import { HiOutlineDocumentText, HiOutlineUsers } from "react-icons/hi"

export default function Footer() {
    const footerResources = [
        {
            liClass: '',
            route: '/help-center',
            title: 'Help Center',
            icon: <BiSupport className="text-sm me-2" />
        },
        {
            liClass: 'mt-[10px]',
            route: '/api-docs',
            title: 'API Documentation',
            icon: <HiOutlineDocumentText className="text-sm me-2" />
        },
        {
            route: '/tutorials',
            title: 'Video Tutorials',
            liClass: 'mt-[10px]',
            icon: <BiBook className="text-sm me-2" />
        },
        {
            route: '/integrations',
            title: 'Integrations',
            liClass: 'mt-[10px]',
            icon: <MdIntegrationInstructions className="text-sm me-2" />
        },
        {
            route: '/status',
            title: 'System Status',
            liClass: 'mt-[10px]',
            icon: <BiChart className="text-sm me-2" />
        }
    ];

    const footerSolutions = [
        {
            liClass: '',
            route: '/analytics-dashboard',
            title: 'Analytics Dashboard',
            icon: <MdAnalytics className="text-sm me-2" />
        },
        {
            liClass: 'mt-[10px]',
            route: '/tracking-solutions',
            title: 'Tracking Solutions',
            icon: <MdDashboard className="text-sm me-2" />
        },
        {
            route: '/team-collaboration',
            title: 'Team Collaboration',
            liClass: 'mt-[10px]',
            icon: <HiOutlineUsers className="text-sm me-2" />
        },
        {
            route: '/custom-reports',
            title: 'Custom Reports',
            liClass: 'mt-[10px]',
            icon: <HiOutlineDocumentText className="text-sm me-2" />
        }
    ];

    const footerCompany = [
        {
            liClass: '',
            route: '/about',
            title: 'About TrackOG',
        },
        {
            liClass: 'mt-[10px]',
            route: '/careers',
            title: 'Careers',
        },
        {
            route: '/contact',
            title: 'Contact Us',
            liClass: 'mt-[10px]',
        },
        {
            route: '/press',
            title: 'Press Kit',
            liClass: 'mt-[10px]',
        },
        {
            route: '/partners',
            title: 'Partners',
            liClass: 'mt-[10px]',
        },
        {
            route: '/blog',
            title: 'Blog',
            liClass: 'mt-[10px]',
        }
    ];

    const footerLegal = [
        {
            liClass: '',
            route: '/privacy-policy',
            title: 'Privacy Policy',
        },
        {
            liClass: 'mt-[10px]',
            route: '/terms-of-service',
            title: 'Terms of Service',
        },
        {
            route: '/data-processing',
            title: 'Data Processing',
            liClass: 'mt-[10px]',
        },
        {
            route: '/security',
            title: 'Security',
            liClass: 'mt-[10px]',
        }
    ];

    return (
        <div>
            <footer className="relative bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700">
                <div className="container relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-1 gap-[30px]">
                                    <div className="lg:col-span-4 md:col-span-6">
                                        <Link href="/#" className="text-[22px] focus:outline-none">
                                            <span>TrackOG</span>
                                        </Link>
                                        <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">Empowering businesses with intelligent tracking and analytics solutions. Transform your data into actionable insights.</p>

                                        <div className="mt-8">
                                            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-4">Connect With Us</h6>
                                            <ul className="list-none flex gap-3">
                                                <li><Link href="https://www.linkedin.com/company/trackOG" target="_blank" className="size-9 inline-flex items-center justify-center duration-300 text-base text-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white rounded-lg hover:border-blue-200 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-600 hover:shadow-sm"><FaLinkedin className='text-sm' /></Link></li>
                                                <li><Link href="https://twitter.com/trackOG" target="_blank" className="size-9 inline-flex items-center justify-center duration-300 text-base text-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white rounded-lg hover:border-blue-200 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-600 hover:shadow-sm"><FaTwitter className='text-sm' /></Link></li>
                                                <li><Link href="https://www.instagram.com/trackOG/" target="_blank" className="size-9 inline-flex items-center justify-center duration-300 text-base text-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-white rounded-lg hover:border-pink-200 dark:hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-600 hover:shadow-sm"><FaInstagram className='text-sm' /></Link></li>
                                                <li><Link href="mailto:hello@trackOG.com" className="size-9 inline-flex items-center justify-center duration-300 text-base text-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white rounded-lg hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-sm"><FaRegEnvelope className="text-sm" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium mb-4">Solutions</h5>
                                        <ul className="list-none footer-list">
                                            {footerSolutions.map((data, index) => (
                                                <li key={index} className={data.liClass}>
                                                    <Link href={data.route} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 duration-200 ease-in-out flex items-center group">
                                                        <span className="text-gray-400 dark:text-gray-500 me-2">{data.icon}</span>
                                                        <span className="text-sm">{data.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium mb-4">Resources</h5>
                                        <ul className="list-none footer-list">
                                            {footerResources.map((data, index) => (
                                                <li key={index} className={data.liClass}>
                                                    <Link href={data.route} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 duration-200 ease-in-out flex items-center group">
                                                        <span className="text-gray-400 dark:text-gray-500 me-2">{data.icon}</span>
                                                        <span className="text-sm">{data.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium mb-4">Company</h5>
                                        <ul className="list-none footer-list">
                                            {footerCompany.map((data, index) => (
                                                <li key={index} className={data.liClass}>
                                                    <Link href={data.route} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 duration-200 ease-in-out flex items-center text-sm">
                                                        <span>{data.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium mb-4">Legal</h5>
                                        <ul className="list-none footer-list">
                                            {footerLegal.map((data, index) => (
                                                <li key={index} className={data.liClass}>
                                                    <Link href={data.route} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 duration-200 ease-in-out flex items-center text-sm">
                                                        <span>{data.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-6 px-0 border-t border-gray-200 dark:border-gray-700">
                    <div className="container relative">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="text-center md:text-start">
                                <p className="mb-0 text-gray-500 dark:text-gray-400 text-sm">
                                    © {new Date().getFullYear()} TrackOG. All rights reserved.
                                </p>
                            </div>

                            <div className="text-center md:text-end">
                                <div className="flex justify-center md:justify-end items-center gap-4">
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">Trusted by 500+ teams</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-green-600 dark:text-green-400 text-sm">All systems operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}