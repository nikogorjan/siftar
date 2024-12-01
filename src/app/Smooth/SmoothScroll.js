'use client'

import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }) {


    return (
        <ReactLenis
            root
            options={{
                duration: 2, // slower scroll
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing function
                smooth: true, // enable smooth scrolling
                smoothTouch: true, // enable smooth scrolling on touch devices
                smoothTouch: 0.1,
            }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;