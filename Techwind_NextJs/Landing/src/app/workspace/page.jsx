"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaCode, FaEye, FaCopy, FaCheck } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdDashboard, MdTimer, MdPerson, MdQuestionAnswer } from 'react-icons/md';
import { BsGrid, BsLayoutTextSidebar, BsCardText, BsChat, BsStars } from 'react-icons/bs';

// Import all components
import NewNavbar from '../componets/Navbar/new-navbar';
import FooterNew from '../componets/Footer/FooterNew';
import AccordionTwo from '../componets/accordianTwo';
import AccountTab from '../componets/accountTab';
import AnimatedAccordion from '../componets/AnimateAccordion';
import AvailableProject from '../componets/availaleProject';
import Blog from '../componets/blog';
import BlogComment from '../componets/blogComment';
import BlogSlider from '../componets/blogSlider';
import BlogTwo from '../componets/blogTwo';
import BlogUserDetail from '../componets/blogUserDetail';
import Clients from '../componets/client';
import ClientsOne from '../componets/clientsOne';
import ClientsThree from '../componets/clientsThree';
import ClientsTwo from '../componets/clientsTwo';
import CoachAbout from '../componets/coachAbout';
import CoachCounter from '../componets/coachCounter';
import Comingsoon from '../componets/comingsoon';
import CompanyLogo from '../componets/companyLogo';
import CookieModal from '../componets/cookieModal';
import CountDown from '../componets/countdown';

