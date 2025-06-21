import React from 'react';
import { LuFacebook, LuInstagram, LuTwitter } from 'react-icons/lu';


const Footer = () => {
    return (
        <footer>
            {/* Top Section */}
            <div className="bg-neutral text-neutral-content p-10 flex flex-col sm:flex-row justify-around items-center gap-8">

                {/* Contact Info */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-semibold">Contact Us</h1>
                    <h3 className="text-lg">123 ABS Street, Uni 21, Bangladesh</h3>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Social Links */}
                <nav className="text-center space-y-4">
                    <h6 className="text-2xl font-semibold">Follow Us</h6>
                    <p>Join us on social media</p>
                    <div className="flex gap-4 justify-center">
                        <LuFacebook className='text-2xl text-white'/>
                        <LuInstagram className='text-2xl text-white'/>
                        <LuTwitter className='text-2xl text-white'/>

                    </div>
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
