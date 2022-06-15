import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
export const Home = (props) => {
    console.log('home');
    return (
        <>
            <Nav />
            <Footer />
        </>
    );
}