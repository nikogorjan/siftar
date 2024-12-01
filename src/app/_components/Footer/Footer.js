import React from 'react';
import '../../globals.css';

const Footer = () => {
    return (
        <section className='footer-sec'>
            
            <div className='first-col'>
                <div>
                    <p className='rights'>© Šiftar, vse pravice pidržane</p>
                </div>
                <div>
                    <h2 className='loaded-name'>Šiftar</h2>
                </div>
            </div>


            <div className='socials'>
            <p className='rights'>Facebook</p>
            <p className='rights'>Instagram</p>
            <p className='rights'>Linkedin</p>
            </div>

        </section>
    )
}

export default Footer;