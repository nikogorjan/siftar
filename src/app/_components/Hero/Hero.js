'use client'

import React, { useRef } from 'react';
import '../../globals.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const Letter1Ref = useRef();
    const Letter2Ref = useRef();
    const Letter3Ref = useRef();
    const Letter4Ref = useRef();
    const Letter5Ref = useRef();
    const HolderRef = useRef();
    const ImgWrapperRef = useRef();
    const ImgRef = useRef();

    const Letter6Ref = useRef();
    const Letter7Ref = useRef();
    const Letter8Ref = useRef();
    const Letter9Ref = useRef();
    const Letter10Ref = useRef();
    const Letter11Ref = useRef();
    const Letter12Ref = useRef();


    useGSAP(() => {
        const letters = [Letter1Ref.current, Letter2Ref.current, Letter3Ref.current, Letter4Ref.current, Letter5Ref.current, Letter11Ref.current];

        // Timeline for letters animation
        const lettersTimeline = gsap.timeline();

        lettersTimeline.fromTo(
            letters,
            { y: '0%', opacity: 1 },
            {
                y: '-100%',
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.5
            }
        );

        // Timeline for image wrapper animation
        const imgTimeline = gsap.timeline();

        imgTimeline.to(
            ImgWrapperRef.current,
            {
                width: '80%',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 1.2
            },
            "+=0" // No delay before starting the next animation
        );

        const imgTimeline2 = gsap.timeline();

        imgTimeline2.to(
            ImgWrapperRef.current,
            {
                height: '100%',
                width: '100%',
                duration: 1,
                ease: 'power3.inOut',
                delay: 2.8
            },
            "+=0"
        );



        const imgTimeline3 = gsap.timeline();

        imgTimeline3.to(
            ImgRef.current,
            {
                scale: 1.1,
                duration: 1,
                ease: 'power3.inOut',
                delay: 1.8
            },
            "+=0"
        );



        const letters2 = [Letter6Ref.current, Letter7Ref.current, Letter8Ref.current, Letter9Ref.current, Letter10Ref.current, Letter12Ref.current];

        // Timeline for letters animation
        const lettersTimeline2 = gsap.timeline();

        lettersTimeline2.fromTo(
            letters2,
            { y: '100%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 3.8
            }
        );

        // Determine ScrollTrigger parameters based on screen width
        let scrollTriggerParams;
        if (window.innerWidth < 1000) {
            scrollTriggerParams = { start: "top-=48px top", y: 50 };
        }else if (window.innerWidth < 1500) {
            scrollTriggerParams = { start: "top top", y: 75 };
        } else if (window.innerWidth < 1700) {
            scrollTriggerParams = { start: "top top", y: 90 };
        }else if (window.innerWidth < 1921) {
            scrollTriggerParams = { start: "top top", y: 100 };
        } else {
            scrollTriggerParams = { start: "top top", y: 125 };
        }

        // ScrollTrigger animation for ImgWrapperRef
        gsap.to(ImgWrapperRef.current, {
            y: scrollTriggerParams.y,
            scrollTrigger: {
                trigger: HolderRef.current,
                start: scrollTriggerParams.start,
                end: "bottom center",
                scrub: true,
                markers: false
            }
        });


    }, []);

    return (
        <section>
            <div className='hero-main'>
                <div className='loaded-name-wrapper'>
                    <p className='loaded-name'>
                        <span ref={Letter1Ref}>Š</span>
                        <span ref={Letter2Ref}>i</span>
                        <span ref={Letter3Ref}>f</span>
                        <span ref={Letter4Ref}>t</span>
                        <span ref={Letter5Ref}>a</span>
                        <span ref={Letter11Ref}>r</span>
                    </p>
                </div>

                <div className='hero-img-holder' ref={HolderRef}>
                    <div className='hero-img-wrapper' ref={ImgWrapperRef}>
                        <img alt='logo' className='hero-img desktop' src='/Images/hisa5.webp' ref={ImgRef} />
                        <img alt='logo' className='hero-img mobile' src='/Images/hisa6.webp' ref={ImgRef} />

                        <div className='afterload-name-wrapper'>
                            <div className='loaded-name-wrapper'>
                                <p className='after-loaded-name'>
                                    <span ref={Letter6Ref}>Š</span>
                                    <span ref={Letter7Ref}>i</span>
                                    <span ref={Letter8Ref}>f</span>
                                    <span ref={Letter9Ref}>t</span>
                                    <span ref={Letter10Ref}>a</span>
                                    <span ref={Letter12Ref}>r</span>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );
}

export default Hero;