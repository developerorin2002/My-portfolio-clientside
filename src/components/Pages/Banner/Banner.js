import React from 'react';
import './Banner.css'
import profile from '../../Assets/profile.jpg'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="img-overlay d-flex flex-column align-items-center justify-content-center">
                <div className="profile">
                    <img src={profile} className="img-fluid w-100" alt="" />
                </div>
                <div className="content-profile">
                    <h1 style={{ margin: 'auto 0', fontWeight: '500' ,fontSize:"42px", fontFamily:"'Dosis',sans-serif" ,color:'#fff' }}>
                        Hello Im Fahim Muntasir Orin {' '}
                    </h1>
                        <h2>
                        <span style={{ color: '#fff',fontSize:"24px",fontFamily:"'Dosis',sans-serif" }}>
                            <Typewriter
                                words={['WEB DEVELOPER', 'MERN STACK', 'PROGRAMMER', 'FRONT END DEVELOPER']}
                                loop={5}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        </h2>
                    
                </div>
            </div>

        </div>
    );
};

export default Banner;