'use client'

import React, { useRef } from 'react';
import '../../globals.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';
gsap.registerPlugin(ScrollTrigger);

const Sticky = () => {


    return (
        <section>
            <div className='sticky-main'>
                <div className='sticky-wrapper'>
                    <section class="panel red">
                    <img alt='food1' className='hill-img' src='/Images/vivat2.png' />

                    </section>
                    <section class="panel orange">
                    <img alt='food1' className='hill-img' src='/Images/rotunda.webp' />

                    </section>
                    <section class="panel purple">
                    <img alt='food1' className='hill-img' src='/Images/webp2.webp' />

                    </section>
                    
                </div>
                
            </div>
        </section>
    )
}

export default Sticky
