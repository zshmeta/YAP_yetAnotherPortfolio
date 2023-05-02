import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({ icons }) => {
    const iconList = [FaFacebookF, FaInstagram, FaTwitter];
    return (
        <footer className="footer">
            {iconList.map((Icon, index) => (
                <div key={index} className="icon-container">
                    <Icon />
                </div>
            ))}
        </footer>
    );
};

export default Footer;