export default function WorkspacePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [copiedCode, setCopiedCode] = useState('');

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];
        htmlTag.classList.add('light');
    }, []);

    // Mock data for components that need it
    const accordionData = [
        { title: "What is affiliate marketing?", desc: "Affiliate marketing is a performance-based marketing strategy where businesses reward affiliates for each customer brought by their marketing efforts." },
        { title: "How do I get started?", desc: "Start by signing up for our platform, choosing your niche, and selecting affiliate programs that align with your audience." },
        { title: "What commission rates do you offer?", desc: "Our commission rates vary by program, ranging from 5% to 50% depending on the product category and performance tier." },
        { title: "How and when do I get paid?", desc: "Payments are processed monthly via PayPal, bank transfer, or cryptocurrency, with a minimum payout threshold of $100." },
        { title: "What tracking and analytics do you provide?", desc: "We provide real-time tracking, conversion analytics, click-through rates, and comprehensive performance reports." }
    ];

    const blogData = [
        {
            id: 1,
            Image: "/images/blog/01.jpg",
            title: "Top 10 Affiliate Marketing Strategies for 2024",
            desc: "Discover the most effective strategies to boost your affiliate marketing success in the coming year."
        },
        {
            id: 2,
            Image: "/images/blog/02.jpg",
            title: "How to Choose the Right Affiliate Programs",
            desc: "Learn the key factors to consider when selecting affiliate programs that align with your audience."
        },
        {
            id: 3,
            Image: "/images/blog/03.jpg",
            title: "Maximizing ROI with Performance Analytics",
            desc: "Understand how to use data analytics to optimize your campaigns and increase your return on investment."
        }
    ];

    const categories = [
        { id: 'all', name: 'All Components', icon: <BsGrid className="size-4" /> },
        { id: 'navigation', name: 'Navigation', icon: <MdDashboard className="size-4" /> },
        { id: 'content', name: 'Content', icon: <BsCardText className="size-4" /> },
        { id: 'interactive', name: 'Interactive', icon: <BsChat className="size-4" /> },
        { id: 'layout', name: 'Layout', icon: <BsLayoutTextSidebar className="size-4" /> },
        { id: 'testimonials', name: 'Testimonials', icon: <BsStars className="size-4" /> },
        { id: 'utils', name: 'Utilities', icon: <MdTimer className="size-4" /> }
    ];

    const components = [
        {
            id: 'accordion-two',
            name: 'Accordion Two',
            category: 'interactive',
            description: 'Basic accordion component for FAQ sections',
            component: <AccordionTwo />,
            props: 'None required - uses internal data'
        },
        {
            id: 'animated-accordion',
            name: 'Animated Accordion',
            category: 'interactive',
            description: 'Enhanced accordion with smooth animations',
            component: <AnimatedAccordion data={accordionData} maxItems={3} />,
            props: 'data: array, maxItems: number, className: string'
        },
        {
            id: 'account-tab',
            name: 'Account Tab',
            category: 'navigation',
            description: 'User account navigation sidebar',
            component: <AccountTab />,
            props: 'Uses usePathname for active state'
        },
        {
            id: 'available-project',
            name: 'Available Project CTA',
            category: 'content',
            description: 'Call-to-action section for project inquiries',
            component: <AvailableProject />,
            props: 'None required'
        },
        {
            id: 'blog',
            name: 'Blog Grid',
            category: 'content',
            description: 'Blog posts grid with header section',
            component: <Blog className="container mx-auto px-4" />,
            props: 'className: string'
        },
        {
            id: 'blog-two',
            name: 'Blog Two',
            category: 'content',
            description: 'Alternative blog layout with centered header',
            component: <BlogTwo className="container mx-auto px-4" title={true} />,
            props: 'className: string, title: boolean'
        },
        {
            id: 'blog-comment',
            name: 'Blog Comment Form',
            category: 'interactive',
            description: 'Comment form for blog posts',
            component: <BlogComment />,
            props: 'None required'
        },
        {
            id: 'blog-slider',
            name: 'Blog Image Slider',
            category: 'content',
            description: 'Image slider for blog posts',
            component: <BlogSlider />,
            props: 'None required - uses internal image array'
        },
        {
            id: 'blog-user-detail',
            name: 'Blog User Detail',
            category: 'layout',
            description: 'Author sidebar with recent posts and social links',
            component: <BlogUserDetail className="max-w-sm" />,
            props: 'className: string'
        },
        {
            id: 'clients',
            name: 'Clients Masonry',
            category: 'testimonials',
            description: 'Masonry layout for client testimonials',
            component: <Clients />,
            props: 'None required - uses internal data'
        },
        {
            id: 'clients-one',
            name: 'Clients Slider',
            category: 'testimonials',
            description: 'Testimonial slider with multiple items',
            component: <ClientsOne title={true} clients={true} />,
            props: 'title: boolean, clients: boolean'
        },
        {
            id: 'clients-two',
            name: 'Clients Single',
            category: 'testimonials',
            description: 'Single testimonial slider with quotes',
            component: <ClientsTwo title={true} />,
            props: 'title: boolean'
        },
        {
            id: 'clients-three',
            name: 'Clients Three',
            category: 'testimonials',
            description: 'Simple testimonial slider without container',
            component: <div className="container mx-auto"><ClientsThree /></div>,
            props: 'None required'
        },
        {
            id: 'coach-about',
            name: 'Coach About',
            category: 'content',
            description: 'About section with video modal and image',
            component: <CoachAbout />,
            props: 'None required'
        },
        {
            id: 'coach-counter',
            name: 'Coach Counter',
            category: 'content',
            description: 'Animated counter section with background',
            component: <CoachCounter />,
            props: 'None required'
        },
        {
            id: 'coming-soon',
            name: 'Coming Soon Timer',
            category: 'utils',
            description: 'Countdown timer for coming soon pages',
            component: <div className="bg-gray-900 p-8 rounded-lg"><Comingsoon /></div>,
            props: 'None required - uses September 13, 2025 deadline'
        },
        {
            id: 'countdown',
            name: 'Countdown Timer',
            category: 'utils',
            description: 'Countdown timer with different styling',
            component: <div className="bg-gray-800 p-8 rounded-lg"><CountDown /></div>,
            props: 'None required - uses December 31, 2025 deadline'
        },
        {
            id: 'company-logo',
            name: 'Company Logos',
            category: 'content',
            description: 'Grid of company logos/partners',
            component: <CompanyLogo />,
            props: 'None required'
        },
        {
            id: 'cookie-modal',
            name: 'Cookie Modal',
            category: 'utils',
            description: 'Cookie consent popup modal',
            component: <CookieModal />,
            props: 'None required - manages own state'
        }
    ];

    const filteredComponents = components.filter(component => {
        const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            component.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'all' || component.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const copyToClipboard = (componentId) => {
        const importStatement = `import ${components.find(c => c.id === componentId)?.name.replace(/\s+/g, '')} from '../componets/${componentId.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}';`;
        navigator.clipboard.writeText(importStatement);
        setCopiedCode(componentId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

    return (
        <>
            <NewNavbar />

            {/* Header */}
            <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container relative z-1">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-bold text-4xl lg:text-6xl text-white mb-6">
                            Component Workspace
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            Explore and test all TrackOG components for your affiliate marketing platform.
                            Copy, customize, and implement with ease.
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-white/80 text-sm">
                            <span>✨ {components.length} Components</span>
                            <span>•</span>
                            <span>🎨 6 Categories</span>
                            <span>•</span>
                            <span>⚡ Live Preview</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Controls */}
            <section className="py-12 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search components..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-900 dark:text-white"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${activeCategory === category.id
                                        ? 'bg-indigo-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {category.icon}
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-center">
                        <span className="text-gray-600 dark:text-gray-400">
                            Showing {filteredComponents.length} of {components.length} components
                        </span>
                    </div>
                </div>
            </section>

            {/* Components Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid gap-12">
                        {filteredComponents.map((component) => (
                            <div key={component.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                {/* Component Header */}
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    {component.name}
                                                </h3>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${component.category === 'navigation' ? 'bg-blue-100 text-blue-600' :
                                                    component.category === 'content' ? 'bg-green-100 text-green-600' :
                                                        component.category === 'interactive' ? 'bg-purple-100 text-purple-600' :
                                                            component.category === 'layout' ? 'bg-orange-100 text-orange-600' :
                                                                component.category === 'testimonials' ? 'bg-pink-100 text-pink-600' :
                                                                    'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    {component.category}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                                {component.description}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                                <strong>Props:</strong> {component.props}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(component.id)}
                                            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                                        >
                                            {copiedCode === component.id ? <FaCheck className="size-4" /> : <FaCopy className="size-4" />}
                                            <span>{copiedCode === component.id ? 'Copied!' : 'Copy Import'}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Component Preview */}
                                <div className="p-6">
                                    <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                                <FaEye className="size-4" />
                                                <span>Live Preview</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <div className="size-3 bg-red-400 rounded-full"></div>
                                                <div className="size-3 bg-yellow-400 rounded-full"></div>
                                                <div className="size-3 bg-green-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Component Preview Container */}
                                        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 min-h-[200px] overflow-hidden">
                                            {component.component}
                                        </div>
                                    </div>

                                    {/* Code Example */}
                                    <div className="mt-6">
                                        <div className="bg-gray-900 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center space-x-2">
                                                    <FaCode className="size-4 text-gray-400" />
                                                    <span className="text-gray-400 text-sm">Import Statement</span>
                                                </div>
                                            </div>
                                            <code className="text-green-400 text-sm">
                                                import {component.name.replace(/\s+/g, '')} from '../componets/{component.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}';
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredComponents.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                No components found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Try adjusting your search terms or category filter
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-3xl font-bold mb-2">{components.length}</div>
                            <div className="text-white/80">Total Components</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
                            <div className="text-white/80">Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">100%</div>
                            <div className="text-white/80">Responsive</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">∞</div>
                            <div className="text-white/80">Customizable</div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNew />
        </>
    );
}