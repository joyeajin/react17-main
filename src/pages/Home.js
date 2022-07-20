import React from 'react';
import SideMenu from '../components/SideMenu';
import VideoList from '../components/VideoList';

const Home = () => {
    return (
        <>
         <SideMenu />
         <section className='main-content'>
            <VideoList />
         </section>
        </>
    );
};

export default Home;