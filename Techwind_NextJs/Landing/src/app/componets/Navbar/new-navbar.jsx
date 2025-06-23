'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { LuX, LuUsers, LuBriefcase, LuNewspaper, LuMail, LuStar } from 'react-icons/lu';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { FiTrendingUp, FiHeart, FiMapPin, FiShoppingBag, FiDollarSign, FiLayers } from 'react-icons/fi';
import { BiBarChart, BiCreditCard, BiTargetLock, BiUser, BiShield } from 'react-icons/bi';
import { BsBook, BsQuestionCircle, BsJournalText } from 'react-icons/bs';

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    let [activeDropdown, setActiveDropdown] = useState(null);
    let [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
    let [manu, setManu] = useState('');
    let pathname = usePathname();

    useEffect(() => {
        setManu(pathname)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    }, [setManu])

    const toggleMenu = () => {
        setisMenu(!isMenu);
        setMobileActiveDropdown(null);
    };

    const handleMouseEnter = (dropdown) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (dropdown) => {
        setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown);
    };

    const solutionsData = [
        {
            icon: <FiHeart className="size-5 text-pink-600" />,
            title: "Dating",
            desc: "Bringing love and profit to the dating business"
        },
        {
            icon: <FiShoppingBag className="size-5 text-emerald-600" />,
            title: "Ecommerce",
            desc: "Drive more sales with partnerships"
        },
        {
            icon: <FiMapPin className="size-5 text-blue-600" />,
            title: "Travel",
            desc: "Discover new horizons in the travel industry with Trackog"
        },
        {
            icon: <FiLayers className="size-5 text-purple-600" />,
            title: "Web3",
            desc: "Embrace Web3 possibilities through Trackog"
        },
        {
            icon: <FiShoppingBag className="size-5 text-orange-600" />,
            title: "Media Buying",
            desc: "Embrace media buying efficiency with Trackog"
        },
        {
            icon: <FiDollarSign className="size-5 text-yellow-600" />,
            title: "Finance & Crypto",
            desc: "Maximize your finance & crypto affiliate potential"
        },
        {
            icon: <FiLayers className="size-5 text-indigo-600" />,
            title: "SaaS",
            desc: "Unlimited customers growth with Trackog"
        }
    ];

    const platformData = [
        {
            icon: <BiBarChart className="size-5 text-indigo-600" />,
            title: "Growth Intelligence",
            subtitle: "Smart Analytics",
            desc: "Unlock actionable insights to fuel data-backed decisions"
        },
        {
            icon: <BiCreditCard className="size-5 text-purple-600" />,
            title: "Smart Billing System",
            subtitle: "Automated Payments",
            desc: "Automate payouts and invoicing with precision and transparency"
        },
        {
            icon: <BiTargetLock className="size-5 text-emerald-600" />,
            title: "Engagement Orchestration",
            subtitle: "Campaign Management",
            desc: "Run and scale campaigns effortlessly from a unified dashboard"
        },
        {
            icon: <BiUser className="size-5 text-blue-600" />,
            title: "Customer Journey Automation",
            subtitle: "Personalization Engine",
            desc: "Deliver personalized experiences across every funnel touchpoint"
        },
        {
            icon: <BiShield className="size-5 text-red-600" />,
            title: "Trust & Risk Shield",
            subtitle: "Fraud Protection",
            desc: "Protect your campaigns with advanced fraud detection and prevention"
        }
    ];

    const aboutData = [
        {
            icon: <LuUsers className="size-5 text-indigo-600" />,
            title: "Who We Are",
            subtitle: "Our Story",
            desc: "Discover the mission, vision, and journey behind Trackog."
        },
        {
            icon: <LuBriefcase className="size-5 text-emerald-600" />,
            title: "Careers",
            subtitle: "Join the Crew",
            desc: "Build the future of performance marketing with us."
        },
        {
            icon: <LuNewspaper className="size-5 text-purple-600" />,
            title: "Newsroom",
            subtitle: "Latest Updates",
            desc: "Stay updated with our latest news, updates & industry features."
        },
        {
            icon: <LuMail className="size-5 text-blue-600" />,
            title: "Contact Us",
            subtitle: "Get in Touch",
            desc: "Reach out to collaborate, inquire, or say hello."
        },
        {
            icon: <LuStar className="size-5 text-yellow-600" />,
            title: "Why Trackog",
            subtitle: "Our Advantage",
            desc: "See how Trackog stacks up against the rest—feature by feature."
        }
    ];

    const resourcesData = [
        {
            icon: <BsJournalText className="size-4 text-indigo-600" />,
            title: "Growth Journal",
            subtitle: "Blog",
            desc: "Insights, trends, and updates from the world of performance marketing."
        },
        {
            icon: <BsQuestionCircle className="size-4 text-emerald-600" />,
            title: "Help Center",
            subtitle: "Knowledge Base",
            desc: "Step-by-step guides and FAQs to help you get the most out of Trackog."
        },
        {
            icon: <BsBook className="size-4 text-purple-600" />,
            title: "Performance Dictionary",
            subtitle: "Glossary",
            desc: "Understand key terms, jargon, and metrics in affiliate and adtech ecosystems."
        }
    ];

    return (
        <>
            <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
                'nav-white' : ''}`}>
                <div className="container relative">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            {
                                navClass === "nav-light" ?
                                    <Link className="logo" href="/">
                                        <span className="inline-block dark:hidden">
                                            <Image src='/images/logo-dark.png' className="l-dark" width={138} height={24} alt="" />
                                            <Image src='/images/logo-light.png' className="l-light" width={138} height={24} alt="" />
                                        </span>
                                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                                    </Link>
                                    :
                                    <Link className="logo" href="/">
                                        <Image src='/images/logo-dark.png' width={138} height={24} className="inline-block dark:hidden" alt="" />
                                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                                    </Link>
                            }
                        </div>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden lg:flex flex-1 justify-center">
                            <ul className="flex items-center space-x-8">
                                {/* Home */}
                                <li className={manu === "/" ? "active" : ""}>
                                    <Link href="/" className="font-medium text-slate-900 dark:text-white hover:text-indigo-600 transition-colors duration-200">
                                        Home
                                    </Link>
                                </li>

                                {/* Solutions */}
                                <li
                                    className="relative group"
                                    onMouseEnter={() => handleMouseEnter('solutions')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href="#" className="inline-flex items-center font-medium text-slate-900 dark:text-white hover:text-indigo-600 transition-colors duration-200">
                                        Solutions
                                        <MdKeyboardArrowDown className={`ml-1 size-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                                    </Link>

                                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[1000px] bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-gray-100 dark:border-gray-800 z-50 overflow-hidden transition-all duration-300 ease-out ${activeDropdown === 'solutions'
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}>
                                        <div className="grid grid-cols-2 gap-0">
                                            {/* Left Section - Industries */}
                                            <div className="p-6 border-r border-gray-100 dark:border-gray-800">
                                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Industries</h3>
                                                <div className="space-y-1">
                                                    {solutionsData.map((item, index) => (
                                                        <Link href="#" key={index} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200">
                                                            <div className="flex-shrink-0">
                                                                {item.icon}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Section - Features */}
                                            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Features</h3>

                                                {/* Feature Links - Same style as Industries */}
                                                <div className="space-y-1">
                                                    <Link href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200">
                                                        <div className="flex-shrink-0">
                                                            <BiTargetLock className="size-5 text-blue-600" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">Automate Offer Transfer</h4>
                                                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">Streamline offer distribution with CPAPI integration</p>
                                                        </div>
                                                    </Link>

                                                    <Link href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200">
                                                        <div className="flex-shrink-0">
                                                            <BiBarChart className="size-5 text-purple-600" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">Analyse Performance</h4>
                                                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">Get insights with DataFusion analytics platform</p>
                                                        </div>
                                                    </Link>

                                                    <Link href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200">
                                                        <div className="flex-shrink-0">
                                                            <BiCreditCard className="size-5 text-emerald-600" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">Mass Pay Affiliates</h4>
                                                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">Automate payments with TrackOG Pay system</p>
                                                        </div>
                                                    </Link>

                                                    <Link href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200">
                                                        <div className="flex-shrink-0">
                                                            <BiUser className="size-5 text-blue-600" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">Customer Journey Automation</h4>
                                                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">Personalize experiences across touchpoints</p>
                                                        </div>
                                                    </Link>

                                                    <Link href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-200">
                                                        <div className="flex-shrink-0">
                                                            <BiShield className="size-5 text-red-600" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">Trust & Risk Shield</h4>
                                                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">Advanced fraud detection and prevention</p>
                                                        </div>
                                                    </Link>
                                                </div>

                                                {/* Bottom CTA - Simplified */}
                                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    <div className="text-center">
                                                        <Link href="#" className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors group">
                                                            Explore All Features
                                                            <MdKeyboardArrowRight className="ml-1 size-4 group-hover:translate-x-0.5 transition-transform" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* About Trackog */}
                                <li
                                    className="relative group"
                                    onMouseEnter={() => handleMouseEnter('about')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href="#" className="inline-flex items-center font-medium text-slate-900 dark:text-white hover:text-indigo-600 transition-colors duration-200">
                                        About Trackog
                                        <MdKeyboardArrowDown className={`ml-1 size-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                                    </Link>

                                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[700px] bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-gray-100 dark:border-gray-800 z-50 overflow-hidden transition-all duration-300 ease-out ${activeDropdown === 'about'
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}>
                                        <div className="grid grid-cols-2 gap-0">
                                            {/* Left Section - About Items */}
                                            <div className="p-6 border-r border-gray-100 dark:border-gray-800">
                                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">About Trackog</h3>
                                                <div className="space-y-1">
                                                    {aboutData.map((item, index) => (
                                                        <Link href="#" key={index} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200">
                                                            <div className="flex-shrink-0 mt-0.5">
                                                                {item.icon}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <div className="flex items-center space-x-2">
                                                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                                                    <span className="text-xs text-gray-400">→ {item.subtitle}</span>
                                                                </div>
                                                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Section - CTA */}
                                            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                                                <div className="h-full flex flex-col justify-center items-center text-center">
                                                    <div className="size-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                                        <LuUsers className="size-8 text-white" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Join Our Team</h4>
                                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">Be part of the future of performance marketing</p>
                                                    <Link href="#" className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors group">
                                                        View Openings
                                                        <MdKeyboardArrowRight className="ml-1 size-4 group-hover:translate-x-0.5 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Resources */}
                                <li
                                    className="relative group"
                                    onMouseEnter={() => handleMouseEnter('resources')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href="#" className="inline-flex items-center font-medium text-slate-900 dark:text-white hover:text-indigo-600 transition-colors duration-200">
                                        Resources
                                        <MdKeyboardArrowDown className={`ml-1 size-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                                    </Link>

                                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[600px] bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-gray-100 dark:border-gray-800 z-50 overflow-hidden transition-all duration-300 ease-out ${activeDropdown === 'resources'
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}>
                                        <div className="grid grid-cols-2 gap-0">
                                            {/* First Column - Resources */}
                                            <div className="p-5 border-r border-gray-100 dark:border-gray-800">
                                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Learn & Grow</h3>
                                                <div className="space-y-0.5">
                                                    {resourcesData.map((item, index) => (
                                                        <Link href="#" key={index} className="group flex items-start space-x-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200">
                                                            <div className="flex-shrink-0 mt-0.5">
                                                                {item.icon}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <div className="flex items-center space-x-2">
                                                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                                                    <span className="text-xs text-gray-400">({item.subtitle})</span>
                                                                </div>
                                                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Second Column - CTA */}
                                            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                                                <div className="h-full flex flex-col justify-center items-center text-center">
                                                    <div className="size-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                                                        <BsBook className="size-5 text-white" />
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Knowledge Hub</h4>
                                                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 leading-relaxed">Access our complete resource library</p>
                                                    <Link href="#" className="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors group">
                                                        Explore All
                                                        <MdKeyboardArrowRight className="ml-1 size-4 group-hover:translate-x-0.5 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Desktop Right Side Buttons */}
                        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
                            <Link href="/signup" className="py-2 px-4 inline-block font-medium tracking-wide align-middle duration-300 text-sm text-center bg-transparent hover:bg-gray-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 transition-all">
                                Sign Up
                            </Link>
                            <Link href="/free-trial" className="py-2 px-4 inline-block font-medium tracking-wide align-middle duration-300 text-sm text-center bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/25 border border-indigo-600 hover:border-indigo-700 text-white rounded-lg transition-all transform hover:-translate-y-0.5">
                                Free Trial
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden flex-shrink-0">
                            <button className={`navbar-toggle ${isMenu ? 'open' : ''}`} onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${isMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={toggleMenu}></div>
            </div>

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-white dark:bg-slate-900 shadow-2xl z-50 transition-transform duration-300 ease-out transform lg:hidden ${isMenu ? 'translate-x-0' : 'translate-x-full'
                } w-full sm:w-[70%] md:w-[50%]`}>

                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <Link className="logo" href="/" onClick={toggleMenu}>
                        <Image src='/images/logo-dark.png' width={120} height={20} className="inline-block dark:hidden" alt="" />
                        <Image src='/images/logo-light.png' width={120} height={20} className="hidden dark:inline-block" alt="" />
                    </Link>
                    <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                        <LuX className="size-6 text-gray-600 dark:text-gray-400" />
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full">
                    <div className="overflow-y-auto px-6 py-4">
                        {/* Mobile Navigation Items */}
                        <div className="space-y-2">
                            {/* Home */}
                            <Link href="/" onClick={toggleMenu} className="block py-3 px-4 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                Home
                            </Link>

                            {/* Solutions */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown('solutions')}
                                    className="w-full flex items-center justify-between py-3 px-4 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                >
                                    Solutions
                                    <MdKeyboardArrowDown className={`size-4 transition-transform duration-300 ${mobileActiveDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveDropdown === 'solutions'
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="mt-2 ml-4 space-y-1 transform transition-transform duration-300">
                                        <div className="mb-3">
                                            <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Industries</h5>
                                            {solutionsData.slice(0, 4).map((item, index) => (
                                                <Link href="#" key={index} onClick={toggleMenu} className="flex items-start space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                                                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h4>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Platform Capabilities</h5>
                                            {platformData.slice(0, 3).map((item, index) => (
                                                <Link href="#" key={index} onClick={toggleMenu} className="flex items-start space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                                                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h4>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* About Trackog */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown('about')}
                                    className="w-full flex items-center justify-between py-3 px-4 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                >
                                    About Trackog
                                    <MdKeyboardArrowDown className={`size-4 transition-transform duration-300 ${mobileActiveDropdown === 'about' ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveDropdown === 'about'
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="mt-2 ml-4 space-y-1 transform transition-transform duration-300">
                                        {aboutData.map((item, index) => (
                                            <Link href="#" key={index} onClick={toggleMenu} className="flex items-start space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                                                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h4>
                                                        <span className="text-xs text-gray-400">→ {item.subtitle}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Resources */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown('resources')}
                                    className="w-full flex items-center justify-between py-3 px-4 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                >
                                    Resources
                                    <MdKeyboardArrowDown className={`size-4 transition-transform duration-300 ${mobileActiveDropdown === 'resources' ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveDropdown === 'resources'
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="mt-2 ml-4 space-y-1 transform transition-transform duration-300">
                                        {resourcesData.map((item, index) => (
                                            <Link href="#" key={index} onClick={toggleMenu} className="flex items-start space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                                                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h4>
                                                        <span className="text-xs text-gray-400">({item.subtitle})</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Footer - Action Buttons */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-3 flex-shrink-0">
                        <Link href="/signup" onClick={toggleMenu} className="block w-full py-3 px-4 text-center font-medium text-slate-900 dark:text-white bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                            Sign Up
                        </Link>
                        <Link href="/free-trial" onClick={toggleMenu} className="block w-full py-3 px-4 text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                            Free Trial
                        </Link>
                        <div className="flex items-center justify-center text-sm text-slate-600 dark:text-slate-400 pt-2">
                            🌐 English
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}