"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsLightning, BsShield } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md';
import NewNavbar from '../componets/Navbar/new-navbar';
import FooterNew from '../componets/Footer/FooterNew';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        company: '',
        companyDomain: '',
        socialMedia: '',
        referralCode: '',
        agreeToTerms: false,
        agreeToMarketing: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

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

        // Check password strength
        if (name === 'password') {
            setPasswordStrength(calculatePasswordStrength(value));
        }
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const getPasswordStrengthText = () => {
        switch (passwordStrength) {
            case 0:
            case 1: return { text: 'Weak', color: 'text-red-500' };
            case 2:
            case 3: return { text: 'Medium', color: 'text-yellow-500' };
            case 4:
            case 5: return { text: 'Strong', color: 'text-green-500' };
            default: return { text: '', color: '' };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup form submitted:', formData);
        setIsSubmitted(true);
    };

    const validateBusinessEmail = (email) => {
        const gmailPattern = /@gmail\./i;
        return !gmailPattern.test(email);
    };

    const validateDomain = (domain) => {
        const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        return domainPattern.test(domain);
    };

    const passwordsMatch = formData.password === formData.confirmPassword;
    const isFormValid = formData.agreeToTerms &&
        formData.email && validateBusinessEmail(formData.email) &&
        formData.companyDomain && validateDomain(formData.companyDomain) &&
        formData.password && formData.confirmPassword && passwordsMatch &&
        passwordStrength >= 3;

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
                                Welcome to TrackOG!
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                Your account has been created successfully. We've sent you a verification email to complete your setup.
                            </p>

                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Next Steps:</h3>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div className="flex items-start space-x-3">
                                        <div className="size-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">Verify Email</h4>
                                            <p className="text-gray-600 dark:text-gray-400">Check {formData.email} for verification</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="size-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">Complete Profile</h4>
                                            <p className="text-gray-600 dark:text-gray-400">Set up your tracking preferences</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="size-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">Start Tracking</h4>
                                            <p className="text-gray-600 dark:text-gray-400">Launch your first campaign</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/login" className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg text-center">
                                    Login to Dashboard
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
                            Join 500+ Performance Marketing Teams
                        </div>

                        <h1 className="font-semibold lg:leading-relaxed leading-relaxed text-3xl lg:text-5xl mb-6 text-gray-900 dark:text-white">
                            Create Your TrackOG Account
                        </h1>

                        <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Start tracking, optimizing, and scaling your performance marketing campaigns with enterprise-grade analytics and affiliate management.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">Free Setup</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">14-Day Free Trial</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">24/7 Support</span>
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
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Create Your Account</h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Already have an account? <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">Sign in here</Link>
                                    </p>
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

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Password *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                                    placeholder="Create a strong password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                            {formData.password && (
                                                <div className="mt-2">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex space-x-1">
                                                            {[1, 2, 3, 4, 5].map((level) => (
                                                                <div
                                                                    key={level}
                                                                    className={`h-1 w-6 rounded ${level <= passwordStrength
                                                                        ? passwordStrength <= 2
                                                                            ? 'bg-red-500'
                                                                            : passwordStrength <= 3
                                                                                ? 'bg-yellow-500'
                                                                                : 'bg-green-500'
                                                                        : 'bg-gray-300'
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className={`text-xs ${getPasswordStrengthText().color}`}>
                                                            {getPasswordStrengthText().text}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Confirm Password *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                                    placeholder="Confirm your password"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                            {formData.confirmPassword && !passwordsMatch && (
                                                <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                                            )}
                                        </div>
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

                                        <label className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                name="agreeToMarketing"
                                                checked={formData.agreeToMarketing}
                                                onChange={handleInputChange}
                                                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                I'd like to receive product updates and marketing communications from TrackOG
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Create Account
                                        <FaArrowRight className="ml-2" />
                                    </button>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center">
                                                <MdSecurity className="mr-1" />
                                                <span>SSL Secured</span>
                                            </div>
                                            <div className="flex items-center">
                                                <BsShield className="mr-1" />
                                                <span>SOC 2 Certified</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaCheck className="mr-1" />
                                                <span>GDPR Compliant</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNew />
        </>
    );
}