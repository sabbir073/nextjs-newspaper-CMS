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
                className="flex items-center gap-2 text-lg md:text-xl font-bold pr-2 cursor-pointer md:leading-[2px] leading-[2px]"
            >
                <FaThumbsUp /> সঙ্গে থাকুন
            </button>
            {isOpen && (
                <ul className="dropdown-content absolute bg-white shadow-md mt-2 w-[200px] z-10 p-5 space-y-4 text-sm capitalize">
                    <li>
                        <a className='flex items-center gap-2' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px]' icon={faYoutube} />
                            <p>youtube</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px]' icon={faFacebook} />
                            <p>facebook</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px]' icon={faTwitter} />
                            <p>twitter</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px]' icon={faLinkedin} />
                            <p>linkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center gap-2' href='#' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon className='w-[20px]' icon={faInstagram} />
                            <p>instagram</p>
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
