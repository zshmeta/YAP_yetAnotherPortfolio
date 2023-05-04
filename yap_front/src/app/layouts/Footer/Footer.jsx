import React from 'react';
import './Footer.css';
import {FaBriefcase, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = ({ icons }) => {
    //TODO: Add a Fonction that adds icons to the footer when opened
    const iconList = [FaBriefcase];

    return (
        <footer className="footer">
            {iconList.map((Icon, index) => (
                <div key={index} className="icon-container">
                    <Icon
                    color="white"
                    size="2.2em"
                    />
                </div>
            ))}
        </footer>
    );
};

export default Footer;