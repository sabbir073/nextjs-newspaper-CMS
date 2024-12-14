"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaThumbsUp } from 'react-icons/fa';

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="dropdown relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-2 text-xl pr-2 cursor-pointer leading-[5px]"
            >
                <FaThumbsUp /> সঙ্গে থাকুন
            </button>
            {isOpen && (
                <ul className="dropdown-content absolute bg-white shadow-md mt-2 w-[200px] z-10 p-5 space-y-4 text-sm capitalize">
                    <li>
                        <a className='flex items-center gap-2 text-lg' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px] text-red-600' icon={faYoutube} />
                            <p>ইউটিউব</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2 text-lg' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px] text-blue-600' icon={faFacebook} />
                            <p>ফেসবুক</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2 text-lg' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px] text-blue-400' icon={faTwitter} />
                            <p>টুইটার</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2 text-lg' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px] text-blue-700' icon={faLinkedin} />
                            <p>লিঙ্কডিন</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2 text-lg' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px] text-purple-600' icon={faInstagram} />
                            <p>ইন্সট্রাগ্রাম</p>
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
