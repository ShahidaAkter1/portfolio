import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = () => {
    return (
        <div>


            <Navbar></Navbar>
          <div className='pt-16 '>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>

        </div>
    );
};

export default Layout;