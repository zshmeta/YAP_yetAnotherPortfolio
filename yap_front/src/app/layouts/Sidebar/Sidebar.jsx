import React from 'react';
import  './Sidebar.scss';
import styles from  '@/app/globals.css';
const Sidebar = ({ iconsToShow }) => {
    let icons = [
        {name: 'home', visible: true, iconClass: styles.homeIcon},
        {name: 'user', visible: iconsToShow.includes('user'), iconClass: styles.userIcon},
        {name: 'briefcase', visible: iconsToShow.includes('briefcase'), iconClass: styles.briefcaseIcon},
        {name: 'envelope', visible: iconsToShow.includes('envelope'), iconClass: styles.envelopeIcon},
        {name: 'calculator', visible: iconsToShow.includes('calculator'), iconClass: styles.calculatorIcon},
        {name: 'github', visible: iconsToShow.includes('github'), iconClass: styles.githubIcon},
    ];

    return (
        <nav className={ sidebar }>
            {icons.map((icon) => {
                return (
                    icon.visible && (
                        <div key={icon.name} className={ sideItem }>
                            <i className={icon.iconClass} aria-hidden="true"></i>
                        </div>
                    )
                );
            })}
        </nav>
    );
};

export default Sidebar;
