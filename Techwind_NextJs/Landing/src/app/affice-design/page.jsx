"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaCheck, FaCheckCircle, FaCog, FaShieldAlt, FaUsers, FaChartLine, FaRocket, FaGlobe, FaCode, FaLightbulb } from 'react-icons/fa';
import { BsLightning, BsShield, BsGraphUp, BsGear } from 'react-icons/bs';
import { MdSecurity, MdTrendingUp, MdSpeed, MdIntegrationInstructions, MdAnalytics, MdKeyboardArrowRight } from 'react-icons/md';
import NewNavbar from '../componets/Navbar/new-navbar';
import FooterNew from '../componets/Footer/FooterNew';

export default function AffiseDesignPage() {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];
        htmlTag.classList.add('light');
    }, []);

    const trustedCompanies = [
        "TechFlow", "DigitalLabs", "Performance Pro", "Affiliate Masters",
        "Campaign Hub", "Revenue Boost", "Marketing Edge", "Partner Connect"
    ];

    const integrations = [
        { name: "Shopify" },
        { name: "WooCommerce" },
        { name: "Magento" },
        { name: "BigCommerce" }
    ];

    return (
        <>
            <NewNavbar />

            {/* Hero Section - Ultra Clean & Professional */}
            <section className="relative w-full pt-32 pb-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200/50">
                                <span className="text-sm font-medium text-gray-700">Performance Marketing</span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Drive more sales <br />
                                    with partnerships
                                </h1>

                                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                    Grow your e-commerce platform with the full power of partner marketing. Use TrackOG's advanced analytics, tracking, and anti-fraud features to scale faster.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Link href="/free-trial" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                    Talk to an expert
                                </Link>

                                <div className="flex items-center text-sm text-gray-500">
                                    <span>For Ad Networks, Agencies, Brands & Publishers</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>

                                        <div className="text-center space-y-4">
                                            <div className="w-16 h-16 bg-orange-100 rounded-2xl mx-auto flex items-center justify-center">
                                                <FaChartLine className="text-orange-600 text-xl" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">Performance Dashboard</div>
                                                <div className="text-lg font-semibold text-gray-900">Campaign Analytics</div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Conversion Rate</span>
                                                <span className="text-sm font-semibold text-green-600">+15.3%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-1">
                                                <div className="bg-green-500 h-1 rounded-full" style={{ width: '78%' }}></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Partner Engagement</span>
                                                <span className="text-sm font-semibold text-blue-600">+23.7%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-1">
                                                <div className="bg-blue-500 h-1 rounded-full" style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Minimal floating elements */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-semibold">$</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white text-sm font-semibold">✓</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Companies - Ultra Minimal */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-8">
                        <p className="text-gray-500">Trusted by 1,000+ happy customers worldwide</p>
                        <div className="flex justify-center items-center space-x-12 opacity-50">
                            {trustedCompanies.slice(0, 6).map((company, index) => (
                                <div key={index} className="text-gray-400 font-medium text-sm">
                                    {company}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features Section - Clean & Spacious */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center space-y-6 mb-20">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Manage the sales funnel, track and optimize <br />
                                all stages <span className="text-orange-600">of the purchase</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover the power of TrackOG, where every customer interaction is tracked from ad clicks to product purchases.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            {/* Left - Clean Illustration */}
                            <div className="relative">
                                <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                                    {/* Dashboard Preview */}
                                    <div className="space-y-8">
                                        <div className="bg-gray-900 rounded-2xl p-6">
                                            <div className="flex items-center space-x-2 mb-4">
                                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-1 bg-green-400 rounded-full w-3/4"></div>
                                                <div className="h-1 bg-blue-400 rounded-full w-1/2"></div>
                                                <div className="h-1 bg-orange-400 rounded-full w-2/3"></div>
                                            </div>
                                        </div>

                                        {/* Process Flow */}
                                        <div className="flex items-center justify-center space-x-6">
                                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                                            <div className="w-8 h-px bg-gray-300"></div>
                                            <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                                            <div className="w-8 h-px bg-gray-300"></div>
                                            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Feature Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                        <BsGraphUp className="text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">50+ Statistics</h4>
                                    <p className="text-sm text-gray-600">Detailed analytics slices</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                                        <FaUsers className="text-green-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Customer Journey</h4>
                                    <p className="text-sm text-gray-600">Track every step</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                                        <MdAnalytics className="text-orange-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">S2S Integration</h4>
                                    <p className="text-sm text-gray-600">Seamless tracking</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                                        <FaCode className="text-purple-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Custom Analytics</h4>
                                    <p className="text-sm text-gray-600">Tailored insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Integrations - Minimal */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-8">
                        <p className="text-xl text-gray-700">
                            TrackOG Performance is already <span className="font-semibold">integrated</span> with:
                        </p>
                        <div className="flex justify-center items-center space-x-16">
                            {integrations.map((integration, index) => (
                                <div key={index} className="text-2xl font-bold text-gray-800">
                                    {integration.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Affiliate Management - Professional Layout */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                        Quickly add affiliates and collaborate to achieve <span className="text-orange-600">highest results</span>
                                    </h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Elevate your affiliate management with TrackOG. Seamlessly onboard affiliates, empower them with instant creative assets and amplify sales.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-gray-700">Partner management</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-gray-700">CR automation</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-gray-700">HTML creatives</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-gray-700">A/B testing</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">+5</div>
                                                <span className="font-medium text-gray-900">New Partners</span>
                                            </div>
                                            <span className="text-sm text-gray-500">This Week</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">+10</div>
                                                <span className="font-medium text-gray-900">Performance Boost</span>
                                            </div>
                                            <span className="text-sm text-gray-500">Campaign ROI</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">-20</div>
                                                <span className="font-medium text-gray-900">Reduced Costs</span>
                                            </div>
                                            <span className="text-sm text-gray-500">Monthly Savings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Section - Minimalist */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center space-y-6 mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Multifunctional API <span className="text-orange-600">for you and your partners</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Use the full potential of API from TrackOG. Connect to modern e-commerce platforms in no time.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="bg-gray-50 rounded-3xl p-12">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-gray-900 rounded-2xl p-4 aspect-square flex items-center justify-center">
                                        <div className="space-y-1">
                                            <div className="h-1 bg-green-400 rounded-full w-8"></div>
                                            <div className="h-1 bg-blue-400 rounded-full w-6"></div>
                                            <div className="h-1 bg-yellow-400 rounded-full w-7"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-2xl p-4 aspect-square flex items-center justify-center border border-gray-100">
                                        <div className="text-center">
                                            <div className="text-xs font-medium text-gray-600">API</div>
                                            <div className="text-xs text-gray-400">Docs</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900 rounded-2xl p-4 aspect-square flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-green-400 text-xs font-mono">200</div>
                                            <div className="text-green-400 text-xs">OK</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-lg text-gray-700">Full access API for affiliates</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-lg text-gray-700">Open API for 3rd party tools</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-lg text-gray-700">Billing API integration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section - Clean */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-8">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Be sure your data is <span className="text-orange-600">protected with TrackOG</span>
                        </h3>
                        <p className="text-gray-600">The highest privacy standard in the industry</p>

                        <div className="flex justify-center items-center space-x-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-2 border border-gray-100">
                                    <span className="text-sm font-bold text-gray-700">SOC</span>
                                </div>
                                <div className="text-xs text-gray-500">AICPA SOC</div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-sm font-bold text-blue-600">GDPR</span>
                                </div>
                                <div className="text-xs text-gray-500">🇪🇺 GDPR</div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-sm font-bold text-orange-600">CCPA</span>
                                </div>
                                <div className="text-xs text-gray-500">CCPA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Professional */}
            <section className="py-24 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center text-white space-y-8">
                        <h2 className="text-4xl font-bold leading-tight">
                            Unleash the full power of <br />partner marketing
                        </h2>
                        <p className="text-xl text-gray-300">
                            Scale your business faster with TrackOG.
                        </p>

                        <Link href="/free-trial" className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Start Your Free Trial
                            <FaArrowRight className="ml-2" />
                        </Link>

                        <p className="text-sm text-gray-400">
                            No credit card required • 14-day free trial • Setup in under 5 minutes
                        </p>
                    </div>
                </div>
            </section>

            <FooterNew />
        </>
    );
}