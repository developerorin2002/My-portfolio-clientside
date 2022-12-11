import React from 'react';
import './Banner.css'
import profile from '../../Assets/profile.jpg'
import { Typewriter } from 'react-simple-typewriter';
import html from '../../Assets/KnowledgeImg/html.7a39d6a3.svg'
import css from '../../Assets/KnowledgeImg/css.e95077b0.svg'
import js from '../../Assets/KnowledgeImg/js.fd46ca41.svg'
import react from '../../Assets/KnowledgeImg/reactjs.ee97676b.svg'
import mongodb from '../../Assets/KnowledgeImg/mongodb.452bfc77.svg'
import node from '../../Assets/KnowledgeImg/nodejs.7ca28bcc.svg'
import bootstrap from '../../Assets/KnowledgeImg/bootstrap.98585727.svg';
import express from '../../Assets/KnowledgeImg/expressjs.ea97b712.svg';
import sass from '../../Assets/KnowledgeImg/sass.8aa78a83.svg';
const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="img-overlay d-flex flex-column align-items-center justify-content-center">
                <div className="profile">
                    <img src={profile} className="img-fluid w-100" alt="" />
                </div>
                <div className="content-profile">
                    <h1 style={{ margin: 'auto 0', fontWeight: '500', fontSize: "42px", fontFamily: "'Dosis',sans-serif", color: '#fff' }}>
                        Hello Im Fahim Muntasir Orin {' '}
                    </h1>
                    <h2>
                        <span style={{ color: '#fff', fontSize: "24px", fontFamily: "'Dosis',sans-serif" }}>
                            <Typewriter
                                words={['WEB DEVELOPER', 'MERN STACK', 'PROGRAMMER', 'FRONT END DEVELOPER']}
                                loop={true}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <div className="resume-download">
                        <button className='resume-btn'>Download Resume</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <h3 className='text-center pt-5 knowledge-text'>AREAS OF KNOWLEDGE</h3>
                </div>
                <div className="col-lg-12 py-4">
                    <div className="knowledge-img">
                        <div className="row g-4 py-5 justify-content-center">
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={html} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={css} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={js} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={react} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={bootstrap} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={node} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={express} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={mongodb} className="w-100 img-fluid" alt="" />
                            </div>
                            <div className="col-lg-1 col-md-2 col-sm-3">
                                <img src={sass} className="w-100 img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-lg-12">
                    <div className="see-more">
                        <button className='see-more-btn'>See More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;