import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App} from '../App';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Profile/Profile';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/log-in' element={<Login />}></Route>
                <Route path='/sign-in' element={<Login />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


