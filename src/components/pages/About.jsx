import React from 'react';

import { FaUserTie, FaUserAstronaut, FaWineGlassAlt, FaUsers, FaRegGem } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-us-container">
            <div className="our-work-container">
                <h1 className="about-title">Our Vision</h1>
                <p className="about-description">Venturesque is a community of adventurous souls redefining the way we travel. We are here to strategically help individuals reconnect with loved ones through exciting adventures. We focus on doing the heavy lifting so you can focus more of your energy on the important things.</p>
            </div>
            <div className="our-principles-container">
                <h1 className="about-title">Our Principles</h1>
                <div className="team-container">
                    <div className="management-card">
                        <FaUsers className="user-profile-pic" />
                        <p className="user-role">Life is about relationships</p>
                    </div>
                    <div className="management-card">
                        <FaWineGlassAlt className="user-profile-pic" />
                        <p className="user-role">Think on the Bright Side</p>
                    </div>
                    <div className="management-card">
                        <FaRegGem className="user-profile-pic" />
                        <p className="user-role">Strive for the best</p>
                    </div>
                </div>
            </div>
            <div className="our-team-container">
                <h1 className="about-title">Our Team</h1>
                <div className="team-container">
                    <div className="management-card">
                        <FaUserTie className="user-profile-pic" />
                        <p className="user-name">James P.</p>
                        <p className="user-role">CEO & Founder</p>
                    </div>
                    <div className="management-card">
                        <FaUserAstronaut className="user-profile-pic" />
                        <p className="user-name">Vivian C.</p>
                        <p className="user-role">Chief Design Officer</p>
                    </div>
                    <div className="management-card">
                        <FaUserAstronaut className="user-profile-pic" />
                        <p className="user-name">Jung P.</p>
                        <p className="user-role">Chief Technology Officer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;