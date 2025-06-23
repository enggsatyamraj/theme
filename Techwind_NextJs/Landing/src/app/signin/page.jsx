"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa';
import { BsLightning, BsShield } from 'react-icons/bs';
import NewNavbar from '../componets/Navbar/new-navbar';
import FooterNew from '../componets/Footer/FooterNew';
import { MdAdminPanelSettings, MdBusinessCenter, MdPeople, MdSecurity } from 'react-icons/md';

export default function SignInPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        loginType: 'affiliate',
        rememberMe: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLoginType, setSelectedLoginType] = useState('affiliate');

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

    const handleLoginTypeChange = (type) => {
        setSelectedLoginType(type);
        setFormData(prev => ({
            ...prev,
            loginType: type
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Login form submitted:', formData);
            setIsLoading(false);
            // Handle redirect based on login type
            switch (formData.loginType) {
                case 'admin':
                    window.location.href = '/admin/dashboard';
                    break;
                case 'affiliate':
                    window.location.href = '/affiliate/dashboard';
                    break;
                case 'advertiser':
                    window.location.href = '/advertiser/dashboard';
                    break;
                default:
                    window.location.href = '/dashboard';
            }
        }, 1500);
    };

    const loginTypes = [
        {
            id: 'affiliate',
            title: 'Affiliate Login',
            subtitle: 'For Publishers & Partners',
            icon: <MdPeople className="size-5" />,
            description: 'Access your affiliate dashboard to track campaigns and earnings',
            bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
            borderColor: 'border-blue-200 dark:border-blue-800',
            selectedBg: 'bg-blue-600',
            textColor: 'text-blue-600'
        },
        {
            id: 'advertiser',
            title: 'Advertiser Login',
            subtitle: 'For Brands & Agencies',
            icon: <MdBusinessCenter className="size-5" />,
            description: 'Manage your campaigns and track performance metrics',
            bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
            borderColor: 'border-emerald-200 dark:border-emerald-800',
            selectedBg: 'bg-emerald-600',
            textColor: 'text-emerald-600'
        },
        {
            id: 'admin',
            title: 'Admin Login',
            subtitle: 'For System Administrators',
            icon: <MdAdminPanelSettings className="size-5" />,
            description: 'Access administrative controls and system management',
            bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
            borderColor: 'border-purple-200 dark:border-purple-800',
            selectedBg: 'bg-purple-600',
            textColor: 'text-purple-600'
        }
    ];

    const selectedType = loginTypes.find(type => type.id === selectedLoginType);

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
                            Welcome Back to TrackOG
                        </div>

                        <h1 className="font-semibold lg:leading-relaxed leading-relaxed text-3xl lg:text-5xl mb-6 text-gray-900 dark:text-white">
                            Sign In to Your Account
                        </h1>

                        <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Access your personalized dashboard and continue optimizing your performance marketing campaigns with powerful analytics and insights.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">Secure Login</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">Multi-Dashboard Access</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                                <FaCheck className="mr-2" />
                                <span className="font-medium">Real-time Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Login Type Selection */}
                        <div className="lg:col-span-5">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Choose Your Portal</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Select the appropriate login type for your account</p>

                                <div className="space-y-4">
                                    {loginTypes.map((type) => (
                                        <div
                                            key={type.id}
                                            onClick={() => handleLoginTypeChange(type.id)}
                                            className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${selectedLoginType === type.id
                                                ? `${type.borderColor} bg-gradient-to-r ${type.bgColor}`
                                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                                }`}
                                        >
                                            <div className="flex items-start space-x-3">
                                                <div className={`flex-shrink-0 p-2 rounded-lg ${selectedLoginType === type.id
                                                    ? `${type.selectedBg} text-white`
                                                    : `bg-gray-100 dark:bg-gray-800 ${type.textColor}`
                                                    } transition-all duration-200`}>
                                                    {type.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{type.title}</h4>
                                                        <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedLoginType === type.id
                                                            ? `${type.borderColor.replace('border-', 'border-')} ${type.selectedBg}`
                                                            : 'border-gray-300 dark:border-gray-600'
                                                            }`}>
                                                            {selectedLoginType === type.id && (
                                                                <div className="size-2 bg-white rounded-full"></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{type.subtitle}</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{type.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Security Badge */}
                                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                    <div className="flex items-center space-x-3">
                                        <MdSecurity className="size-5 text-green-600" />
                                        <div>
                                            <h4 className="font-medium text-green-800 dark:text-green-400 text-sm">Secure Authentication</h4>
                                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Your login is protected with enterprise-grade security</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Login Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
                                <div className="text-center mb-8">
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${selectedType ? `${selectedType.bgColor} ${selectedType.textColor}` : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {selectedType?.icon}
                                        <span className="ml-1">{selectedType?.title}</span>
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Don't have an account? <Link href="/signup" className="text-indigo-600 hover:text-indigo-700 font-medium">Sign up here</Link>
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white transition-all"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

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
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="rememberMe"
                                                checked={formData.rememberMe}
                                                onChange={handleInputChange}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                                        </label>
                                        <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full px-8 py-3 font-medium rounded-lg transition-all duration-200 flex items-center justify-center ${selectedType
                                            ? `${selectedType.selectedBg} hover:opacity-90 text-white`
                                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                            } disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                Signing In...
                                            </>
                                        ) : (
                                            <>
                                                Sign In to {selectedType?.title.replace(' Login', '')} Dashboard
                                                <FaArrowRight className="ml-2" />
                                            </>
                                        )}
                                    </button>

                                    {/* Alternative Login Methods */}
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            Google
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            Facebook
                                        </button>
                                    </div>

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