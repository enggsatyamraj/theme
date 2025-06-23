"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck, FaCheckCircle } from 'react-icons/fa';
import { BsLightning } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md';
import NewNavbar from '../componets/Navbar/new-navbar';
import FooterNew from '../componets/Footer/FooterNew';
import AnimatedAccordion from '../componets/AnimateAccordion';

export default function FreeTrialPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        company: '',
        companyDomain: '',
        socialMedia: '',
        referralCode: '',
        agreeToTerms: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];
        htmlTag.classList.add('light');
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    const businessTypes = [
        "Ad Network", "Agency", "Brand/Advertiser", "Publisher",
        "Affiliate Network", "Media Buyer", "E-commerce", "SaaS", "Other"
    ];

    const validateBusinessEmail = (email) => {
        const gmailPattern = /@gmail\./i;
        return !gmailPattern.test(email);
    };

    const validateDomain = (domain) => {
        const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        return domainPattern.test(domain);
    };

    const faqData = [
        {
            title: "Do I need a credit card to start the trial?",
            desc: "No credit card required! Start your 14-day trial instantly with just your business email. You'll only need to add payment information if you decide to continue after the trial period."
        },
        {
            title: "What happens after my 14-day trial ends?",
            desc: "Your trial will automatically expire after 14 days. You can choose to upgrade to a paid plan anytime during or after your trial. No automatic charges will occur."
        },
        {
            title: "Do I get full access during the trial?",
            desc: "Yes! You'll have complete access to all TrackOG features, including advanced analytics, affiliate management, fraud protection, and our full API suite."
        },
        {
            title: "Can I get help setting up my campaigns?",
            desc: "Absolutely! Every trial includes personalized onboarding and dedicated support from our team of performance marketing experts to ensure your success."
        },
        {
            title: "Is my data secure during the trial?",
            desc: "Yes, your data is protected with enterprise-grade security including SOC 2 Type II certification, GDPR compliance, and 256-bit SSL encryption."
        }
    ];

    if (isSubmitted) {
        return (
            <>
                <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
                <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-emerald-600/20"></span>
                <NewNavbar />

                <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
                    <div className="container relative z-1">
                        <div className="text-center max-w-2xl mx-auto">
                            <div className="size-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                <FaCheckCircle className="size-10 text-white" />
                            </div>

                            <h1 className="font-semibold lg:leading-relaxed leading-relaxed text-3xl lg:text-5xl mb-6 text-gray-900 dark:text-white">
                                You're All Set!
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                Thank you for signing up for TrackOG's free trial. We've sent you an email with your login credentials and next steps.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/dashboard" className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg text-center">
                                    Access Dashboard
                                </Link>
                                <Link href="/help" className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-slate-700 text-center">
                                    Need Help?
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterNew />
            </>
        );
    }

    return (
        <>
            <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
            <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-purple-600/20"></span>
            <NewNavbar />

            {/* Hero Section */}
            <section className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
                <div className="absolute inset-0 bg-repeat opacity-10 dark:opacity-60" style={{ backgroundImage: "url('/images/overlay.png')" }}></div>
                <div className="container relative z-1">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                            <BsLightning className="mr-2" />
                            Start Your Free 14-Day Trial
                        </div>

                        <h1 className="font-semibold lg:leading-relaxed leading-relaxed text-3xl lg:text-5xl mb-6 text-gray-900 dark:text-white">
                            Experience TrackOG's Power <br />
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                                Risk-Free
                            </span>
                        </h1>

                        <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Join 500+ performance marketing teams who trust TrackOG to scale their campaigns. Get full access to our enterprise-grade platform.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">No Setup Fees</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">Cancel Anytime</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">Full Platform Access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="flex justify-center">
                        {/* Form */}
                        <div className="w-full max-w-2xl">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Start Your Free Trial</h2>
                                    <p className="text-gray-600 dark:text-gray-400">Get started in less than 2 minutes</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Business Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="you@company.com (No Gmail please)"
                                        />
                                        {formData.email && !validateBusinessEmail(formData.email) && (
                                            <p className="text-red-500 text-sm mt-1">Please use a business email (Gmail not allowed)</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="Your company name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Company Domain *
                                        </label>
                                        <input
                                            type="text"
                                            name="companyDomain"
                                            value={formData.companyDomain}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="company.com"
                                        />
                                        {formData.companyDomain && !validateDomain(formData.companyDomain) && (
                                            <p className="text-red-500 text-sm mt-1">Please enter a valid domain (e.g., company.com)</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Social Media Profile
                                        </label>
                                        <input
                                            type="url"
                                            name="socialMedia"
                                            value={formData.socialMedia}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="https://linkedin.com/company/yourcompany"
                                        />
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">LinkedIn, Twitter, Facebook, or any social media profile</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Referral Code
                                        </label>
                                        <input
                                            type="text"
                                            name="referralCode"
                                            value={formData.referralCode}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="Enter referral code (optional)"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                I agree to TrackOG's <Link href="/terms" className="text-indigo-600 hover:text-indigo-700 underline">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 underline">Privacy Policy</Link> *
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!formData.agreeToTerms || (formData.email && !validateBusinessEmail(formData.email)) || (formData.companyDomain && !validateDomain(formData.companyDomain))}
                                        className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Start Free Trial
                                        <FaArrowRight className="ml-2" />
                                    </button>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center">
                                                <MdSecurity className="mr-1" />
                                                <span>SSL Secured</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaCheck className="mr-1" />
                                                <span>GDPR Compliant</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaCheck className="mr-1" />
                                                <span>No Credit Card Required</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-start md:gap-[30px]">
                        <div className="lg:col-span-4 md:mb-0 mb-8">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>
                            <p className="text-slate-400 max-w-xl mb-6">Have questions about your free trial? We've got answers to help you get started with confidence.</p>
                            <Link href="/contact" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">
                                Contact Support
                            </Link>
                        </div>

                        <div className="lg:col-span-8 md:mt-0 mt-8">
                            <AnimatedAccordion data={faqData} maxItems={5} />
                        </div>
                    </div>
                </div>
            </section>

            <FooterNew />
        </>
    );
}