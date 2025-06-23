"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NewNavbar from '../componets/Navbar/new-navbar';
import FooterNew from '../componets/Footer/FooterNew';
import CookieModal from '../componets/cookieModal';

import { FaArrowRight } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';

export default function TrackierDesignPage() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];
        htmlTag.classList.add('light');
    }, []);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    const faqData = [
        {
            question: "How can Trackier help improve an Ecommerce affiliate marketing campaign's ROI?",
            answer: "Trackier provides comprehensive tracking and analytics, allowing you to see which marketing channels (like social media, search ads, or email) are driving the most valuable sales. This helps you optimize spending and maximize ROI."
        },
        {
            question: "Does Trackier offer any specific features for mobile Ecommerce?",
            answer: "Yes, Trackier can track mobile app installs, in-app purchases, and other mobile-specific metrics, giving you a complete view of your mobile E-commerce performance."
        },
        {
            question: "Why is real-time data important for Ecommerce marketing?",
            answer: "Real-time data allows you to make immediate adjustments to campaigns, capitalize on trending opportunities, and prevent losses by stopping underperforming campaigns quickly."
        },
        {
            question: "What kind of reports can be generated with Trackier for an Ecommerce campaign?",
            answer: "Trackier generates comprehensive reports including revenue tracking, conversion analysis, traffic source performance, affiliate performance metrics, and custom KPI dashboards."
        },
        {
            question: "How does Trackier handle attribution for Ecommerce sales?",
            answer: "Trackier uses advanced attribution models to accurately track the customer journey across multiple touchpoints, ensuring proper credit assignment to marketing channels."
        },
        {
            question: "Can Trackier track product-specific performance within an Ecommerce store?",
            answer: "Yes, Trackier can track individual product performance, helping you understand which products drive the most revenue and optimize your marketing accordingly."
        },
        {
            question: "How does Trackier protect Ecommerce campaigns from fraud?",
            answer: "Trackier includes built-in fraud detection that identifies suspicious traffic patterns, click fraud, and invalid conversions to protect your advertising spend."
        },
        {
            question: "Can Trackier integrate with an Ecommerce platform (e.g., Shopify, WooCommerce)?",
            answer: "Yes, Trackier offers seamless integrations with major ecommerce platforms including Shopify, WooCommerce, Magento, and many others."
        },
        {
            question: "How does Trackier ensure data privacy and security for customer data?",
            answer: "Trackier follows strict data privacy protocols and compliance standards to ensure all customer data is handled securely and in accordance with regulations."
        }
    ];

    return (
        <>
            <NewNavbar />

            {/* Hero Section */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-cyan-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-sm font-medium mb-6">
                                Ecommerce
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-normal text-gray-800 mb-6 leading-tight">
                                Trackier for <span className="text-green-500 font-medium">Ecommerce<br />
                                    Affiliate Programs</span>
                            </h1>

                            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
                                Build a thriving Ecommerce ecosystem. Connect with customers, optimize
                                efforts, and watch your ecommerce affiliate marketing flourish. From
                                startups to enterprises, there's something for everyone.
                            </p>

                            <Link href="/free-trial" className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded transition-all duration-200">
                                Get Started
                            </Link>
                        </div>

                        <div className="relative">
                            {/* Placeholder for hero illustration */}
                            <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Hero Illustration Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Header */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-2">
                            <span className="text-green-500">Optimize E-Commerce Affiliate Marketing</span><br />
                            <span className="text-gray-700">Campaign Management Made Easy</span>
                        </h2>
                    </div>
                </div>
            </section>

            {/* Real-time Analytics Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-16">
                        <div className="relative">
                            {/* Placeholder for analytics illustration */}
                            <div className="w-full h-80 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Analytics Dashboard Illustration</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-6 leading-tight">
                                Make Better Decisions Instantly<br />
                                with Trackier's Real-Time Analytics
                            </h3>

                            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                Trackier provides up-to-the-minute data on key metrics like
                                clicks, conversions, and revenue. With this vital information at
                                the snap of your fingers, make better-informed decisions on
                                the spot, optimize your campaigns, and have the opportunity
                                to leverage emerging trends in the industry.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Real-Time Revenue Tracking</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Agile Campaign Adjustments</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Scale Successful Campaigns</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Data-Driven Growth Strategies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fraud Protection Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-16">
                        <div className="relative">
                            {/* Placeholder for fraud protection illustration */}
                            <div className="w-full h-80 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Fraud Protection Illustration</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-6 leading-tight">
                                Protect Your Marketing Campaigns<br />
                                with Trackier's Fraud Shields
                            </h3>

                            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                Fraud or malware can harm any e-commerce business.
                                Trackier's fraud shields and anti-fraud tools detect and block
                                suspicious activities like bot traffic, invalid clicks, and
                                fraudulent conversions. This ensures data accuracy and
                                safeguards your revenue.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Improved Security From Cyber Threats</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Accurate and Reliable Marketing Data</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Reduced Costs and Improved ROI</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <div className="text-sm font-medium text-blue-800 mb-1">Experience Peace of Mind, with Trackier</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-yellow-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-6 leading-tight">
                                See How <span className="text-gray-700 font-medium">Trackier's Marketing Analytics</span><br />
                                Work to Optimize E-commerce<br />
                                Campaigns Efficiently.
                            </h3>

                            <Link href="/demo" className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded transition-all duration-200">
                                Request Your Demo Now
                                <FaArrowRight className="ml-2 text-xs" />
                            </Link>
                        </div>

                        <div className="relative">
                            {/* Placeholder for demo illustration */}
                            <div className="w-full h-64 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Demo Illustration Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth Reporting Section */}
            <section className="py-16 bg-pink-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-16">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-6 leading-tight">
                                Actionable Campaign Insights<br />
                                with In-Depth Reporting
                            </h3>

                            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                Gain deeper insights into your e-commerce campaigns with
                                Trackier's in-depth reporting. Customize reports to track
                                specific KPIs, analyze trends, and identify key areas for
                                improvement. This allows for smarter, data-driven decisions
                                and drives sustained business growth online.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Actionable Insights to Understand Trends</div>
                                </div>
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Data-Backed Strategies Based on Solid Data</div>
                                </div>
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Optimized campaigns and Improved Performance</div>
                                </div>
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Improved Accountability to Track Performance</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for reporting illustration */}
                            <div className="w-full h-80 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Reporting Dashboard Illustration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-16 bg-pink-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-16">
                        <div className="relative">
                            {/* Placeholder for integrations illustration */}
                            <div className="w-full h-80 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Integrations Illustration</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-6 leading-tight">
                                Seamless Tech Stack Integrations<br />
                                with Trackier's Two-Way APIs
                            </h3>

                            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                Streamline your workflow with Trackier's seamless e-
                                commerce integrations. Automate data synchronization
                                across platforms like Shopify, Magento, and WooCommerce
                                for consistent data.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Automated & Simplified Workflows for Smooth Sails</div>
                                </div>
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Pin-Point Data Accuracy with Minimal Human Error</div>
                                </div>
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Strategic Initiatives for Increased Efficiency</div>
                                </div>
                                <div className="bg-pink-100 border border-pink-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-pink-800 mb-1">Detailed E-Commerce Marketing Insights</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Promotion Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-normal text-white mb-4">
                                Have Your Own Ecommerce App?
                            </h3>
                            <p className="text-base text-gray-300 mb-6">
                                With Apptrove, Experience a Whole New World of Efficiency!
                            </p>
                            <Link href="https://apptrove.com/" className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition-all duration-200">
                                Try Apptrove
                                <FaArrowRight className="ml-2 text-xs" />
                            </Link>
                        </div>

                        <div className="relative">
                            {/* Placeholder for app illustration */}
                            <div className="w-full h-64 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">App Illustration Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
                                Frequently Asked, Clearly Answered
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {faqData.map((item, index) => (
                                <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-100 transition-colors"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-base font-medium text-blue-900 pr-4">
                                            {item.question}
                                        </span>
                                        <span className="flex-shrink-0 text-blue-600 text-xl font-bold">
                                            {activeAccordion === index ? '−' : '+'}
                                        </span>
                                    </button>

                                    {activeAccordion === index && (
                                        <div className="px-6 pb-4 bg-blue-100">
                                            <p className="text-base text-gray-700 leading-relaxed pt-2">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CookieModal />
            <FooterNew />
        </>
    );
}