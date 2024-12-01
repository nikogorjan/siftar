'use client'

import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navbarRef = useRef();
    const menuRef = useRef();
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const navbar = navbarRef.current;
        // Add the visible class to trigger the CSS transition after 4.8 seconds
        const timeoutId = setTimeout(() => {
            navbar.classList.add('visible');
        }, 4000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && menuVisible) {
                setMenuVisible(false);
            }
        };

        if (menuVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuVisible]);

  return (
    <div className='navbar-main' >
        <div className='trigger-button' ref={navbarRef} onClick={handleMenuToggle}>
            <div className='menu-trigger-inner'>
                <div className='button-text'>
                    Menu
                </div>
            </div>
        </div>



        <div className={`hidden-menu ${menuVisible ? 'visible' : ''}`} ref={menuRef}>
            <div className='first-hidden-row'>
                <div className='close-button' onClick={handleMenuToggle}>Zapri</div>
            </div>

            <div className='navigations-column'>
                <div className='navigation-wrapper'>
                    <p className='navigation'>Rezervacija</p>
                </div>
                <div className='navigation-wrapper'>
                    <p className='navigation'>Vila Šiftar</p>
                </div>
                <div className='navigation-wrapper'>
                    <p className='navigation'>Gostišče Šiftar</p>
                </div>
                <div className='navigation-wrapper'>
                    <p className='navigation'>O nas</p>
                </div>
                <div className='navigation-wrapper'>
                    <p className='navigation'>Kontakt</p>
                </div>
                <div className='navigation-wrapper'>
                    <p className='navigation'>Domov</p>
                </div>
            </div>
        </div>


        <div className={`shadows-div ${menuVisible ? 'visible' : ''}`}>

        </div>
      
    </div>
  )
}

export default Navbar
