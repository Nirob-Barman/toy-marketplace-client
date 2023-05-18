import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LoginLayout;