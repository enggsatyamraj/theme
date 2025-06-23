"use client"
import React, { useState } from "react"

export default function AnimatedAccordion({ data, maxItems = 5, className = "" }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <div className={`space-y-4 ${className}`}>
            <div id="accordion-collapse">
                {data.slice(0, maxItems).map((item, index) => (
                    <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
                        <h2 className="text-base font-semibold">
                            <button
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                className={`flex justify-between items-center p-5 w-full font-medium text-start transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-800 ${activeIndex === index
                                    ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600'
                                    : 'text-gray-900 dark:text-white'
                                    }`}
                            >
                                <span className="text-left">{item.title}</span>
                                <svg
                                    className={`size-4 shrink-0 transition-transform duration-300 ease-in-out ${activeIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </h2>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                            }`}>
                            <div className="p-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                                <div className="transform transition-transform duration-300 ease-in-out">
                                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                        {item.desc || "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}