import React from 'react';
import Header from '../Header/Header';
import Banner from '../Pages/Banner/Banner';
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className="row">
            <div className="col-lg-1">
                <div className="side-bar">
                    <Header></Header>
                </div>
            </div>
            <div className="col-lg-11">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default MainLayout;