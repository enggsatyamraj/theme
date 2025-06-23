"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck, FaCheckCircle, FaRocket, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';
import { BsLightning, BsShieldCheck, BsGift, BsClock } from 'react-icons/bs';
import { MdSecurity, MdVerified, MdTrendingUp, MdSupport } from 'react-icons/md';
import { HiSparkles, HiGlobe } from 'react-icons/hi';
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

    const features = [
        {
            icon: <FaChartLine className="size-6 text-blue-600" />,
            title: "Advanced Analytics",
            desc: "Real-time insights and performance tracking"
        },
        {
            icon: <BsShieldCheck className="size-6 text-emerald-600" />,
            title: "Fraud Protection",
            desc: "AI-powered security and risk management"
        },
        {
            icon: <MdTrendingUp className="size-6 text-purple-600" />,
            title: "Smart Optimization",
            desc: "Automated campaign optimization tools"
        },
        {
            icon: <MdSupport className="size-6 text-orange-600" />,
            title: "Expert Support",
            desc: "24/7 dedicated customer success team"
        }
    ];

    const stats = [
        { number: "500+", label: "Marketing Teams", icon: <FaUsers className="size-5" /> },
        { number: "99.9%", label: "Uptime SLA", icon: <BsShieldCheck className="size-5" /> },
        { number: "2.5M+", label: "Monthly Conversions", icon: <FaChartLine className="size-5" /> },
        { number: "150+", label: "Integrations", icon: <HiGlobe className="size-5" /> }
    ];

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
                {/* Animated Background */}
                <div className="fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
                    <div className="absolute top-20 left-20 size-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-20 size-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-40 size-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <NewNavbar />

                <section className="relative min-h-screen flex items-center justify-center px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Success Animation */}
                        <div className="relative mb-8">
                            <div className="size-32 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                                <FaCheckCircle className="size-16 text-white" />
                            </div>
                            <div className="absolute inset-0 size-32 bg-emerald-400 rounded-full mx-auto animate-ping opacity-20"></div>
                        </div>

                        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
                            <HiSparkles className="mr-2" />
                            Welcome to TrackOG!
                        </div>

                        <h1 className="font-bold text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                            You're All Set!
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            🎉 Thank you for joining TrackOG! We've sent your login credentials and onboarding guide to your email. Your performance marketing journey starts now.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Link href="/dashboard" className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 flex items-center justify-center">
                                <FaRocket className="mr-2 group-hover:animate-bounce" />
                                Launch Dashboard
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/help" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-lg transform hover:-translate-y-1 text-center">
                                Get Support
                            </Link>
                        </div>

                        {/* Next Steps */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {[
                                { icon: "📧", title: "Check Your Email", desc: "Login credentials sent" },
                                { icon: "🚀", title: "Explore Features", desc: "14-day full access" },
                                { icon: "💬", title: "Get Support", desc: "Expert team ready" }
                            ].map((step, index) => (
                                <div key={index} className="p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                                    <div className="text-3xl mb-3">{step.icon}</div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <FooterNew />
            </>
        );
    }

    return (
        <>
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
                <div className="absolute top-20 left-20 size-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-20 size-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-40 size-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <NewNavbar />

            {/* Hero Section */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400 font-semibold mb-8 shadow-lg">
                            <BsLightning className="mr-2 animate-pulse" />
                            14-Day Free Trial • No Credit Card Required
                            <BsGift className="ml-2" />
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-bold text-4xl lg:text-7xl mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                                Experience TrackOG's
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                                Performance Magic
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-12 font-medium">
                            Join <span className="text-indigo-600 font-bold">500+ marketing teams</span> who scaled their campaigns with our enterprise-grade platform. Start tracking, optimizing, and growing today.
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
                            {[
                                { icon: <FaCheck />, text: "No Setup Fees", color: "text-emerald-600" },
                                { icon: <BsClock />, text: "2-Min Setup", color: "text-blue-600" },
                                { icon: <MdVerified />, text: "Full Access", color: "text-purple-600" },
                                { icon: <BsShieldCheck />, text: "Enterprise Security", color: "text-orange-600" }
                            ].map((item, index) => (
                                <div key={index} className={`flex items-center ${item.color} font-semibold text-lg`}>
                                    <span className="mr-3 text-xl">{item.icon}</span>
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="flex items-center justify-center mb-3 text-indigo-600 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                                    <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-20">
                <div className="container relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left Side - Features */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    Everything You Need to
                                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"> Scale Faster</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Get instant access to our complete performance marketing suite. No limitations, no restrictions.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="group p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl group-hover:scale-110 transition-transform">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Proof */}
                            <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="flex space-x-1 mr-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-300" />
                                        ))}
                                    </div>
                                    <span className="font-semibold">4.9/5 Rating</span>
                                </div>
                                <blockquote className="text-lg font-medium mb-4">
                                    "TrackOG transformed our affiliate program. We saw 200% growth in conversions within the first month!"
                                </blockquote>
                                <div className="flex items-center">
                                    <div className="size-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                        <span className="font-bold">JS</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold">John Smith</div>
                                        <div className="text-indigo-100">CEO, TechCorp</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Enhanced Form */}
                        <div className="lg:sticky lg:top-24">
                            <div className="relative">
                                {/* Form Card */}
                                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 text-sm font-semibold mb-4">
                                            <BsGift className="mr-2" />
                                            Limited Time: Free Setup Worth $500
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            Start Your Free Trial
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">Join in less than 2 minutes • No commitment</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                Business Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                placeholder="you@company.com"
                                            />
                                            {formData.email && !validateBusinessEmail(formData.email) && (
                                                <p className="text-red-500 text-sm mt-1 flex items-center">
                                                    <span className="mr-1">⚠️</span>
                                                    Please use a business email (Gmail not allowed)
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Company Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                    placeholder="Your Company"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Website *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="companyDomain"
                                                    value={formData.companyDomain}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                    placeholder="company.com"
                                                />
                                                {formData.companyDomain && !validateDomain(formData.companyDomain) && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                                        <span className="mr-1">⚠️</span>
                                                        Please enter a valid domain
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                LinkedIn/Social Profile
                                            </label>
                                            <input
                                                type="url"
                                                name="socialMedia"
                                                value={formData.socialMedia}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                placeholder="https://linkedin.com/company/yourcompany"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                Referral Code
                                            </label>
                                            <input
                                                type="text"
                                                name="referralCode"
                                                value={formData.referralCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:text-white transition-all duration-200 hover:border-gray-300"
                                                placeholder="Have a referral code?"
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="flex items-start space-x-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    name="agreeToTerms"
                                                    checked={formData.agreeToTerms}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                />
                                                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                                    I agree to TrackOG's <Link href="/terms" className="text-indigo-600 hover:text-indigo-700 underline font-semibold">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 underline font-semibold">Privacy Policy</Link> *
                                                </span>
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!formData.agreeToTerms || (formData.email && !validateBusinessEmail(formData.email)) || (formData.companyDomain && !validateDomain(formData.companyDomain))}
                                            className="group w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 text-lg"
                                        >
                                            <FaRocket className="mr-2 group-hover:animate-bounce" />
                                            Start Free Trial Now
                                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        {/* Security Badges */}
                                        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center space-x-2">
                                                    <MdSecurity className="text-green-600" />
                                                    <span>SSL Secured</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <BsShieldCheck className="text-blue-600" />
                                                    <span>GDPR Compliant</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <FaCheck className="text-purple-600" />
                                                    <span>No Credit Card</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 size-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 size-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="container relative">
                    <div className="text-center text-white">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
                            Join thousands of performance marketers who rely on TrackOG for their growth
                        </p>

                        {/* Logo Grid - You can replace with actual client logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-80">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-semibold">Logo {index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-24 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-start gap-12">
                        <div className="lg:col-span-5 md:mb-0 mb-8">
                            <div className="sticky top-24">
                                <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                                    <HiSparkles className="mr-2" />
                                    Got Questions?
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    Everything You Need to Know
                                </h3>

                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Have questions about your free trial? We've got comprehensive answers to help you get started with confidence.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-3 text-green-600">
                                        <FaCheck className="flex-shrink-0" />
                                        <span className="font-medium">24/7 Expert Support</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-green-600">
                                        <FaCheck className="flex-shrink-0" />
                                        <span className="font-medium">Instant Setup Assistance</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-green-600">
                                        <FaCheck className="flex-shrink-0" />
                                        <span className="font-medium">Dedicated Success Manager</span>
                                    </div>
                                </div>

                                <Link href="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                                    <MdSupport className="mr-2" />
                                    Contact Support Team
                                    <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="space-y-4">
                                <AnimatedAccordion data={faqData} maxItems={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/overlay.png')] opacity-10"></div>

                {/* Floating Shapes */}
                <div className="absolute top-20 left-20 size-32 bg-indigo-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 size-40 bg-purple-500/20 rounded-full blur-xl"></div>

                <div className="container relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
                            <BsClock className="mr-2" />
                            Join 500+ Teams This Month
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Ready to Scale Your
                            <br />
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                                Performance Marketing?
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Start your free trial today and see why industry leaders choose TrackOG for their growth. No commitment, no risk, just results.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="#form" className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 text-lg">
                                <FaRocket className="inline mr-2 group-hover:animate-bounce" />
                                Start Free Trial
                                <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <Link href="/demo" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-1">
                                Watch Demo
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
                            <div className="flex items-center space-x-2">
                                <BsShieldCheck className="text-green-400" />
                                <span>SOC 2 Certified</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdVerified className="text-blue-400" />
                                <span>GDPR Compliant</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaUsers className="text-purple-400" />
                                <span>500+ Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNew />

            {/* Add Custom Styles */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                /* Smooth scrolling for anchor links */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Form focus states */
                input:focus {
                    transform: translateY(-1px);
                    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.1);
                }
                
                /* Button hover animations */
                button:hover, a:hover {
                    transform: translateY(-2px);
                }
                
                /* Card hover effects */
                .group:hover {
                    transform: translateY(-4px);
                }
            `}</style>
        </>
    );
}