import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
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
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;